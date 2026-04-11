import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Your Name] | Frontend Developer in Lagos | High-Conversion Portfolio",
  description: "Senior Frontend Developer based in Lagos, Nigeria. Specialized in building fast, user-focused web applications using React, Next.js, and Tailwind CSS. Elevate your brand with premium digital experiences.",
  keywords: ["Frontend Developer Lagos", "React Developer Nigeria", "Next.js Expert Lagos", "Web Developer Nigeria", "UI/UX Developer Lagos", "Freelance Developer Lagos"],
  openGraph: {
     title: "[Your Name] | Frontend Developer Portfolio",
     description: "Building fast, high-performance web applications with a focus on conversion and user experience.",
     type: "website",
     locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
