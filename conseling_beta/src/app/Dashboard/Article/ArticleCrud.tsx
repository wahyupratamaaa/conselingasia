
"use client"
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import { FaPlus } from "react-icons/fa";
import TextDashboard from "@/app/components/Layout/textDashboard";
import ModalFadeArticle from "@/app/components/Layout/FadeArticle";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiEyeSlash, PiEye } from "react-icons/pi"; // Import ikon mata yang terlihat

// Definisikan interface untuk artikel
interface Article {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  isi: string;
  isVisible: boolean; // Menambahkan properti isVisible
}

// Fungsi deleteArticle untuk menghapus artikel dengan SweetAlert
const deleteArticle = async (id: number, setArticles: React.Dispatch<React.SetStateAction<Article[]>>, articles: Article[]): Promise<void> => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won’t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });

  if (!result.isConfirmed) return;

  try {
    const response = await fetch(`http://localhost:5000/api/article/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`Failed to delete article with id: ${id}`);

    setArticles(articles.filter(article => article.id !== id)); // Menghapus artikel dari state
    await Swal.fire('Deleted!', 'Your article has been deleted.', 'success');
  } catch (error) {
    console.error("Error deleting article:", error instanceof Error ? error.message : error);
    await Swal.fire('Error', 'Failed to delete the article. Please try again later.', 'error');
  }
};

// Komponen utama untuk CRUD artikel
export default function ArticleCrud() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null); // State untuk artikel yang sedang di-edit

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/article");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      setArticles(result.data.map((article: Article) => ({ ...article, isVisible: true }))); // Mengatur isVisible ke true
    } catch (error) {
      console.error("Error fetching articles:", error);
      await Swal.fire('Error', 'Failed to fetch articles. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article); // Set artikel yang sedang di-edit
    setModalOpen(true); // Buka modal untuk mengedit
  };

  const handleDelete = (id: number) => {
    deleteArticle(id, setArticles, articles); // Menggunakan SweetAlert di dalam handleDelete
  };

  const toggleVisibility = async (id: number) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, isVisible: !article.isVisible } : article
    ));

    await Swal.fire({
      icon: 'success',
      title: 'Visibility Toggled',
      text: 'Article visibility has been updated.',
    });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (!isModalOpen) setEditingArticle(null); // Reset artikel yang sedang di-edit saat modal ditutup
  };

  if (loading) return <div>Loading data...</div>;

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold">Data Artikel</h2>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={() => setModalOpen(true)} // Untuk membuka modal buat artikel baru
        >
          <FaPlus />
        </button>
      </div>

      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Judul</th>
              <th className="px-4 py-2 border border-gray-300">Tanggal</th>
              <th className="px-4 py-2 border border-gray-300">Gambar</th>
              <th className="px-4 py-2 border border-gray-300">Isi</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <tr key={article.id} className={`text-center ${!article.isVisible ? 'opacity-50 bg-gray-100 text-gray-500' : ''}`}>
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">{article.judul}</td>
                  <td className="px-4 py-2 border border-gray-300">{article.tanggal}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={`http://localhost:5000/uploads/${article.gambar}`}
                      alt={article.judul}
                      className="h-20 mx-auto"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{article.isi}</td>
                  {/* Kolom untuk Status dengan tombol Edit, Delete, dan Hide */}
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex justify-center items-center space-x-3">
                      <BiSolidEdit onClick={() => handleEdit(article)} className="cursor-pointer" /> 
                      <AiTwotoneDelete onClick={() => handleDelete(article.id)} className="cursor-pointer" />
                      {article.isVisible ? (
                        <PiEye onClick={() => toggleVisibility(article.id)} className="cursor-pointer" />
                      ) : (
                        <PiEyeSlash onClick={() => toggleVisibility(article.id)} className="cursor-pointer" />
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No articles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Teks di luar tabel untuk informasi jumlah entri dan navigasi */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing {articles.length} entries</span>
        <div className="flex space-x-2">
          <button className="bg-gray-300 px-2 py-1 rounded">Previous</button>
          <button className="bg-gray-300 px-2 py-1 rounded">1</button>
          <button className="bg-gray-300 px-2 py-1 rounded">Next</button>
        </div>
      </div>

      {isModalOpen && <ModalFadeArticle toggleModal={toggleModal} article={editingArticle} />} {/* Kirim artikel ke modal */}
    </div>
  );
}
