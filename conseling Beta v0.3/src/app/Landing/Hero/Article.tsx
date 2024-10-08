import useIsMobile from "@/app/Hooks/resizeHooks";
import React from "react";
import ServicesWrappers from "../Wrappers/ServicesWrappers";
import Image from "next/image";

import useAnimation from "@/app/Hooks/animateHooks";
import "aos/dist/aos.css";
import imageBlog1 from "@/../public/article/blog/blog-1.jpg";
import imageBlog2 from "@/../public/article/blog/blog-2.jpg";
import imageBlog3 from "@/../public/article/blog/blog-3.jpg";
import imageAuthor1 from "@/../public/article/blog/blog-author.jpg";
import imageAuthor2 from "@/../public/article/blog/blog-author-2.jpg";
import imageAuthor3 from "@/../public/article/blog/blog-author-3.jpg";

export default function Article() {
  const isMobile = useIsMobile();
  const animation = useAnimation();

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      id="article"
      className="w-full"
      style={{
        marginBottom: isMobile ? 10 : 20,
      }}
    >
      <div
        style={{ marginTop: isMobile ? 100 : 50 }}
        className="w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center"
      >
        <div
          className="flex justify-center text-customBlueText"
          style={{
            // backgroundColor: "#B9FF66",
            height: isMobile ? 46 : "auto",
            width: isMobile ? "80%" : 178,
            // textAlign: "center",
            // borderRadius: 7,
          }}
        >
          <h1 style={{ fontSize: isMobile ? "5vw" : 40 }}>Artikel</h1>
        </div>
        <p
          className={`text-start lg:text-start lg:ml-4 lg:w-1/2 mx-auto ${
            isMobile ? "text-sm mt-4" : "text-lg"
          }`}
        >
          Jelajahi bagaimana Institut Asia menerapkan inovasi dan program
          pendidikan terbaru untuk mempersiapkan mahasiswa menghadapi tantangan
          masa depan dengan sukses.
        </p>
      </div>
      <div className=" w-full">
        <article
          className="flex relative"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding: isMobile ? 20 : 25,
          }}
        >
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-customBlueText mx-2">Terbaru</h3>
            <button
              className="absolute text-white font-sans font-bold bg-customBlue rounded-md active:bg-customBlueHover"
              style={{
                margin: 5,
                marginBottom: 10,
                padding: 5,
                bottom: 2,
                left: 5,
                fontSize: 15,
              }}
            >
              Baca Lainnya
            </button>
          </div>

          <div className="container">
            <div className="row justify-content-start">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <article
                  className=""
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: isMobile ? 20 : 30,
                  }}
                >
                  <div className="">
                    <Image src={imageBlog1} alt="" className="img-fluid" />
                  </div>
                  <h4>
                    <a href="">Dolorum optio tempore voluptas dignissimos</a>
                  </h4>
                  <p>2 Jam yang lalu</p>
                </article>
              </div>
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <article
                  className=""
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    padding: isMobile ? 20 : 30,
                  }}
                >
                  <div className="post-img">
                    <Image src={imageBlog1} alt="" className="img-fluid" />
                  </div>
                  <h4>
                    <a href="">Dolorum optio tempore voluptas dignissimos</a>
                  </h4>
                  <p>2 Jam yang lalu</p>
                </article>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
