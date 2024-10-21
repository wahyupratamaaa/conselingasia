"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";

import Header from "@/app/Landing/Article/headArticle";
import Footer from "@/app/Landing/Footer/page";
import Article from "./articles";


import { fromJSON } from "postcss";
import "aos/dist/aos.css";



export default function Home() {
  return (
    <div className="bg-heroBackground">
      <div className="max-w-screen mx-10">
        {/* max width 1280px */}
        <Header />
        <Article/>
        <Footer />
      </div>
    </div>
  );
}


