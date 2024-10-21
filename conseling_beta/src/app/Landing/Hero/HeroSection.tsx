import useIsMobile from "@/app/Hooks/useIsMobile";
import React from "react";
import Image from "next/image";
import useAnimation from "@/app/Hooks/animateHooks";
import "aos/dist/aos.css";
import heroImg from "../../../../public/herocontent/heroimg.svg";
import Link from "next/link";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const animation = useAnimation();

  return (
    <div
      data-aos="fade-up"
      style={{ paddingTop: 80 }}
      className="min-h-screen w-full justify-center items-center lg:flex flex-row "
    >
      <div className="justify-between flex-col text-customBlueText">
        <h1 style={{ fontSize: isMobile ? 30 : 48 }}>
          Selamat Datang di Bimbingan dan Konseling
        </h1>
        <p className="hidden lg:block mt-8 mb-12 " style={{ fontSize: 24 }}>
          Kami disini berperan sebagai pendamping dan penanganan masalah belajar
          mahasiswa dari aspek psikologis di Institut Asia Malang.
        </p>
        <br />
        <br />
        <Link
          className="hidden lg:block text-white py-2.5 font-sans w-25 font-bold bg-customBlue hover:bg-black rounded-md active:bg-customBlueHover no-underline"
          href="/User/Login"
          style={{
            margin: 3,
            width: 70,
            // height: 40,
          }}
        >
          <span className="flex items-center justify-center">
            {" "}
            Mulai Konsultasi
          </span>
        </Link>
      </div>
      <div className="pt-4 lg:pt-0 lg:h-3/4 w-full h-full lg:flex items-end justify-center">
        <Image
          className="w-full lg:w-3/4 lg:h-3/4"
          src={heroImg}
          alt="logo"
          unoptimized
        />
      </div>
      <div className="justify-between flex-col text-customBlueText">
        <p className="lg:hidden mt-4" style={{ fontSize: 24 }}>
          Kami disini berperan sebagai pendamping dan penanganan masalah belajar
          mahasiswa dari aspek psikologis di Institut Asia Malang.
        </p>
        <button
          className="lg:hidden text-white font-sans w-25 font-bold bg-customBlue rounded-md active:bg-customBlueHover"
          style={{
            margin: 5,
            width: 70,
            height: 45,
          }}
        >
          Mulai Konsultasi
        </button>
      </div>
    </div>
  );
}
