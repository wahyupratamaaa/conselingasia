
// 'use client';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// interface Article {
//   id: number;
//   judul: string;
//   slug: string;
//   tanggal: string;
//   gambar: string;
//   isi: string;
// }

// const ArticlePage = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const [article, setArticle] = useState<Article | null>(null);

//   useEffect(() => {
//     if (slug) {
//       fetch(`http://localhost:5000/api/article/${slug}`)
//         .then(response => response.json())
//         .then(data => setArticle(data));
//     }
//   }, [slug]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{article.judul}</h1>
//       <p>{article.tanggal}</p>
//       <img src={`http://localhost:5000/uploads/${article.gambar}`} alt={article.judul} />
//       <div>{article.isi}</div>
//     </div>
//   );
// };

// export default ArticlePage;

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ArticlePage = () => {
  const { slug } = useParams();

  const response = fetch(`http://localhost:5000/api/article/${slug}`);
  // const data = response.json();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>; // Prevent accessing useParams on the server
  }

  return (
    <div>
      <h1>Halaman Artikel: {slug}</h1>
      {/* Tampilkan konten artikel di sini */}
    </div>
  );
};

export default ArticlePage;

// 'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const ArticlePage = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/article/${slug}`);
//         const data = await response.json();
//         setArticle(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching article:', error);
//       }
//     };

//     if (slug) {
//       fetchArticle();
//     }
//   }, [slug]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div>
//       <h1>{article.judul}</h1>
//       <p>{article.tanggal}</p>
//       <img src={article.gambar} alt={article.judul} />
//       <div>{article.isi}</div>
//     </div>
//   );
// };

// export default ArticlePage;

// 'use client';

// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// // Definisikan interface untuk artikel
// interface Article {
//   judul: string;
//   tanggal: string;
//   gambar: string;
//   isi: string;
// }

// const ArticlePage = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState<Article | null>(null); // Gunakan tipe Article
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/article/${slug}`);
//         if (!response.ok) {
//           throw new Error('Article not found');
//         }
//         const data = await response.json();
//         setArticle(data);
//       } catch (error) {
//         console.error('Error fetching article:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (slug) {
//       fetchArticle();
//     }
//   }, [slug]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold">{article.judul}</h1>
//       <p className="text-gray-500 text-sm">{article.tanggal}</p>
//       {article.gambar && <img src={article.gambar} alt={article.judul} className="my-4 w-full h-auto" />}
//       <div className="mt-4">
//         <p>{article.isi}</p>
//       </div>
//     </div>
//   );
// };

// export default ArticlePage;
