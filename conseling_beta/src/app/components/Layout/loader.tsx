"use client";
import React from "react";
import Style from "../Layout/loading.module.css"; // Pastikan Anda membuat file CSS untuk loader ini

const Loader: React.FC = () => {
  return <div className={Style.loader}></div>;
};

export default Loader;
