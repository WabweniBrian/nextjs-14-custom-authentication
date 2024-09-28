# Custom Next.js 14 Role Based Authentication - No Third-Party Libraries - With Google Login

![Screenshot](screenshot.png)

This is a simple authentication project built with Next.js 14 and Prisma. It includes features like:

- **Sign up**
- **Sign in**
- **Forgot password**
- **Reset password**
- **Email verification**
- **Comprehensive middleware to handle roles, redirect, etc**
- **Google authentication with react-google auth**
- **Profile Update**
- **Acccount Deletion**
- **Changing Password**
- **Callback redirects**
- **Custom useAuth hook for client components and getCurrentUser for server components**
- **General Dashboard & Admin Dashboard and restrict access i.e general user can't access admin dashboard likewise admin user can't have access to user dashboard**
- **Added and configured seeder for super admin details i.e run `npx prisma db seed`**
- **Session & Cookies with jose**
- **Form Validation with zod and React Hook Form**

## Built With

- **Next.js 14**
- **Typescript**
- **Prisma ORM**
- **Postgresql**
- **Tailwind CSS**
- **Shadcn UI**

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file by copying the contents of `.env.example`.
4. Run Prisma with `npx prisma generate` and `npx prisma db push`.
5. Seed the super admin details with `npx prisma db seed`.
6. Start the development server with `npm run dev`.
7. Access the application at [http://localhost:3000](http://localhost:3000).

## Development

This project uses [Next.js](https://nextjs.org/) and [Prisma](https://www.prisma.io/) for the backend. [Tailwind CSS](https://tailwindcss.com/) is used for styling.

## Deployment

The application can be deployed to any hosting provider that supports Next.js. For a simple setup, consider using [Vercel](https://vercel.com/).
