
"use client"
import TabConseling from "../components/Layout/pageConseling";
import { useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import TextDashboard from "../components/Layout/textDashboard";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Dashboard() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  const closeOpen = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin ingin Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Logout!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Sukses Logout!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push("/User/Login");
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <TabConseling />
      {/* Main Content */}
      <main className="flex-1 p-6">
        <TextDashboard />
        <div className="flex justify-end items-center relative">
          <h1
            className="text-sm font-bold cursor-pointer flex items-center"
            onClick={toggleDown}
          >
            Super User <IoMdArrowDropdown className="ml-1" />
          </h1>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden duration-500">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {/* Artikel Card */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Data</h2>
            <p className="mt-2">Artikel</p>
            <button
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
              onClick={() => handleNavigation("/Dashboard/Article")}
            >
              CRUD &rarr;
            </button>
          </div>

          {/* Pengumuman Card */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Data</h2>
            <p className="mt-2">Pengumuman</p>
            <button
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
              onClick={() => handleNavigation("/Dashboard/Pengumuman")}
            >
              CRUD &rarr;
            </button>
          </div>

          {/* User Card */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Tambah</h2>
            <p className="mt-2">User</p>
            <button
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
              onClick={() => handleNavigation("/Dashboard/Daftar")}
            >
              CRUD &rarr;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
