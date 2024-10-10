// "use client";
// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import TextDashboard from "../../components/Layout/textDashboard";
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


// "use client";
// import React, { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import TextDashboard from "@/app/components/Layout/textDashboard";
// import ModalFadePengumuman from "@/app/components/Layout/FadePengumuman";
// import { AiTwotoneDelete } from "react-icons/ai";
// import { BiSolidEdit } from "react-icons/bi";
// import { PiEyeSlash } from "react-icons/pi";

// interface Pengumuman {
//   no: number;
//   judul: string;
//   tanggal: string;
//   gambar: string;
// }

// export default function Pengumuman() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [data, setData] = useState<Pengumuman[]>([]);
  
//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//   };

//   const fetchData = async () => {
//     const response = await fetch("http://localhost:5000/api/pengumuman");
//     const result = await response.json();
//     if (result.status === "success") {
//       setData(result.data);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`http://localhost:5000/api/pengumuman/${id}`, {
//       method: 'DELETE',
//     });
//     fetchData(); // Refresh data after deletion
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
//       <TextDashboard />
//       <div className="flex justify-between items-center mb-4 mt-10">
//         <h2 className="text-3xl font-bold">Data Pengumuman</h2>
//         <button
//           className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
//           onClick={toggleModal}
//         >
//           <FaPlus />
//         </button>
//       </div>

//       <div className="overflow-x-auto border rounded-lg shadow-md">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300">No</th>
//               <th className="px-4 py-2 border border-gray-300">Judul</th>
//               <th className="px-4 py-2 border border-gray-300">Tanggal</th>
//               <th className="px-4 py-2 border border-gray-300">Gambar</th>
//               <th className="px-4 py-2 border border-gray-300">Aksi</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="text-center">
//                 <td className="px-4 py-2 border border-gray-300">{item.no}</td>
//                 <td className="px-4 py-2 border border-gray-300">{item.judul}</td>
//                 <td className="px-4 py-2 border border-gray-300">{item.tanggal}</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   <img
//                     src={`http://localhost:5000/uploads/${item.gambar}`} 
//                     alt={item.judul}
//                     className="w-24 h-24 object-cover" // Gambar ditampilkan dengan ukuran custom
//                   />
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300 ">
//                   <div className="flex items-center justify-center cursor-pointer">
//                     <BiSolidEdit className="mx-2" />
//                     <AiTwotoneDelete className="mx-2" onClick={() => handleDelete(item.no)} />
//                     <PiEyeSlash className="mx-2" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Render the modal if it is open */}
//       {isModalOpen && <ModalFadePengumuman toggleModal={toggleModal} onDataAdded={fetchData} />}
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import TextDashboard from "@/app/components/Layout/textDashboard";
// import ModalFadePengumuman from "@/app/components/Layout/FadePengumuman";
// import { AiTwotoneDelete } from "react-icons/ai";
// import { BiSolidEdit } from "react-icons/bi";
// import { PiEyeSlash } from "react-icons/pi";
// import axios from "axios";

// interface Pengumuman {
//   no: number;
//   judul: string;
//   tanggal: string;
//   gambar: string;
// }

// export default function Pengumuman() {
//   const [isModalOpen, setModalOpen] = useState(false); 
//   const [pengumumanList, setPengumumanList] = useState<Pengumuman[]>([]);
//   const [selectedPengumuman, setSelectedPengumuman] = useState<Pengumuman | null>(null);

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen); 
//     if (isModalOpen) {
//       setSelectedPengumuman(null);
//     }
//   };

//   const fetchPengumuman = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/pengumuman");
//       // Hanya menyimpan pengumuman terbaru
//       setPengumumanList(response.data.data.slice(-1)); 
//     } catch (error) {
//       console.error("Error fetching pengumuman:", error);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/pengumuman/${id}`);
//       fetchPengumuman(); 
//     } catch (error) {
//       console.error("Error deleting pengumuman:", error);
//     }
//   };

//   const handleEdit = (pengumuman: Pengumuman) => {
//     setSelectedPengumuman(pengumuman);
//     setModalOpen(true);
//   };

//   useEffect(() => {
//     fetchPengumuman();
//   }, []);

//   return (
//     <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
//       <TextDashboard />
//       <div className="flex justify-between items-center mb-4 mt-10">
//         <h2 className="text-3xl font-bold">Data Pengumuman</h2>
//         <button
//           className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
//           onClick={toggleModal} 
//         >
//           <FaPlus />
//         </button>
//       </div>

//       <div className="overflow-x-auto border rounded-lg shadow-md">
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-4 py-2 border border-gray-300">No</th>
//               <th className="px-4 py-2 border border-gray-300">Judul</th>
//               <th className="px-4 py-2 border border-gray-300">Tanggal</th>
//               <th className="px-4 py-2 border border-gray-300">Gambar</th>
//               <th className="px-4 py-2 border border-gray-300">Aksi</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pengumumanList.map((item, index) => (
//               <tr key={index} className="text-center">
//                 <td className="px-4 py-2 border border-gray-300">{item.no}</td>
//                 <td className="px-4 py-2 border border-gray-300">{item.judul}</td>
//                 <td className="px-4 py-2 border border-gray-300">{item.tanggal}</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   <img src={`http://localhost:5000/uploads/${item.gambar}`} alt={item.judul} className="h-16" />
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   <div className="flex items-center justify-center cursor-pointer">
//                     <BiSolidEdit className="mx-2" onClick={() => handleEdit(item)} />
//                     <AiTwotoneDelete className="mx-2" onClick={() => handleDelete(item.no)} />
//                     <PiEyeSlash className="mx-2" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Render the modal if it is open */}
//       {isModalOpen && (
//         <ModalFadePengumuman
//           toggleModal={toggleModal}
//           fetchPengumuman={fetchPengumuman}
//           selectedPengumuman={selectedPengumuman}
//         />
//       )}
//     </div>
//   );
// }
// // // code bener
"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TextDashboard from "@/app/components/Layout/textDashboard";
import ModalFadePengumuman from "@/app/components/Layout/FadePengumuman";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { PiEyeSlash } from "react-icons/pi";
import axios from "axios";

// Definisikan tipe Pengumuman
interface Pengumuman {
  no: number;
  judul: string;
  tanggal: string;
  gambar: string; // Gambar yang akan ditampilkan
  id?: string; // Optional ID
}

export default function PengumumanCrud() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
  const [selectedPengumuman, setSelectedPengumuman] = useState<Pengumuman | null>(null);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const fetchPengumuman = async () => {
    const response = await axios.get("http://localhost:5000/api/pengumuman");
    setPengumuman(response.data.data);
  };

  const addPengumuman = async (newPengumuman: { judul: string; tanggal: string; gambar: File }) => {
    const formData = new FormData();
    formData.append("judul", newPengumuman.judul);
    formData.append("tanggal", newPengumuman.tanggal);
    formData.append("gambar", newPengumuman.gambar);

    await axios.post("http://localhost:5000/api/pengumuman", formData);
    fetchPengumuman();
    toggleModal();
  };

  const deletePengumuman = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/pengumuman/${id}`);
    fetchPengumuman();
  };

  const editPengumuman = async (id: string) => {
    // Implementasi untuk mengedit pengumuman (jika diperlukan)
  };

  useEffect(() => {
    fetchPengumuman();
  }, []);

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold">Data Pengumuman</h2>
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
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pengumuman.map((item, index) => (
              <tr key={item.no} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{item.judul}</td>
                <td className="px-4 py-2 border border-gray-300">{item.tanggal}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={`http://localhost:5000/uploads/${item.gambar}`} alt={item.judul} className="w-32 h-32 object-cover" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex items-center justify-center cursor-pointer">
                    <BiSolidEdit className="mx-2" onClick={() => editPengumuman(item.id!)} />
                    <AiTwotoneDelete className="mx-2" onClick={() => deletePengumuman(item.id!)} />
                    <PiEyeSlash className="mx-2" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the modal if it is open */}
      {isModalOpen && <ModalFadePengumuman onNewPengumuman={addPengumuman} toggleModal={toggleModal} />}
    </div>
  );
}
// PengumumanCrud.tsx