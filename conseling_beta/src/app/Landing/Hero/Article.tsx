import useIsMobile from "@/app/Hooks/resizeHooks";
import React, { useEffect, useState } from "react";
import ServicesWrappers from "../Wrappers/ServicesWrappers";
import Image from "next/image";
import "aos/dist/aos.css";
import imageBlog1 from "@/../public/article/blog/blog-1.jpg";
import Link from "next/link";

interface Article {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  isi: string;
}

export default function Article() {
  const isMobile = useIsMobile();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // const generateSlug = (judul: string) => {
  //   return judul.toLowerCase().replace(/\s+/g, "-");
  // };

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/article");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data dari API:", result);

      // Generate slug untuk setiap artikel dan simpan di state
      // const articlesWithSlug = result.data.map((article: Article) => ({
      //   ...article,
      //   slug: generateSlug(article.id), // Tambahkan slug yang di-generate dari judul
      // }));

      setArticles(result.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };


  // Pemanggilan pertama kali saat komponen di-mount
  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading data artikel...</div>;
  }

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
            <Link href={"/Landing/Article"}>
            <button
              className="absolute text-white font-sans font-bold bg-customBlue rounded-md active:bg-customBlueHover"
        
              onClick = {() => console.log('errror')}
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
            </button></Link>
          </div>

          <div className="container">
            <div className="row justify-content-start">
              {articles.length > 0 ? (
                articles
                  .slice(-3)
                  .reverse()
                  .map(
                    (
                      article,
                      index // Mengambil 3 artikel terakhir dan membalik urutannya
                    ) => (
                      <div key={article.id} className="col-xl-4 col-md-6">
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
                              src={`http://localhost:5000/uploads/${article.gambar}`}
                              alt={article.judul}
                              className="h-56"
                            />
                          </div>
                          <br />
                          <Link
                            href={`/articles/${(article.id)}`}
                          >
                            <h4>{article.judul}</h4>
                          </Link>
                          <p>{article.tanggal}</p>
                        </article>
                      </div>
                    )
                  )
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    No articles found.
                  </td>
                </tr>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
