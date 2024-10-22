"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import TextDashboard from "@/app/components/Layout/textDashboard";
import ModalFadeArticle from "@/app/components/Layout/FadeArticle";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiEyeSlash, PiEye } from "react-icons/pi";
import Loader from "../../components/Layout/loader";

interface Article {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  isi: string;
  status: string;
  isVisible: boolean;
}

const deleteArticle = async (
  id: number,
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>,
  articles: Article[]
): Promise<void> => {
  const result = await Swal.fire({
    title: "Apakah anda yakin ingin menghapus Article?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, delete!",
  });

  if (!result.isConfirmed) return;

  try {
    const response = await fetch(`http://localhost:5000/api/article/${id}`, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error(`Failed to delete article with id: ${id}`);

    setArticles(articles.filter((article) => article.id !== id));
    await Swal.fire(
      "Article Berhasil di hapus!",
      "Klik ok untuk melanjutkan.",
      "success"
    );
  } catch (error) {
    console.error(
      "Error deleting article:",
      error instanceof Error ? error.message : error
    );
    await Swal.fire(
      "Error",
      "Failed to delete the article. Please try again later.",
      "error"
    );
  }
};

export default function ArticleCrud() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/article");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      console.log("Data dari API:", result.data);
      setArticles(
        result.data
          .sort((a: { id: number }, b: { id: number }) => b.id - a.id)
          .map((article: Article) => ({ ...article, isVisible: true }))
      );
    } catch (error) {
      console.error("Error fetching articles:", error);
      await Swal.fire(
        "Error",
        "Failed to fetch articles. Please try again later.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    deleteArticle(id, setArticles, articles);
  };

  const toggleVisibility = async (id: number, currentStatus: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/article/article_published/${id}`,
        {
          method: "PUT",
        }
      );

      if (!response.ok)
        throw new Error(`Failed to toggle visibility: ${response.status}`);

      // Update the visibility state of the article in the local state
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article.id === id
            ? {
                ...article,
                status: currentStatus === "1" ? "0" : "1",
                isVisible: currentStatus === "1" ? false : true, // Set isVisible based on status
              }
            : article
        )
      );

      const message =
        currentStatus === "1"
          ? "Artikel telah berhasil diarsipkan."
          : "Artikel telah berhasil dibuka arsipnya.";
      await Swal.fire({ icon: "success", title: "Berhasil", text: message });
    } catch (error: any) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Gagal mengubah visibilitas artikel. Error: ${error.message}`,
      });
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (isModalOpen) {
      setEditingArticle(null);
      fetchArticles(); // Reset article when closing modal
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100 overflow-hidden">
      <TextDashboard />
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold">Data Artikel</h2>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={toggleModal}
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
                <tr
                  key={article.id}
                  className={`text-center${
                    article.isVisible ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {article.judul}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {article.tanggal.split(" ")[0]}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={`http://localhost:5000/uploads/${article.gambar}`}
                      alt={article.judul}
                      className="h-20 w-full object-cover"
                    />
                  </td>
                  <td className="w-1/3 px-4 py-2 border border-gray-300">
                    {article.isi}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex justify-center items-center space-x-3">
                      <BiSolidEdit
                        onClick={() => handleEdit(article)}
                        className="cursor-pointer text-blue-700"
                      />
                      <AiTwotoneDelete
                        onClick={() => handleDelete(article.id)}
                        className="cursor-pointer text-red-500"
                      />
                      {article.status !== "0" ? (
                        <PiEye
                          onClick={() =>
                            toggleVisibility(article.id, article.status)
                          }
                          className="cursor-pointer"
                        />
                      ) : (
                        <PiEyeSlash
                          onClick={() =>
                            toggleVisibility(article.id, article.status)
                          }
                          className="cursor-pointer"
                        />
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
      <div className="flex justify-between items-center mt-4">
        <span>Terdapat {articles.length} Article</span>
      </div>
      {isModalOpen && (
        <ModalFadeArticle toggleModal={toggleModal} article={editingArticle} />
      )}
    </div>
  );
}
