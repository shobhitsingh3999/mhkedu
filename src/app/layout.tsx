import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MHK - Consultants Solutions",
  description: "Transform your Abroad Journey with our consultants solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <FooterSection />
      </body>
    </html>
  );
}
