"use client";
import { useState } from "react";
import ShowEye from "@/app/components/Layout/showEye"; // Pastikan nama file sesuai dengan import
import TextDashboard from "@/app/components/Layout/textDashboard";
import { RiEditFill } from "react-icons/ri";
import { MdAutoDelete } from "react-icons/md";



export default function Tambah() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      <h1 className="text-3xl font-bold mt-10">Registrasi</h1>
      <div className="flex-1 flex justify-center">
        <div className="text-1xl font-sm flex flex-col mt-4 w-full max-w-md ">
          <input
            type="text"
            style={{ width: "100%", height: "50px" }}
            className="h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
          <div className="relative flex flex-col">
            <input
              type={showPassword1 ? "text" : "password"}
              style={{ width: "100%", height: "50px" }}
              className="h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password"
            />
            <ShowEye
              togglePasswordVisibility={togglePasswordVisibility1}
              showPassword={showPassword1}
            />
          </div>
          <div className="relative flex flex-col">
            <input
              type={showPassword2 ? "text" : "password"}
              style={{ width: "100%", height: "50px" }}
              className="h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Confirm Password"
            />
            <ShowEye
              togglePasswordVisibility={togglePasswordVisibility2}
              showPassword={showPassword2}
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md border border-blue-700">
              <span className="text-sm">Update Password</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tambahkan bagian Data User di bawah input table */}
      <h2 className="text-2xl font-bold mt-10">Data User</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm">Show</label>
          <select className="ml-2 border border-gray-300 rounded px-2 py-1">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label className="ml-2 text-sm">entries</label>

          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-lg px-3 py-1"
          />
        </div>

        {/* Tabel Data User */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "Super User" },
              { id: 2, name: "Humas" },
              { id: 3, name: "dokumenter" },
              { id: 4, name: "admin konseling" },
              { id: 5, name: "AppleWebKit231" },
              { id: 6, name: "AppleWebKit231" },
            ].map((user, index) => (
              <tr key={user.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">
                  {/* Aksi seperti edit/hapus dapat ditambahkan di sini */}
                  <button className="text-blue-500 hover:underline">
                  <RiEditFill/>
                    </button> | 
                  <button className="text-red-500 hover:underline">
                    <MdAutoDelete/> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <span>Showing 1 to 6 of 6 entries</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded">Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
