import Link from "next/link";
import React from "react";
import Image from "next/image";
import radiocheked from "@/../public/radiochecked.png";
import radiounchecked from "@/../public/radiobtnunchecked.png";

export default function ContactPage() {
  return (
    <>
      <div
        id="contact"
        style={{
          padding: "75px 0px 0px 0px",
          width: 100 + "%",
        }}
      >
        {/* <div className="flex flex-row items-center">
          <div className="text-center">
            <h1 className="text-customBlueText">Kontak</h1>
          </div>
        </div> */}
        <h1 className="text-center">Kontak</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        {/* Bagian Informasi Kontak */}
        <div className="w-full lg:w-1/2 p-5 flex flex-col items-center">
          <div className="mb-4 flex flex-col items-center">
            <i className="bi bi-geo-alt fs-1"></i>
            <h4 className="font-bold">Alamat</h4>
            <Link
              className="text-customBlue no-underline hover:underline"
              href="https://maps.app.goo.gl/G6ith5aGzSMfqHR9A"
            >
              <p className="text-customBlue">
                Jl. Soekarno Hatta Rembuksari 1 A Malang
              </p>
            </Link>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <i className="bi bi-calendar3 fs-1"></i>
            <h4 className="font-bold">Jam Kerja</h4>
            <p className="text-customBlue">Senin - Jumat 9:00 - 17:00</p>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <i className="bi bi-envelope fs-1"></i>
            <h4 className="font-bold">Kirim Mail ke</h4>
            <p className="text-customBlue">bk@asia.ac.id</p>
          </div>
        </div>

        {/* Bagian Form Kontak */}
        <div className="w-full lg:w-1/2 p-5">
          <h3 className="mb-6 text-customBlueText">Kirim Pesan Langsung</h3>
          <div className="flex flex-col space-y-4 ">
            <div className="w-full lg:w-1/2 flex flex-row">
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-customBlue">Nama</label>
                <input
                  className="p-3 mr-2 rounded-lg border border-gray-300"
                  placeholder="Isi Nama Anda"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-customBlue">
                  Email*
                </label>
                <input
                  className="p-3 rounded-lg border border-gray-300"
                  placeholder="Isi Email Anda"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-customBlue">
                Subject
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300"
                placeholder="Subject"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-customBlue">
                Message
              </label>
              <textarea
                className="p-3 rounded-lg border border-gray-300"
                placeholder="Ketik Pesan Anda"
              />
            </div>
            <button
              className="p-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300"
              style={{
                alignContent: "center",
                width: "100px",
                textAlign: "center",
              }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
