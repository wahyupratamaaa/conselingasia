"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  isi: string;
}

const HtmlWithChildren = ({ html }: any) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default function ArticleDetail() {
  const { id } = useParams(); // Mengambil id dari URL
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Tipe id yang diambil dari URL mungkin string atau undefined
  useEffect(() => {
    if (id) {
      if (typeof id === "string") {
        fetchArticleById(id);
      } else if (Array.isArray(id)) {
        fetchArticleById(id[0]); // Mengambil elemen pertama jika id adalah array
      }
    }
  }, [id]);

  // Tipe id diberikan secara eksplisit sebagai string
  const fetchArticleById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/article/${id}`);
      console.log(id);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setArticle(result.data);
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(article);
  }, [article]);

  if (loading) {
    return <div>Loading artikel...</div>;
  }

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="w-full mt-20 mx-12">
      <div className="flex flex-col">
        <h1 className="text-center mb-5 text-customBlueText">
          {article.judul}
        </h1>
        <div className="self-center">
          <img
            style={{ maxWidth: "800px", maxHeight: "800px" }}
            src={`http://localhost:5000/uploads/${article.gambar}`}
            alt={article.judul}
          />
          <small>{article.tanggal}</small>
        </div>
        <div style={{margin: "0 50px 0 50px"}}>
        <HtmlWithChildren html={article.isi} />
      </div>
        
      </div>
      
      
      
      
      {/* <div dangerouslySetInnerHTML={{ __html: article.isi }}>{article.isi}</div> */}
    </div>
  );
}
