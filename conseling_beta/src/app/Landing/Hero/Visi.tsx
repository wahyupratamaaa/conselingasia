import useIsMobile from "@/app/Hooks/resizeHooks";
import React from "react";

export default function Team() {
  const isMobile = useIsMobile();

  return (
    <div
      id=""
      style={{ paddingTop: isMobile ? 30 : 0 }}
      className="justify-center items-center mt-5"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="">
        {/* <div className="flex-col justify-center items-center lg:flex-row ">
          <div
            className="flex items-center justify-center"
            style={{
              height: isMobile ? 60 : "full",
              width: isMobile ? 240 : "full",
              textAlign: "center",
              borderRadius: 10,
              padding: 20,
              margin: isMobile ? "10px 0" : "0", // Memberikan margin di mobile agar box hijau tidak terlalu mepet
            }}
          >
            <h1
              className="text-center text-customBlueText"
              style={{ fontSize: isMobile ? 20 : "" }}
            >
              Tim Bimbingan dan Konseling
            </h1>
          </div>
        </div> */}

        <div
          style={{
            backgroundColor: "white",
            padding: isMobile ? 30 : 50,
            borderRadius: 45,
            marginTop: 20,
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={`flex ${
            isMobile ? "flex-col items-center" : "flex-row items-center"
          }`}
        >
          {/* Box pertama */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: isMobile ? 0 : 32,
              marginBottom: isMobile ? 50 : 0, // Memberikan space ke bawah di mobile
              textAlign: "center",
            }}
          >
            <div className="text-center">
              <h3 style={{ textAlign: "center" }}>Visi</h3>
              <p>
                Menjadikan institut teknologi dan bisnis asia malang sebagai
                kampus yang memiliki layanan prima dalam konseling untuk
                menghasilkan mahasiswa cerdas, menguasai IPTEKS, berkepribadian
                dan berkarakter. Misi
              </p>
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                height: 200,
                borderWidth: 1,
                borderColor: "black",
                borderLeft: "1px solid #fff",
                margin: "0 32px",
              }}
            ></div>
          )}

          {/* Box ketiga */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: isMobile ? 0 : 32,
              textAlign: "center",
            }}
          >
            <div className="text-center">
              <h3 style={{ textAlign: "center", marginTop: "20px" }}>Misi</h3>

              <p>
                1. Aktif berpartisipasi mendukung visi dan misi institut
                teknologi dan bisnis Asia Malang yang berkaitan dengan motivasi
                belajar mahasiswa.
              </p>
              <p>
                2. Membangun pribadi mahasiswa yang kompetitif dalam dunia
                profesional, berkarakter dan memiliki kepribadian unggul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
