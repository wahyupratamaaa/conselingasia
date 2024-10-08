"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import TextDashboard from "@/app/components/Layout/textDashboard";
import ModalFadePengumuman from "@/app/components/Layout/FadePengumuman";
// import ShowEye from "../Password/showEye";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiEyeSlash } from "react-icons/pi";

export default function Pengumuman() {
  const [isModalOpen, setModalOpen] = React.useState(false); // State to manage modal visibility

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Toggle the modal state
  };

  const data = [
    {
      no: 1,
      judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
      tanggal: "2022-10-29",
      gambar: "URL ke Gambar atau Deskripsi",
    },
    {
      no: 1,
      judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
      tanggal: "2022-10-29",
      gambar: "URL ke Gambar atau Deskripsi",
    },
    {
      no: 1,
      judul: "Seminar Kesehatan Mental 2022 | Kuliah Asik Tanpa Mengusik",
      tanggal: "2022-10-29",
      gambar: "URL ke Gambar atau Deskripsi",
    },
  ];

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      {/* Judul */}
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold">Data Pengumuman</h2>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={toggleModal} // Call toggleModal to open the modal
        >
          <FaPlus />
        </button>
      </div>

      {/* Tabel */}
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
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{item.no}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.judul}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.tanggal}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.gambar}
                </td>
                <td className="px-4 py-2 border border-gray-300 ">
                  <div className="flex items-center justify-center cursor-pointer">
                    <BiSolidEdit className="mx-2" />
                    <AiTwotoneDelete className="mx-2" />
                    <PiEyeSlash className="mx-2" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bagian Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing 1 to 1 of 1 entries</span>
        <div className="flex space-x-2">
          <button className="bg-gray-300 px-2 py-1 rounded">Previous</button>
          <button className="bg-gray-300 px-2 py-1 rounded">1</button>
          <button className="bg-gray-300 px-2 py-1 rounded">Next</button>
        </div>
      </div>

      {/* Render the modal if it is open */}
      {isModalOpen && <ModalFadePengumuman toggleModal={toggleModal} />}
    </div>
  );
}
