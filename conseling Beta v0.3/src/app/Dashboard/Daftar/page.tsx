import React from "react";
import Layout from "@/app/components/Layout/pageConseling";
import User from "./UserCrate";

export default function UserNew() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <Layout />

        <User />
    </div>
  );
}
