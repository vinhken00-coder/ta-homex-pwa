import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TA HomeX | Premium Guest Experience",
  description: "Smart Living • Smart Hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-full font-sans bg-gray-100 text-on-surface">
        <div className="max-w-[430px] mx-auto min-h-[100dvh] bg-surface relative shadow-2xl overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
