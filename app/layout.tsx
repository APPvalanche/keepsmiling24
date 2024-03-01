import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flow",
  description: "Created by APPvalanche.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
