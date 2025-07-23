# 📅 Quản lý thời gian biểu

Ứng dụng quản lý lịch trình cá nhân hiện đại với giao diện thân thiện và tính năng đầy đủ.

---

## 📖 Mô tả dự án

**Quản lý thời gian biểu** là một ứng dụng web quản lý lịch trình cá nhân được xây dựng với công nghệ hiện đại. Ứng dụng giúp người dùng tổ chức, theo dõi và quản lý các sự kiện, công việc một cách hiệu quả với giao diện trực quan và tính năng thông báo thông minh.

---

## ✨ Tính năng chính

- 🗓️ **Quản lý lịch đa dạng**: Xem lịch theo ngày, tuần, tháng  
- 📝 **Quản lý sự kiện**: Tạo, chỉnh sửa, xóa sự kiện với thông tin chi tiết  
- 🏷️ **Phân loại danh mục**: Tổ chức sự kiện theo màu sắc và danh mục  
- 🔔 **Thông báo thông minh**: Nhắc nhở sự kiện qua email và trình duyệt  
- 📊 **Dashboard thống kê**: Theo dõi hiệu suất và xu hướng  
- ⚙️ **Cài đặt linh hoạt**: Tùy chỉnh giao diện, thông báo, lịch  
- 🌙 **Chế độ tối/sáng**: Hỗ trợ theme tự động theo hệ thống  
- 📱 **Responsive**: Tương thích mọi thiết bị  

---

## 🚀 Hướng dẫn cài đặt

### ⚙️ Yêu cầu hệ thống

- Node.js: `>= 18.0.0`  
- PostgreSQL: `>= 13.0`  
- npm hoặc yarn  

### 🔧 Cài đặt Backend

```bash
# 1. Clone repository
git clone https://github.com/TigerDuy/UngDungQLThoiGianBieu.git
cd schedule-manager

# 2. Cài đặt dependencies
cd backend
npm install

# 3. Tạo và cấu hình file .env
cp .env.example .env
# Chỉnh sửa các thông tin trong .env
DATABASE_URL=postgresql://username:password@localhost:5432/schedule_manager
JWT_SECRET=your-super-secret-jwt-key
PORT=5000

# 4. Chạy migrations
npm run migrate

# 5. Khởi động server
npm run dev
```

### 💻 Cài đặt Frontend

```bash
# 1. Cài dependencies
cd ../frontend
npm install

# 2. Tạo file .env.local
cp .env.example .env.local
# Sửa lại API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# 3. Khởi động frontend
npm run dev

# 4. Truy cập ứng dụng
http://localhost:3000
```

### Chạy với Docker

```bash
hoặc docker compose up --build
```

---

## 📚 Cách sử dụng

### Đăng ký tài khoản mới

1. Truy cập `/register`  
2. Nhập họ tên, email, mật khẩu  
3. Xác nhận email (nếu bật)  
4. Đăng nhập và bắt đầu sử dụng  

---

## 🛠️ Phụ thuộc chính

### Backend

```json
{
  "express": "^4.18.2",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "joi": "^17.9.2",
  "knex": "^2.5.1",
  "pg": "^8.11.3",
  "node-cron": "^3.0.2",
  "moment": "^2.29.4",
  "lodash": "^4.17.21"
}
```

### Frontend

```json
{
  "next": "14.0.0",
  "react": "^18.2.0",
  "typescript": "^5.2.2",
  "zustand": "^4.4.1",
  "react-hook-form": "^7.45.4",
  "zod": "^3.22.2",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.3"
}
```

---

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp!  

### Quy trình:

1. Fork repository  
2. Tạo branch: `git checkout -b feature/AmazingFeature`  
3. Commit: `git commit -m 'Add some AmazingFeature'`  
4. Push: `git push origin feature/AmazingFeature`  
5. Tạo Pull Request  

### Coding Standards

- Sử dụng **TypeScript** cho type safety  
- Tuân theo **ESLint + Prettier**  
- Viết **unit test** cho tính năng mới  
- Cập nhật tài liệu nếu thay đổi logic

---

## 🐛 Khắc phục sự cố

### ❓ Database connection failed

```bash
# Kiểm tra PostgreSQL
sudo systemctl status postgresql

# Kiểm tra file .env
DATABASE_URL=postgresql://username:password@localhost:5432/schedule_manager
```

### ❓ Frontend không kết nối được Backend

- Kiểm tra `NEXT_PUBLIC_API_URL` trong `.env.local`  
- Kiểm tra CORS setting trong backend

### ❓ Notifications không hoạt động

- Kiểm tra quyền trên trình duyệt  
- Kiểm tra thông tin email trong `.env`:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 🔍 Debug Mode

```bash
# Backend debug
DEBUG=schedule-manager:* npm run dev

# Frontend debug
NEXT_PUBLIC_DEBUG=true npm run dev
```

---

## 📞 Hỗ trợ

- Email: [tranlamphuducc3tieucan22@gmail.com](mailto:tranlamphuducc3tieucan22@gmail.com)  
- Số diện thoại liên lạc: 0764236846

⏰ Thời gian hỗ trợ:  
- Thứ 2 - Thứ 6: 9:00 - 18:00 (GMT+7)  
- Thứ 7 - CN: 10:00 - 16:00 (GMT+7)

---

## 📚 Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)  
- [Express.js Guide](https://expressjs.com)  
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)  
- [React Hook Form](https://react-hook-form.com/)  
- [Zustand State Management](https://zustand-demo.pmnd.rs/)

---

> © 2025 Quản lý thời gian biểu. All rights reserved.
