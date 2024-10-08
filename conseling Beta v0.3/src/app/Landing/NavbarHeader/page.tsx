import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo/iconasia.png";
import Burger from "../../../../public/icon/burger.png";
import useIsMobile from "../../Hooks/useIsMobile";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex w-full items-center fixed-top top-0 left-0 bg-white"
      style={{ borderRadius: 10 }}
    >
      <div className="flex w-full items-center justify-start">
        <Image
          className="mr-3"
          style={{ width: 120, height: 45, margin: 15 }}
          src={Logo}
          alt="logo"
          unoptimized
        />
      </div>

      {isMobile ? (
        <div className="flex justify-end w-full">
          <button onClick={toggleMenu}>
            <Image
              style={{
                width: 24,
                height: 16,
                margin: 15,
              }}
              src={Burger}
              alt="menu"
              unoptimized
            />
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-items-end items-center mx-3">
            <Link
              href="/"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Beranda
            </Link>
            <Link
              href="#article"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Artikel
            </Link>
            <a
              href="#program"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Program
            </a>
            <a
              href="#gallery"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Galeri
            </a>
            <a
              href="#team"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Tim
            </a>
            <a
              href="#news"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Pengumuman
            </a>
            <a
              href="#contact"
              className="no-underline text-CustomBlue hover:customBlueHover px-2 font-sans font-bold"
            >
              Kontak
            </a>
          </div>

          <div className="flex w-full justify-end mx-3">
            <Link
              className="no-underline text-white justify-items-center font-sans font-bold bg-customBlue active:bg-customBlueHover items-center px-3 py-2 rounded"
              href="/User/Login"
              // style={{
              //   margin: 5,
              //   width: 70,
              //   height: 40,
              //   borderRadius: 14,
              //   fontSize: 15,
              //   textAlign: "center",
              // }}
            >
              Admin
            </Link>
          </div>
        </>
      )}

      {/* Menampilkan menu vertikal ketika burger di klik */}
      {isMenuOpen && isMobile && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center shadow-lg">
          <Link
            href="/"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Beranda
          </Link>
          <a
            href="#article"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Artikel
          </a>
          <a
            href="#program"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Program
          </a>
          <a
            href="#gallery"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Galeri
          </a>
          <a
            href="#team"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Tim
          </a>
          <a
            href="#announce"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold border-b"
          >
            Pengumuman
          </a>
          <a
            href="#contact"
            className="no-underline text-CustomBlue hover:customBlueHover px-2 py-3 w-full text-center font-sans font-bold"
          >
            Kontak
          </a>

          <button
            className="text-white  text-center font-sans w-25 font-bold bg-customBlue rounded-large active:bg-customBlueHover"
            style={{
              margin: 3,
              width: 70,
              height: 45,
            }}
          >
            Admin
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
