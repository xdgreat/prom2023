import { Suspense } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Loader from "./components/Loader";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Prom 2023",
  description:
    "Explore Prom 2023 – an extraordinary experience filled with excitement, entertainment, and memories in the making. Book your tickets and join us for a night to remember!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Analytics />
        <div id="blur">{children}</div>
      </body>
    </html>
  );
}
