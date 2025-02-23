This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



profile-landing/
│── app/                    # ✅ App Router (Next.js 13+)
│   ├── layout.tsx          # Layout chung cho toàn bộ app
│   ├── page.tsx            # Trang chính (Home)
│   ├── dashboard/          # Trang dashboard (chỉ admin)
│   │   ├── page.tsx
│   ├── api/                # ✅ Backend API
│   │   ├── auth/           # API Authentication
│   │   │   ├── route.ts    # Xử lý đăng nhập / đăng ký
│   │   ├── users/          # API quản lý user
│   │   │   ├── route.ts    # API /api/users (GET, POST)
│   │   │   ├── [id]/route.ts # API /api/users/:id (GET, PUT, DELETE)
│── components/             # ✅ Tái sử dụng UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│── hooks/                  # ✅ Custom hooks (FE)
│   ├── useAuth.ts          # Hook xử lý xác thực user
│── lib/                    # ✅ Helper functions & config
│   ├── auth.ts             # Xử lý JWT token
│   ├── db.ts               # Kết nối DB (Prisma, MySQL, PostgreSQL)
│   ├── api.ts              # Gọi API từ client
│── middleware.ts           # ✅ Middleware (Auth, Logging,...)
│── prisma/                 # ✅ Prisma schema (nếu dùng)
│   ├── schema.prisma       # Định nghĩa DB (Prisma ORM)
│── public/                 # Assets tĩnh (hình ảnh, favicon,...)
│── styles/                 # ✅ Global styles
│   ├── globals.css
│── .env.local              # ✅ Biến môi trường (API key, DB URL)
│── next.config.js          # Cấu hình Next.js
│── package.json            # Thông tin package & scripts
│── tsconfig.json           # Cấu hình TypeScript
