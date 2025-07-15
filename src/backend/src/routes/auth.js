const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const db = require('../config/database');
const auth = require('../middleware/auth');

const router = express.Router();

// Validation schemas
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Register
router.post('/register', async (req, res) => {
  try {
    // Validate input
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password } = value;

    // Check if user exists
    const existingUser = await db('users').where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const [userId] = await db('users').insert({
      name,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date()
    }).returning('id');

    // Generate JWT
    const token = jwt.sign(
      { userId: userId.id || userId, email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Return user data (without password)
    const user = await db('users')
      .select('id', 'name', 'email', 'created_at')
      .where({ id: userId.id || userId })
      .first();

    res.status(201).json({
      message: 'Đăng ký thành công',
      token,
      user
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    // Validate input
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password } = value;

    // Find user
    const user = await db('users').where({ email }).first();
    if (!user) {
      return res.status(400).json({ error: 'Email không tồn tại' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Mật khẩu không đúng' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Đăng nhập thành công',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// Get current user
router.get('/me', auth, async (req, res) => {
  try {
    const user = await db('users')
      .select('id', 'name', 'email', 'created_at', 'updated_at')
      .where({ id: req.userId })
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User không tồn tại' });
    }

    res.json({ user });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

// Refresh token
router.post('/refresh', auth, async (req, res) => {
  try {
    const user = await db('users')
      .select('id', 'email')
      .where({ id: req.userId })
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User không tồn tại' });
    }

    // Generate new JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({ token });

  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({ error: 'Lỗi server' });
  }
});

module.exports = router;
