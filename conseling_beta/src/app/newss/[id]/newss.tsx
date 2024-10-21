"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface News {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
}

export default function NewsDetail() {
  const { id } = useParams(); // Mengambil id dari URL
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  // Tipe id yang diambil dari URL mungkin string atau undefined
  useEffect(() => {
    if (id) {
      if (typeof id === "string") {
        fetchNewsById(id);
      } else if (Array.isArray(id)) {
        fetchNewsById(id[0]); // Mengambil elemen pertama jika id adalah array
      }
    }
  }, [id]);

  // Tipe id diberikan secara eksplisit sebagai string
  const fetchNewsById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pengumuman/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setNews(result.data);
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading Pengumuman...</div>;
  }

  if (!news) {
    return <div>Pengumuman tidak ditemukan</div>;
  }

  return (
    <div className="w-full mt-20">
      <div className="flex flex-col">
        <h1 className="text-center mb-5 text-customBlueText">
          {news.judul}
        </h1>
        <div className="self-center">
          <img
            style={{ maxWidth: "800px", maxHeight: "800px" }}
            src={`http://localhost:5000/uploads/${news.gambar}`}
            alt={news.judul}
          />
          <small>{news.tanggal}</small>
        </div>
      </div>
    </div>
  );
}
