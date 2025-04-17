import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Amazing Website",
  description:
    "A beautifully crafted website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="flex flex-col bg-black min-h-screen items-center relative  text-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
