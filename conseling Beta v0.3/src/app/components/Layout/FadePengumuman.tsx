// x



// import React, { useState } from "react";
// import Swal from "sweetalert2";

// interface ModalFadeNewsProps {
//   toggleModal: () => void;
// }

// export default function ModalFadeNews({
//   toggleModal,
// }: ModalFadeNewsProps) {
//   // State untuk menyimpan data form
//   const [judul, setJudul] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [gambar, setGambar] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validasi form
//     if (!judul || !tanggal || !gambar) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Semua field harus diisi!",
//       });
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("judul", judul);
//       formData.append("tanggal", tanggal);
//       formData.append("gambar", gambar as Blob); // Cast `gambar` to Blob since it’s a File
      

//       // Mengirim data ke API
//       const res = await fetch("http://localhost:5000/api/pengumuman", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error("Gagal menambahkan pengumuman");
//       }

//       const data = await res.json();

//       if (data.status !== "failed") {
//         Swal.fire({
//           title: "Pengumuman Berhasil Ditambahkan!",
//           icon: "success",
//         });
//         toggleModal(); // Tutup modal setelah sukses
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Terjadi kesalahan saat menambahkan artikel.",
//       });
//     }
//   };

//   // const generateSlug = (judul: string): string => {
//   //   return judul.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
//   // };
  

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded shadow-lg">
//         <h2 className="text-lg font-bold mb-4">Tambah Pengumuman</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2" htmlFor="judul">
//               Judul
//             </label>
//             <input
//               type="text"
//               id="judul"
//               value={judul}
//               onChange={(e) => setJudul(e.target.value)}
//               className="border border-gray-300 rounded p-2 w-full"
//               required
//             />
//           </div>

//           <form onSubmit={handleSubmit} className="p-4 md:p-5">
//             <div className="grid gap-4 mb-4 grid-cols-2">
//               <div className="col-span-2">
//                 <label
//                   htmlFor="title"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Judul Pengumuman
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   id="title"
//                   value={judul}
//                   onChange={(e) => setJudul(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Type article title"
//                   required
//                 />
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="date"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Tanggal
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   value={tanggal}
//                   onChange={(e) => setTanggal(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   required
//                 />
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="image"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Gambar
//                 </label>
//                 <input
//                   type="file"
//                   name="image"
//                   id="image"
//                   accept="image/*"
//                   onChange={(e) => setGambar(e.target.files?.[0] || null)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
//             >
//               Simpan
//             </button>
//             <button
//               type="button"
//               className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
//               onClick={resetForm}
//             >
//               Batal
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalFadePengumuman;
import React, { useState } from "react";
import Swal from "sweetalert2";

interface ModalFadeNewsProps {
  toggleModal: () => void;
}

export default function ModalFadeNews({
  toggleModal,
}: ModalFadeNewsProps) {
  // State untuk menyimpan data form
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi form
    if (!judul || !tanggal || !gambar) {
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
      formData.append("gambar", gambar as Blob); // Cast `gambar` to Blob since it’s a File

      // Mengirim data ke API
      const res = await fetch("http://localhost:5000/api/pengumuman", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Gagal menambahkan pengumuman");
      }

      const data = await res.json();

      if (data.status !== "failed") {
        Swal.fire({
          title: "Pengumuman Berhasil Ditambahkan!",
          icon: "success",
        });
        toggleModal(); // Tutup modal setelah sukses
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat menambahkan artikel.",
      });
    }
  };

  const resetForm = () => {
    setJudul("");
    setTanggal("");
    setGambar(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Pengumuman</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="judul">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="tanggal">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="gambar">
              Gambar
            </label>
            <input
              type="file"
              id="gambar"
              accept="image/*"
              onChange={(e) => setGambar(e.target.files?.[0] || null)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Simpan
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              onClick={resetForm}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
