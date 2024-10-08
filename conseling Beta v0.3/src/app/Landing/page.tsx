"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/app/Landing/NavbarHeader/page";
import Hero from "@/app/Landing/Hero/HeroSection";
import Article from "@/app/Landing/Hero/Article";
import Program from "@/app/Landing/Hero/Program";
import Galeri from "@/app/Landing/Hero/Galery";
import Team from "@/app/Landing/Hero/Team";
import News from "@/app/Landing/Hero/News";
import Contact from "@/app/Landing/Hero/ContactUs";
import Footer from "@/app/Landing/Footer/page";
import ScrollToTop from "@/app/Hooks/ScroolToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { fromJSON } from "postcss";
// import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-heroBackground">
      <div className="max-w-screen mx-10">
        {/* max width 1280px */}
        <Header />
        <Hero />
        <Article />
        <ScrollToTop />
        <Program />
        <Galeri />
        <Team />
        <News />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
