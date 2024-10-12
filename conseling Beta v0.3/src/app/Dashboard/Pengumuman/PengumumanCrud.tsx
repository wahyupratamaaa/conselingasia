// "use client";

// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import TextDashboard from "@/app/components/Layout/textDashboard";
// import ModalFadePengumuman from "@/app/components/Layout/FadePengumuman";
// // import ShowEye from "../Password/showEye";
// import { AiTwotoneDelete } from "react-icons/ai";
// import { BiSolidEdit } from "react-icons/bi";
// import { PiEyeSlash } from "react-icons/pi";

// export default function Pengumuman() {
//   const [isModalOpen, setModalOpen] = React.useState(false); // State to manage modal visibility

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen); // Toggle the modal state
//   };

//   const data = [
//     {
//       no: 1,
//       judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
//       tanggal: "2022-10-29",
//       gambar: "URL ke Gambar atau Deskripsi",
//     },
//     {
//       no: 1,
//       judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
//       tanggal: "2022-10-29",
//       gambar: "URL ke Gambar atau Deskripsi",
//     },
//     {
//       no: 1,
//       judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
//       tanggal: "2022-10-29",
//       gambar: "URL ke Gambar atau Deskripsi",
//     },
//   ];

//   return (
//     <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
//       <TextDashboard />
//       {/* Judul */}
//       <div className="flex justify-between items-center mb-4 mt-10">
//         <h2 className="text-3xl font-bold">Data Pengumuman</h2>
//         <button
//           className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
//           onClick={toggleModal} // Call toggleModal to open the modal
//         >
//           <FaPlus />
//         </button>
//       </div>

//       {/* Tabel */}
//       <div className="overflow-x-auto border rounded-lg shadow-md">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300">No</th>
//               <th className="px-4 py-2 border border-gray-300">Judul</th>
//               <th className="px-4 py-2 border border-gray-300">Tanggal</th>
//               <th className="px-4 py-2 border border-gray-300">Gambar</th>
//               <th className="px-4 py-2 border border-gray-300">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="text-center">
//                 <td className="px-4 py-2 border border-gray-300">{item.no}</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {item.judul}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {item.tanggal}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {item.gambar}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300 ">
//                   <div className="flex items-center justify-center cursor-pointer">
//                     <BiSolidEdit className="mx-2" />
//                     <AiTwotoneDelete className="mx-2" />
//                     <PiEyeSlash className="mx-2" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Bagian Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <span>Showing 1 to 1 of 1 entries</span>
//         <div className="flex space-x-2">
//           <button className="bg-gray-300 px-2 py-1 rounded">Previous</button>
//           <button className="bg-gray-300 px-2 py-1 rounded">1</button>
//           <button className="bg-gray-300 px-2 py-1 rounded">Next</button>
//         </div>
//       </div>

//       {/* Render the modal if it is open */}
//       {isModalOpen && <ModalFadePengumuman toggleModal={toggleModal} />}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TextDashboard from "@/app/components/Layout/textDashboard";
import ModalFadeNews from "@/app/components/Layout/FadePengumuman";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiEyeSlash } from "react-icons/pi";

// Definisikan interface untuk artikel
interface News {
  id: number;
  judul: string;
  tanggal: string;
  gambar: string;
}

// Fungsi deletePengumuman untuk menghapus artikel
const deleteNews = async (id: number): Promise<void> => {
  // Menampilkan alert konfirmasi dan menghentikan proses jika pengguna memilih "Cancel"
  const isConfirmed = window.confirm("Are you sure you want to delete this news?");
  
  if (!isConfirmed) {
    console.log("Pengumuman deletion cancelled by user.");
    window.location.reload();
    return; // Menghentikan eksekusi jika pengguna membatalkan
  }

  try {
    const response = await fetch(`http://localhost:5000/api/pengumuman/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete article with id: ${id}`);
    }

    console.log(`Pengumuman with id: ${id} deleted successfully`);
  } catch (error) {
    // Pastikan error memiliki properti 'message' jika bertipe 'Error'
    if (error instanceof Error) {
      console.error("Error deleting article:", error.message);
    } else {
      console.error("Unknown error occurred while deleting article", error);
    }
    throw error;
  }
};

// Komponen utama untuk CRUD artikel
export default function NewsCrud() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data artikel dari API
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/pengumuman");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data dari API:", result);

      // Ambil data artikel dari properti "data"
      setNews(result.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menghapus artikel
  const handleDelete = async (id: number) => {
    try {
      await deleteNews(id);
      setNews(news.filter(news => news.id !== id)); // Menghapus artikel dari state
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  // Pemanggilan pertama kali saat komponen di-mount
  useEffect(() => {
    fetchNews();
  }, []);

  // Toggle modal dan refresh data saat modal ditutup
  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    // Hanya refresh data jika modal ditutup (isModalOpen berubah jadi false)
    if (isModalOpen) {
      fetchNews(); // Refresh data artikel setelah modal ditutup
    }
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      {/* Title */}
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold">Data Pengumuman</h2>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={toggleModal}
        >
          <FaPlus />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Judul</th>
              <th className="px-4 py-2 border border-gray-300">Tanggal</th>
              <th className="px-4 py-2 border border-gray-300">Gambar</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {news.length > 0 ? (
              news.map((news, index) => (
                <tr key={news.id} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">{news.judul}</td>
                  <td className="px-4 py-2 border border-gray-300">{news.tanggal}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={`http://localhost:5000/uploads/${news.gambar}`}
                      alt={news.judul}
                      className="h-20 mx-auto"
                    />
                  </td>
                  <td className="px-4 py-2 mt-1 flex flex-row space-x-3 cursor-pointer">
                    <BiSolidEdit />
                    <AiTwotoneDelete onClick={() => handleDelete(news.id)} />
                    <PiEyeSlash />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No articles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing {news.length} entries</span>
        <div className="flex space-x-2">
          <button className="bg-gray-300 px-2 py-1 rounded">Previous</button>
          <button className="bg-gray-300 px-2 py-1 rounded">1</button>
          <button className="bg-gray-300 px-2 py-1 rounded">Next</button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <ModalFadeNews toggleModal={toggleModal} />}
    </div>
  );
}

