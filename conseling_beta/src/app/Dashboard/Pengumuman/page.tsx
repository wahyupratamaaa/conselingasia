import React from "react";
import Layout from "@/app/components/Layout/pageConseling";
import Pengumuman from "./PengumumanCrud";

export default function ArticleHome() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <Layout />
      <Pengumuman />
    </div>
  );
}
