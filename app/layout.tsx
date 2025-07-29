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
    template: "%s | SpektaMagis: Color of Unity",
    default: "SpektaMagis: Color of Unity",
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
    "Spektamagis merupakan suatu pertunjukkan yang memberikan experience yang menyenangkan. Dengan perpaduan berbagai elemen cahaya dan teknologi yang menciptakan sesuatu yang spektakuler dan penuh magis, ditambah dengan perpaduan musik dari para musisi Indonesia.",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      type: "image/x-icon",
    },
  ],
  openGraph: {
    title: "Home - SpektaMagis: Color of Unity",
    description:
      "Spektamagis merupakan suatu pertunjukkan yang memberikan experience yang menyenangkan...",
    url: "https://www.spektamagis.com/",
    siteName: "SpektaMagis",
    images: [
      {
        url: "https://www.spektamagis.com/events/1.png",
        width: 1200,
        height: 630,
        alt: "Spektamagis Thumbnail",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
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
      name: "Chat with me",
      link: "https://ai.spektamagis.com",
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
