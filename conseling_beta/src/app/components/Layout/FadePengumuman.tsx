"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface ModalFadeNewsProps {
  toggleModal: () => void;
  editData?: { id: string; judul: string; tanggal: string; gambar?: string }; // Tambahkan prop ini untuk data edit
}

export default function ModalFadeNews({
  toggleModal,
  editData,
}: ModalFadeNewsProps) {
  const [judul, setJudul] = useState(editData?.judul || ""); // Set nilai default
  const [tanggal, setTanggal] = useState(editData?.tanggal || ""); // Set nilai default
  const [gambar, setGambar] = useState<File | null>(null);
  const [editId, setEditId] = useState<string | null>(editData?.id || null); // Set ID untuk edit

  useEffect(() => {
    if (editData) {
      setJudul(editData.judul);
      setTanggal(editData.tanggal);
      setEditId(editData.id);
    }
  }, [editData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!judul || !tanggal) {
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
      if (gambar) {
        formData.append("gambar", gambar as Blob);
      }

      // Mengirim data ke API
      const method = editData?.id != "" ? "PUT" : "POST"; // Gunakan PUT jika sedang edit
      const url =
        editData?.id != ""
          ? `http://localhost:5000/api/pengumuman/${editId}`
          : "http://localhost:5000/api/pengumuman";
      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) {
        throw new Error(
          editData
            ? "Gagal mengedit pengumuman"
            : "Gagal menambahkan pengumuman"
        );
      }

      const data = await res.json(); // Ambil data dari respons

      if (data.status !== "failed") {
        Swal.fire({
          title: editData
            ? "Pengumuman Berhasil Diperbarui!"
            : "Pengumuman Berhasil Ditambahkan!",
          icon: "success",
        });
        toggleModal(); // Tutup modal setelah sukses
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambahkan atau memperbarui pengumuman.",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 ">
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {editId ? "Edit Pengumuman" : "Create New Pengumuman"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Judul Pengumuman
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type article title"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tanggal
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gambar
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={(e) => setGambar(e.target.files?.[0] || null)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {editId ? "Perbarui Pengumuman" : "Tambahkan Pengumuman Baru"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}