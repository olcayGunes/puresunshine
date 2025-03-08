import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Sunshine - Your Trusted Amazon Growth Partner",
  description: "Partner with Pure Sunshine to maximize your product's potential in the world's largest marketplace. Expert Amazon consulting, optimization, and growth strategies.",
  keywords: ["Amazon consulting", "Amazon growth", "Amazon product optimization", "Amazon marketing", "e-commerce consulting", "Amazon seller services"],
  authors: [{ name: "Pure Sunshine" }],
  creator: "Pure Sunshine",
  publisher: "Pure Sunshine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://puresunshine.vercel.app",
    siteName: "Pure Sunshine",
    title: "Pure Sunshine - Your Trusted Amazon Growth Partner",
    description: "Partner with Pure Sunshine to maximize your product's potential in the world's largest marketplace",
    images: [
      {
        url: "/og-image.jpg", // Bu resmi daha sonra ekleyeceğiz
        width: 1200,
        height: 630,
        alt: "Pure Sunshine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Sunshine - Your Trusted Amazon Growth Partner",
    description: "Partner with Pure Sunshine to maximize your product's potential in the world's largest marketplace",
    images: ["/og-image.jpg"], // Bu resmi daha sonra ekleyeceğiz
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "vXWE8yiI1v6PqyDod3HKi3W1Ho6Udakv57r10SMxqE0"
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
