import useIsMobile from "@/app/Hooks/resizeHooks";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAnimation from "@/app/Hooks/animateHooks";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import imageBlog1 from "@/../public/news/blog/blog-1.jpg";
import Link from "next/link";

interface News {
  id: number;
  judul: string;
  tanggal: string;
  status: string;
  gambar: string;
}

export default function Article() {
  const isMobile = useIsMobile();
  const animation = useAnimation();
  const datapanjang = "lorem ipsum";

  const [newss, setNews] = useState<News[]>([]);
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
      console.error("Error fetching newss:", error);
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
    <div className="mt-20 w-full bg-heroBackground">
      <div className=" row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
        {newss
          .filter((item) => item.status == "1")
          .map((news) => (
            <div key={news.id} className="col">
              <div className="card h-100">
                <img
                  src={`http://localhost:5000/uploads/${news.gambar}`}
                  alt="..."
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <Link href={`/newss/${news.id}`}>
                    <h5 className="card-title">{news.judul}</h5>
                  </Link>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{news.tanggal}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
