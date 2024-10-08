import React from "react";
import Home from "@/app/components/Layout/pageConseling";
import Password from "./Password";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <Home />
      <Password />
    </div>
  );
}
