import { Footer } from "@/components/footer";
import { NavbarSpekta } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SpektaMagis",
    default: "SpektaMagis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  description:
    "A spectacular performance where light, technology, and music come together to craft moments of wonder and delight.",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Line Up",
      link: "/line-up",
    },
    {
      name: "Get Ticket",
      link: "/",
    },
    {
      name: "Merchandise",
      link: "/merchandise",
    },
    {
      name: "AI",
      link: "/ai-chat",
    },
  ];

  return (
    <html lang="en" data-scroll-behavior="smooth" className="dark">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <NavbarSpekta navItems={navItems} />
        <main className="container mx-auto max-w-[2048px] min-w-[275px]">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
