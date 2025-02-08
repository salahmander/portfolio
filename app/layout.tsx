import { ThemeProvider } from "next-themes";

import type { Metadata } from "next";

import { ToastContainer } from "react-toastify";

import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Salah's Portfolio",
  description: "Where Every Idea Finds its Light",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
