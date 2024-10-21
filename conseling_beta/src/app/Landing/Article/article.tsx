// import useIsMobile from "@/app/Hooks/resizeHooks";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import useAnimation from "@/app/Hooks/animateHooks";
// import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import imageBlog1 from "@/../public/article/blog/blog-1.jpg";
// import Link from "next/link";


// interface Article {
//     id: number;
//     judul: string;
//     tanggal: string;
//     gambar: string;
//     isi: string;
//   }

// export default function Article() {
//   const isMobile = useIsMobile();
//   const animation = useAnimation();
//   const datapanjang = "lorem ipsum";

//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);

//   const generateSlug = (id: Number) => {
//     return id.toString().replace(/\s+/g, "-");
//   };  

//   const fetchArticles = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:5000/api/article");

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Data dari API:", result);

//       // Generate slug untuk setiap artikel dan simpan di state
//       const articlesWithSlug = result.data.map((article: Article) => ({
//         ...article,
//         slug: generateSlug(article.id), // Tambahkan slug yang di-generate dari judul
//       }));

//       setArticles(articlesWithSlug);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   // Pemanggilan pertama kali saat komponen di-mount
//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <div>Loading data artikel...</div>;
//   }

//   return (
//     <div className='mt-20 w-full bg-heroBackground'>
//         <div className=" row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
//         {articles.map((article) => (
            
//             <div key={article.id} className="col">
//                 <div className="card h-100">
//                     <img src={`http://localhost:5000/uploads/${article.gambar}`} alt="..." className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
//                     <div className="card-body">
//                         <Link href={`/articles/${generateSlug(article.id)}`}><h5 className="card-title">{article.judul}</h5></Link>
//                         <div className="card-text"><p className="truncate max-w-xs">{article.isi}</p></div>
//                     </div>
//                     <div className="card-footer">
//                         <small className="text-body-secondary">{article.tanggal}</small>
//                     </div>
//                 </div>
//             </div>
            
//         ))}
//         </div>
//     </div>
//   );
// }


"use client";

import useIsMobile from "@/app/Hooks/resizeHooks";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/article");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data dari API:", result);

      // Set articles dari API ke dalam state
      setArticles(result.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading data artikel...</div>;
  }

  return (
    <div className='mt-20 w-full bg-heroBackground'>
      <div className="row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
        {articles.map((article) => (
          <div key={article.id} className="col">
            <div className="card h-100">
              <img 
                src={`http://localhost:5000/uploads/${article.gambar}`} 
                alt={article.judul} 
                className="card-img-top" 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                {/* Menggunakan Link dengan ID artikel */}
                <Link href={`/articles/${article.id}`}>
                  <h5 className="card-title">{article.judul}</h5>
                </Link>
                <div className="card-text">
                  <p className="truncate max-w-xs">{article.isi}</p>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">{article.tanggal}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// import useIsMobile from "@/app/Hooks/resizeHooks";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import useAnimation from "@/app/Hooks/animateHooks";
// import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import imageBlog1 from "@/../public/article/blog/blog-1.jpg";
// import Link from "next/link";

// interface Article {
//     id: number;
//     judul: string;
//     tanggal: string;
//     gambar: string;
//     isi: string;
//     slug: number;
// }

// export default function Article() {
//   const isMobile = useIsMobile();
//   const animation = useAnimation();
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(true);

//   const generateSlug = (id: Number) => {
//     return id.toString(); // Mengembalikan id sebagai slug tanpa modifikasi
//   };  

//   const fetchArticles = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:5000/api/article");

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Data dari API:", result);

//       // Set articles dari API ke dalam state
//       const articlesWithSlug = result.data.map((article: Article) => ({
//         ...article,
//         slug: generateSlug(article.id), // Tambahkan slug
//       }));

//       setArticles(articlesWithSlug);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <div>Loading data artikel...</div>;
//   }

//   return (
//     <div className='mt-20 w-full bg-heroBackground'>
//       <div className="row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
//         {articles.map((article) => (
//           <div key={article.id} className="col">
//             <div className="card h-100">
//               <img 
//                 src={`http://localhost:5000/uploads/${article.gambar}`} 
//                 alt={article.judul} 
//                 className="card-img-top" 
//                 style={{ height: "200px", objectFit: "cover" }} 
//               />
//               <div className="card-body">
//                 {/* Menggunakan Link dengan slug by id */}
//                 <Link href={`/articles/${article.id}`}>
//                   <h5 className="card-title">{article.judul}</h5>
//                 </Link>
//                 <div className="card-text">
//                   <p className="truncate max-w-xs">{article.isi}</p>
//                 </div>
//               </div>
//               <div className="card-footer">
//                 <small className="text-body-secondary">{article.tanggal}</small>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
