import { useState } from "react";
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { FaEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";

interface ShowEyeProps {
  togglePasswordVisibility: () => void;
  showPassword: boolean;
}

export default function ShowEye({
  togglePasswordVisibility,
  showPassword,
}: ShowEyeProps) {
  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute right-3 top-3 text-gray-800" // Mengubah warna ikon menjadi merah
    >
      {showPassword ? (
        <FaEye className="h-5 w-5" />
      ) : (
        <TbEyeClosed className="h-5 w-5" />
      )}
    </button>
  );
}
