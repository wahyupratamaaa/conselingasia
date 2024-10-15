import React from "react";
import Image from "next/image";
import footerlogo from "@/../public/Bg/footer-bg.png";
import useIsMobile from "@/app/Hooks/resizeHooks";
import asialogo from "@/../../public/logo/iconasia.png";
import abkinlogo from "@/../../public/logo//Abkin.png";
import himpsilogo from "@/../../public/logo/himpsi.original.png";
// import socials from "../../../public/social.png";
export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className="w-full"
        style={{
          borderWidth: 1,
          marginTop: 60,
          borderTopLeftRadius: isMobile ? 0 : 45,
          borderTopRightRadius: isMobile ? 0 : 45,
          padding: 10,
        }}
      >
        {isMobile ? (
          <div
            style={{ padding: 5 }}
            className="flex flex-col justify-center items-center"
          ></div>
        ) : (
          <div className="grid grid-cols-2">
            <div>
              <div className="flex flex-row">
                <div>
                  <Image
                    style={{ width: 150, height: 60 }}
                    src={asialogo}
                    alt="logo"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 style={{ padding: "20 0 0 20" }}>
                    Konseling Institut Asia
                  </h2>
                </div>
              </div>
              <div className="">
                <br /> <br /> <br />
                Bimbingan dan konseling (BK) adalah salah satu unit lembaga yang
                ada di Institut Teknologi dan Bisnis Asia Malang yang berfungsi
                sebagai pendamping dan penanganan masalah belajar mahasiswa dari
                aspek psikologis
              </div>
              <div>
                <br />
                BEKERJA SAMA DENGAN :
              </div>
              <div className="flex flex-row">
                <Image
                  style={{ width: 150, height: 60 }}
                  src={himpsilogo}
                  alt="logo"
                  unoptimized
                />
                <Image
                  style={{ width: 150, height: 60 }}
                  src={abkinlogo}
                  alt="logo"
                  unoptimized
                />
              </div>
              <div></div>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              {/* Gambar footerlogo */}
              <Image
                src={footerlogo}
                alt="logo"
                unoptimized
                style={{ width: "100%", height: "auto"}}
              />

              {/* Visi dan Misi */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  padding: "20px",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Visi</h3>
                <p>
                  Menjadikan institut teknologi dan bisnis asia malang
                  sebagai kampus yang memiliki layanan prima dalam konseling
                  untuk menghasilkan mahasiswa cerdas, menguasai IPTEKS,
                  berkepribadian dan berkarakter. Misi
                </p>

                <h3 style={{ textAlign: "center", marginTop: "20px" }}>Misi</h3>
                <p>
                  1. Aktif berpartisipasi mendukung visi dan misi institut
                  teknologi dan bisnis Asia Malang yang berkaitan dengan
                  motivasi belajar mahasiswa.
                </p>
                <p>
                  2. Membangun pribadi mahasiswa yang kompetitif dalam dunia
                  profesional, berkarakter dan memiliki kepribadian unggul.
                </p>
              </div>
            </div>

            {/* <div>
            <Image src={footerlogo} alt="logo" unoptimized />
              <br />
              <br />
              <br />
              <h3 style={{ textAlign: "center" }}>Visi</h3>
              <p>
                1. Menjadikan institut teknologi dan bisnis asia malang sebagai
                kampus yang memiliki layanan prima dalam konseling untuk
                menghasilkan mahasiswa cerdas, menguasai IPTEKS, berkepribadian
                dan berkarakter. Misi
              </p>
              <br /><br />
              <h3 style={{ textAlign: "center" }}>Misi</h3>
              <p>
              1. Aktif berpartisipasi mendukung visi dan misi institut teknologi dan bisnis Asia Malang yang berkaitan dengan motivasi belajar mahasiswa.
              </p>
              <p>
              2. Membangun pribadi mahasiswa yang kompetitif dalam dunia profesional, berkarakter dan memiliki kepribadian unggul.
              </p>
            </div> */}
            <div></div>
          </div>
        )}
      </div>
      <p style={{ textAlign: "center" }}>© Copyright <b>UPT-SI Institut ASIA Malang</b> 2024  <a href="http://www.uptsi.ac.id">upt_si@asia.ac.id </a></p>
    </>
  );
}
