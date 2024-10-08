"use client";
import { useState } from "react";
import ShowEye from "@/app/components/Layout/showEye"; // Pastikan nama file sesuai dengan import
import TextDashboard from "@/app/components/Layout/textDashboard";

export default function Password() {
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
      <h1 className="text-3xl font-bold mt-10">Ganti Password Anda</h1>
      <div className="flex-1 flex justify-center items-center mb-32 ">
        <div className="text-1xl font-sm flex flex-col mt-4 w-full max-w-md ">
          <input
            type="text"
            style={{ width: "100%", height: "50px" }}
            className="h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password Lama"
          />
          <div className="relative flex flex-col">
            <input
              type={showPassword1 ? "text" : "password"}
              style={{ width: "100%", height: "50px" }}
              className="h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Password Baru"
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
              placeholder="Konfirmasi Password Baru"
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
    </div>
  );
}
