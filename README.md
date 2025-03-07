# Pure Sunshine - Amazon Growth Partner

A modern landing page for Pure Sunshine, an Amazon growth partner company. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast and optimized performance
- 📱 Mobile-first approach
- 🔄 Smooth animations with Framer Motion
- 📧 Contact form with email integration
- 🎯 SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Nodemailer](https://nodemailer.com/) - Email sending

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/olcayGunes/puresunshine.git
cd puresunshine
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your email configuration.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient-email@yourdomain.com
```

## Project Structure

```
puresunshine/
├── app/
│   ├── api/
│   │   └── contact/
│   │   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       └── Contact.tsx
├── public/
└── styles/
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
