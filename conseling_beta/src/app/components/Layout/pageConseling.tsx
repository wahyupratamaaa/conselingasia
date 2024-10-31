"use client";
import { FaHome, FaFileAlt, FaBullhorn, FaUserPlus } from "react-icons/fa";

export default function Home() {
  return (
    <aside className="max-w-80 w-full bg-gradient-to-b from-sky-800 to-sky-900 text-white flex flex-col h-screen sticky top-0 shadow-lg overflow-hidden">
      <div className="p-6 border-b border-sky-700">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.wixstatic.com/media/e2c288_2ccaf39911de4ed0828b794555f3c582~mv2.png/v1/fill/w_256,h_243,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Asia.png"
            alt="Logo Asia"
            className="w-12 h-auto" // Ukuran gambar kecil
          />
          <h2 className="text-4xl font-bold">Konseling</h2>
        </div>
      </div>
      <nav className="flex-1 px-6 mt-6">
        <a
          href="/User/Login"
          className="flex items-center px-4 py-3 mb-4 text-center rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          <FaHome className="mr-2" />
          Back to Login
        </a>
        <a
          href="/"
          className="flex items-center px-4 py-3 mb-4 text-center rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          <FaHome className="mr-2" />
          Landing Page
        </a>
        <h3 className="mt-6 mb-3 text-sm font-bold uppercase text-gray-300 text-center">
          Menu
        </h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/Dashboard/Article"
              className="flex items-center py-3 px-4 text-center rounded-lg hover:bg-gray-700   transition duration-300 shadow-md hover:shadow-lg"
            >
              <FaFileAlt className="mr-2" />
              Artikel
            </a>
          </li>
          <li>
            <a
              href="/Dashboard/Pengumuman"
              className="flex items-center py-3 px-4 text-center rounded-lg hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FaBullhorn className="mr-2" />
              Pengumuman
            </a>
          </li>
          <li>
            <a
              href="/Dashboard/Daftar"
              className="flex items-center py-3 px-4 text-center rounded-lg hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              <FaUserPlus className="mr-2" />
              Tambah User
            </a>
          </li>
        </ul>
      </nav>
      <footer className="mt-auto px-6 py-4 border-t border-sky-700 text-center text-gray-400 text-sm">
        Copyright & Konseling Institut Asia 2024
      </footer>
    </aside>
  );
}
