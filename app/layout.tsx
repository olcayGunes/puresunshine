import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    url: "https://www.puresunshine.net",
    siteName: "Pure Sunshine",
    title: "Pure Sunshine - Your Trusted Amazon Growth Partner",
    description: "Partner with Pure Sunshine to maximize your product's potential in the world's largest marketplace",
    images: [
      {
        url: "/og-image.jpg",
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-7M08WCD29S`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7M08WCD29S');
          `}
        </Script>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pure Sunshine",
              "url": "https://www.puresunshine.net",
              "logo": "https://www.puresunshine.net/images/logo.jpg",
              "description": "Partner with Pure Sunshine to maximize your product's potential in the world's largest marketplace. Expert Amazon consulting, optimization, and growth strategies.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@puresunshine.net"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
