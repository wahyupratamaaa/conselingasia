"use client";

import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
// import { CKEditor } from "ckeditor4-react";
import Quill from "quill";
// import Editor from "@/app/components/Layout/Editor";
const Delta = Quill.import("delta");
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => import("@/app/components/Layout/custom-editor"),
  {
    ssr: false,
  }
);

interface ModalFadeArticleProps {
  toggleModal: () => void;
  article?: Article | null; // Tambahkan properti article untuk edit
}

interface Article {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
  isi: string;
}

export default function ModalFadeArticle({
  toggleModal,
  article,
}: ModalFadeArticleProps) {
  const quillRef = useRef();
  const [judul, setJudul] = useState(article?.judul || "");
  const [tanggal, setTanggal] = useState(article?.tanggal || "");
  const [gambar, setGambar] = useState<File | null>(null);
  const [isi, setIsi] = useState(article?.isi || "");

  useEffect(() => {
    if (article) {
      setJudul(article.judul);
      setTanggal(article.tanggal);
      setIsi(article.isi);
    }
  }, [article]);

  const captioValue = (value: string) => {
    setIsi(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!judul || !tanggal || !gambar || !isi) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Semua field harus diisi!",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("judul", judul);
      formData.append("tanggal", tanggal);
      formData.append("gambar", gambar as Blob);
      formData.append("isi", isi);

      const method = article ? "PUT" : "POST"; // Jika ada article, berarti sedang mengedit
      const url = article
        ? `http://localhost:5000/api/article/${article.id}` : "http://localhost:5000/api/article";

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok)
        throw new Error(
          article ? "Gagal mengedit artikel" : "Gagal menambahkan artikel"
        );

      Swal.fire({
        title: article
          ? "Artikel Berhasil Diedit!"
          : "Artikel Berhasil Ditambahkan!",
        icon: "success",
      });
      toggleModal(); // Tutup modal setelah sukses
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: article
          ? "Terjadi kesalahan saat mengedit artikel."
          : "Terjadi kesalahan saat menambahkan artikel.",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative p-4 w-4/5 h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {article ? "Edit Artikel" : "Tambah Artikel"} {/* Judul modal */}
            </h3>
            <button
              onClick={toggleModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div>
              <label
                htmlFor="judul"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Judul
              </label>
              <input
                type="text"
                name="judul"
                id="judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="tanggal"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tanggal
              </label>
              <input
                type="date"
                name="tanggal"
                id="tanggal"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="gambar"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Gambar
              </label>
              <input
                type="file"
                name="gambar"
                id="gambar"
                onChange={(e) => setGambar(e.target.files?.[0] || null)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="isi"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Isi
              </label>
              <CustomEditor result={captioValue} defaultValue={isi} />
              {/* <textarea
                // CkEditor=

                name="isi"
                id="isi"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                rows={16}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
              ></textarea> */}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {article ? "Update Artikel" : "Tambah Artikel"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}