
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleftCircle } from "react-icons/io";

interface TextDashboardProps {
  text: string; // Tipe untuk properti text
}

export default function TextDashboard() {
  const router = useRouter();

  return (
    <div className="flex justify-start items-center font-bold cursor-pointer text-2xl text-red-900">
      <IoIosArrowDropleftCircle />
      <h1 onClick={() => router.push("/Dashboard")} className="ml-2">
    Dashboard
      </h1>
    </div>
  );
}
