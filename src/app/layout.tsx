import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nchia.org'),
  title: {
    default: "NCHIA - North Carolina Homicide Investigators Association",
    template: "%s | NCHIA",
  },
  description: "The North Carolina Homicide Investigators Association provides premier training, networking, and resources for law enforcement professionals dedicated to solving homicides and delivering justice for victims and families.",
  keywords: ["homicide investigation", "law enforcement training", "North Carolina", "NCHIA", "criminal investigation", "forensics", "police training"],
  authors: [{ name: "NCHIA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nchia.org",
    siteName: "NCHIA",
    title: "North Carolina Homicide Investigators Association",
    description: "Premier training and networking for law enforcement professionals dedicated to solving homicides.",
    images: [
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "NCHIA Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "NCHIA - North Carolina Homicide Investigators Association",
    description: "Premier training and networking for law enforcement professionals.",
    images: ["/logo-square.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${sourceSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
