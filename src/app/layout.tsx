import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pradeep Rawat | Full Stack Developer | Freelancer",
  description:
    "Welcome to my portfolio! I’m a Full Stack Developer and freelancer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* ✅ NAVBAR GLOBAL (EVERY PAGE) */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        <Analytics />
      </body>
    </html>
  );
}