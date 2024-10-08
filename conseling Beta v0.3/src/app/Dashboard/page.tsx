"use client";
import TabConseling from "../components/Layout/pageConseling";
import { useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import TextDashboard from "../components/Layout/textDashboard";
import React, { useState } from "react";
// import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import Swal from "sweetalert2";

// or via CommonJS
// const Swal = require;

interface handleNavigation {
  path: string;
  // cursor?: string;
}

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
      title: "Sukses Logout!",
      // text: "You clicked the button!",
      // className: "swal2-container",
      icon: "success",
    });

    if (result.isConfirmed) {
      router.push("/users/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <TabConseling />
      {/* Main Content */}
      <main className="flex-1 p-6">
        <TextDashboard />
        <div className="flex justify-end items-center">
          <h1 className="text-sm font-bold cursor-pointer" onClick={toggleDown}>
            Super User
          </h1>
          <IoMdArrowDropdown />
          {/* <div className="flex items-center"></div> */}
          {isOpen && (
            <div className="absolute right-0 mt-20 w-48 bg-white border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden duration-500 hover:scale-110 hover:animate-bounce">
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
              onClick={() => handleNavigation("../Article")}
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
              onClick={() => handleNavigation("../Pengumuman")}
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
              onClick={() => handleNavigation("/components/CreateUser")}
            >
              CRUD &rarr;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
