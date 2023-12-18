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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9331570343272182"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {/* <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head> */}
        <NavBar />
        <Analytics />
        <div id="blur">{children}</div>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9331570343272182"
          crossorigin="anonymous"
        ></script>
        {/* <!-- test --> */}
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9331570343272182"
          data-ad-slot="9208354729"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </body>
    </html>
  );
}
