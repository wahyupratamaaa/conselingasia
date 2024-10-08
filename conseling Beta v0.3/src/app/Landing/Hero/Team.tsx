import useIsMobile from "@/app/Hooks/resizeHooks";
import React from "react";
import ArrowTransparent from "../../../public/arrowtransparent.png";
import Image from "next/image";

export default function Team() {
  const isMobile = useIsMobile();

  return (
    <div
      id="team"
      style={{ paddingTop: isMobile ? 30 : 75 }}
      className="justify-center items-center mt-5"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="">
        <div className="flex-col justify-center items-center lg:flex-row ">
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
        </div>

        <div
          style={{
            backgroundColor: "#012970",
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
            <div
              style={{
                width: 150,
                height: 150,
                position: "relative",
                // borderRadius: "50%",
                // overflow: "hidden", // Menambahkan overflow: hidden untuk memastikan gambar tidak keluar dari batas lingkaran
                // transform: "rotate(0deg)", // Menambahkan transform rotate yang konsisten antara mobile dan web
              }}
            >
              <img
                src="https://konseling.asia.ac.id/assets/img/team/11.jpg"
                className="aspect-square rounded-full object-center object-cover w-200"
                width={200}
                height={200}
              />
              {/* <Image
                src="https://konseling.asia.ac.id/assets/img/team/11.jpg"
                alt="Descriptive alt text"
                // style={{
                  width={100}
                  height={100}
                  objectFit="cover" // Menjaga aspek rasio gambar agar tidak terdistorsi
                  objectPosition="center"
                  // Menghapus transform berdasarkan perangkat untuk menjaga konsistensi
                // }}
              /> */}
            </div>
            <div
              style={{
                marginLeft: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  color: "#fff",
                }}
              >
                Abdul Aziz Muslim, S.Psi., M.Psi
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                KEPALA BIMBINGAN DAN KONSELING
              </p>
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                height: 200,
                borderWidth: 1,
                borderColor: "#fff",
                borderLeft: "1px solid #fff",
                margin: "0 32px",
              }}
            ></div>
          )}

          {/* Box kedua */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: isMobile ? 0 : 32,
              marginRight: isMobile ? 0 : 32,
              marginBottom: isMobile ? 50 : 0, // Memberikan space ke bawah di mobile
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 150,
                height: 150,
                position: "relative",
                // width: 100,
                // height: 100,
                // position: "relative",
                // borderRadius: "50%",
                // overflow: "hidden", // Menambahkan overflow: hidden untuk memastikan gambar tidak keluar dari batas lingkaran
                // transform: "rotate(0deg)", // Menambahkan transform rotate yang konsisten antara mobile dan web
              }}
            >
              <img
                src="https://konseling.asia.ac.id/assets/img/team/12t.png"
                className="aspect-square rounded-full object-center object-cover w-200"
                width={200}
                height={200}
                // className="w"
                // style={{
                //   width: "100%",
                //   height: "100%",
                //   objectFit: "cover", // Menjaga aspek rasio gambar agar tidak terdistorsi
                //   // Menghapus transform berdasarkan perangkat untuk menjaga konsistensi
                // }}
              />
            </div>
            <div
              style={{
                marginLeft: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  color: "#fff",
                }}
              >
                Tri Wahyuni S.Pd., M.Pd
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                ANGGOTA BIMBINGAN DAN KONSELING
              </p>
              {/* <a
                href="https://www.linkedin.com/in/yuyun-tri-wahyuni-1727b321a/"
                style={{
                  color: "#B9FF66",
                  textDecoration: "none",
                }}
                className="flex mt-4 items-center"
                target="_blank"
                rel="noopener noreferrer">
                Linkedin
                <Image className="ml-4" src={ArrowTransparent} alt="logo" unoptimized />
              </a> */}
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                height: 200,
                borderWidth: 1,
                borderColor: "#fff",
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
            <div
            style={{
              width: 150,
              height: 150,
              position: "relative",
              // style={{
              //   width: 100,
              //   height: 100,
              //   position: "relative",
              //   borderRadius: "50%",
              //   overflow: "hidden", // Menambahkan overflow: hidden untuk memastikan gambar tidak keluar dari batas lingkaran
              //   transform: "rotate(0deg)", // Menambahkan transform rotate yang konsisten antara mobile dan web
              }}
            >
              <img
                src="https://konseling.asia.ac.id/assets/img/team/13.png"
                className="aspect-square rounded-full object-center object-cover w-200"
                width={200}
                height={200}
                // alt="Descriptive alt text"
                // style={{
                //   width: "100%",
                //   height: "100%",
                //   objectFit: "cover", // Menjaga aspek rasio gambar agar tidak terdistorsi
                //   // Menghapus transform berdasarkan perangkat untuk menjaga konsistensi
                // }}
              />
            </div>
            <div
              style={{
                marginLeft: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  marginTop: 0,
                  color: "#fff",
                }}
              >
                Zainul Muchlas, SE., MM
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                ANGGOTA BIMBINGAN DAN KONSELING
              </p>
              {/* <a
                href="https://www.linkedin.com/in/h-zainul-muchlas-se-mm-cra-csf-32a39056/"
                style={{
                  color: "#B9FF66",
                  textDecoration: "none",
                }}
                className="flex mt-4 items-center"
                target="_blank"
                rel="noopener noreferrer">
                Linkedin
                <Image className="ml-4" src={ArrowTransparent} alt="logo" unoptimized />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
