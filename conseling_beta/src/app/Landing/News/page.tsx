"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/app/Landing/Article/headArticle";
import Footer from "@/app/Landing/Footer/page";
import News from "./news";

import { fromJSON } from "postcss";
// import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-heroBackground">
      <div className="max-w-screen mx-10">
        {/* max width 1280px */}
        <Header />
        <News/>
        <Footer />
      </div>
    </div>
  );
}
