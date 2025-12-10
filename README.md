# MLHK Infotech - Full Stack Web Application

Modern, minimalist Next.js web application for MLHK Infotech with complete admin panel, blog system, and SEO optimization.

## Features

- ✅ Modern & Minimalist Design
- ✅ Fully Responsive
- ✅ Admin Panel with Authentication
- ✅ Blog System with Categories & Tags
- ✅ Portfolio/Projects Management
- ✅ Services Management
- ✅ SEO Optimization (Meta Tags, Keywords)
- ✅ Contact Form
- ✅ Dark Theme with Glassmorphism
- ✅ Smooth Animations (Framer Motion)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

Create a PostgreSQL database and update `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mlhk_infotech"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Run Prisma Migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Create Admin User

Run this script to create an admin user:

```bash
node scripts/create-admin.js
```

Or manually in Prisma Studio:

```bash
npx prisma studio
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Admin Panel

Access admin panel at: `http://localhost:3000/admin/login`

Default credentials (after running create-admin script):
- Email: admin@mlhkinfotech.com
- Password: admin123

### Admin Features:

- **Dashboard:** Overview of all content
- **Posts Management:** Create, edit, delete blog posts
- **Projects Management:** Manage portfolio projects
- **Services Management:** Add/edit services
- **SEO Settings:** Configure meta tags for all pages

## Project Structure

```
src/
├── app/
│   ├── (pages)
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   └── contact/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── posts/
│   │   ├── projects/
│   │   ├── services/
│   │   └── seo/
│   └── api/
│       ├── auth/
│       ├── posts/
│       ├── projects/
│       └── admin/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── Button.tsx
└── lib/
    ├── prisma.ts
    └── auth.ts
```

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## SEO Optimization

- Dynamic meta tags for all pages
- Customizable SEO settings via admin panel
- Structured data for blog posts
- Optimized images with Next.js Image component
- Sitemap generation

## Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0066FF',
  secondary: '#00D4FF',
  dark: '#0A0A0A',
  light: '#F5F5F5',
}
```

### Company Info

Update in admin panel or directly in database (Settings table)

## Support

For issues or questions, contact: info@mlhkinfotech.com

## License

© 2024 MLHK Infotech. All rights reserved.
Founded by Hariom Vishwkarma
