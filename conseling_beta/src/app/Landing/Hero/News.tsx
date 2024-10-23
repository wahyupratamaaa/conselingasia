import useIsMobile from "@/app/Hooks/resizeHooks";
import React, { useEffect, useState } from "react";
import ServicesWrappers from "../Wrappers/ServicesWrappers";
import Image from "next/image";

import { usePengumuman } from "../../components/Layout/PengumumanContext"; // Import context

import "aos/dist/aos.css";
import imageBlog1 from "@/../public/article/blog/blog-1.jpg";
import Link from "next/link";

interface News {
  id: number;
  judul: string;
  tanggal: string;
  status: string;
  gambar: string;
}

export default function News() {
  const isMobile = useIsMobile();

  const { pengumuman } = usePengumuman(); // Retrieve pengumuman from context

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  const generateSlug = (judul: string) => {
    return judul.toLowerCase().replace(/\s+/g, "-");
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/pengumuman");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data dari API:", result);

      // Generate slug untuk setiap artikel dan simpan di state
      const newsWithSlug = result.data.map((news: News) => ({
        ...news,
        slug: generateSlug(news.judul), // Tambahkan slug yang di-generate dari judul
      }));

      setNews(newsWithSlug);
    } catch (error) {
      console.error("Error fetching Pengumuman:", error);
    } finally {
      setLoading(false);
    }
  };

  // Pemanggilan pertama kali saat komponen di-mount
  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading data pengumuman...</div>;
  }

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      id="news"
      className="w-full"
      style={{ marginBottom: isMobile ? 10 : 20 }}
    >
      <div
        style={{ marginTop: isMobile ? 100 : 50 }}
        className="w-full flex flex-col justify-https://github.com/wahyupratamaaa/big-task/pull/3/conflict?name=conseling%2BBeta%2Bv0.3%252Fsrc%252Fapp%252FLanding%252FHero%252FNews.tsx&ancestor_oid=6ba56408fe12c0696b6b72a9511e1402ce5961f3&base_oid=318d1e89099cd7fd8b352b1c1515eacce4b92b7b&head_oid=2b64167b2d365b26ae0a739e78c14cd71b56e470between lg:flex-row lg:justify-start items-center"
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
        ></div>
      </div>
      <h1
        className="text-center text-customBlueText"
        style={{ fontSize: isMobile ? "5vw" : 40 }}
      >
        Pengumuman
      </h1>
      <div className=" w-full px-10 py-10">
        <article
          className="flex relative bg-white rounded-lg shadow-lg p-6"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

            padding: isMobile ? 20 : 25,
            paddingTop: 40,
          }}
        >
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          ></div>

          <div className="container">
            <div className="row justify-content-start">
              {news.length > 0 ? (
                news
                  .filter((item) => item.status == "1")
                  .slice(-3)
                  .reverse()
                  .map((news) => (
                    <div key={news.id} className="col-xl-4 col-md-6">
                      <article
                        className=""
                        data-aos="fade-up"
                        data-aos-delay="500"
                        style={{
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          padding: isMobile ? 20 : 30,
                        }}
                      >
                        <div className="">
                          <img
                            src={`http://localhost:5000/uploads/${news.gambar}`}
                            alt={news.judul}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                        </div>
                        <br />
                        <Link href={`/newss/${news.id}`}>
                          <h4>{news.judul}</h4>
                        </Link>
                        <p>{news.tanggal}</p>
                      </article>
                    </div>
                  ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    Tidak ditemukan pengumuman.
                  </td>
                </tr>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/Landing/News"} style={{ alignItems: "center" }}>
                <button
                  className="text-white font-sans font-bold bg-customBlue rounded-md active:bg-customBlueHover"
                  style={{
                    marginTop: 30,
                    marginBottom: 10,
                    padding: 5,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  <h5>Pengumuman Lainnya</h5>
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
