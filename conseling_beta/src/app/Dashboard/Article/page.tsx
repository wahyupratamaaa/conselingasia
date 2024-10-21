import React from "react";
import Home from "@/app/components/Layout/pageConseling";
import ArticleCrud from "./ArticleCrud";

export default function ArticleHome() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <Home />
      <ArticleCrud />
    </div>
  );
}
