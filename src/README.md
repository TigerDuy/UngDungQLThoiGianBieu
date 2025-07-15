# Schedule Manager - Phase B2

## Mô tả
Giai đoạn B2: **Thiết kế bảng users trong MySQL và cài đặt Node.js, React, MySQL**

## Cấu trúc dự án
```
b2/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js     # Database connection
│   │   ├── middleware/         # Express middleware
│   │   ├── routes/            # API routes
│   │   └── server.js          # Express server
│   ├── migrations/
│   │   └── 001_create_users_table.js  # Users table migration
│   ├── Dockerfile             # Docker config cho backend
│   ├── init.sql              # Database initialization
│   ├── knexfile.js           # Knex configuration
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── layout.tsx     # Root layout
│   │       ├── page.tsx       # Homepage
│   │       └── globals.css    # Global styles
│   ├── Dockerfile            # Docker config cho frontend
│   ├── package.json          # Frontend dependencies
│   ├── next.config.js        # Next.js configuration
│   ├── tailwind.config.ts    # Tailwind CSS config
│   └── tsconfig.json         # TypeScript config
├── shared/
│   └── types.ts              # Shared TypeScript types
├── docker-compose.yml        # Docker orchestration
└── README.md                # Hướng dẫn
```

## Tính năng B2
- ✅ Tất cả tính năng từ B1
- ✅ **Thiết kế bảng users trong MySQL**
  - UUID primary key
  - name, email, password fields
  - created_at, updated_at timestamps
  - Email index và unique constraint
- ✅ **Cài đặt Node.js, React, MySQL**
  - Express server setup (server.js)
  - Database connection (database.js)
  - Next.js React app với layout và homepage
  - MySQL integration với Knex.js

## Database Schema - Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Cài đặt và chạy
```bash
cd b2
docker-compose up -d

# Chạy migration để tạo bảng users
docker-compose exec backend npm run migrate
```

## Giai đoạn tiếp theo
- **B3**: Thêm trang đăng nhập và đăng ký
