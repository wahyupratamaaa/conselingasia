import useIsMobile from "@/app/Hooks/resizeHooks";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAnimation from "@/app/Hooks/animateHooks";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
  const animation = useAnimation();
  const datapanjang = "lorem ipsum";

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const generateSlug = (judul: string) => {
    return judul.toLowerCase().replace(/\s+/g, "-");
  };

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
      const articlesWithSlug = result.data.map((article: Article) => ({
        ...article,
        slug: generateSlug(article.judul), // Tambahkan slug yang di-generate dari judul
      }));

      setArticles(articlesWithSlug);
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
    <div className='mt-20 w-full bg-heroBackground'>
        <div className=" row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
        {articles.map((article) => (
            
            <div key={article.id} className="col">
                <div className="card h-100">
                    <img src={`http://localhost:5000/uploads/${article.gambar}`} alt="..." className="card-img-top" />
                    <div className="card-body">
                        <Link href={`/articles/${generateSlug(article.judul)}`}><h5 className="card-title">{article.judul}</h5></Link>
                        <div className="card-text"><p className="truncate max-w-xs">{article.isi}</p></div>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">{article.tanggal}</small>
                    </div>
                </div>
            </div>
            
        ))}
        </div>
        <div className=" row row-cols-1 row-cols-md-4 g-4" data-aos="fade-up">
            <div className="col">
                <div className="card h-100">
                    <Image src={imageBlog1} alt="..." className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Ini Judul</h5>
                        <p className="card-text"> ini deskripsi</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">terakhir diupdate</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Image src={imageBlog1} alt="..." className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Ini Judul</h5>
                        <p className="card-text"> ini deskripsi</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">terakhir diupdate</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Image src={imageBlog1} alt="..." className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Ini Judul</h5>
                        <div className="card-text"><p className="truncate max-w-xs">{datapanjang}</p></div>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">terakhir diupdate</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Image src={imageBlog1} alt="..." className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Ini Judul</h5>
                        <div className="card-text"><p className="truncate max-w-xs">{datapanjang}</p></div>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">terakhir diupdate</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Image src={imageBlog1} alt="..." className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Ini Judul</h5>
                        <div className="card-text"><p className="truncate max-w-xs">{datapanjang}</p></div>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">terakhir diupdate</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

{/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div> */}
