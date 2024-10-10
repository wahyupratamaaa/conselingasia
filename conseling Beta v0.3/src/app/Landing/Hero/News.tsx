// import useIsMobile from "@/app/Hooks/resizeHooks";
// import React from "react";
// import Image from "next/image";
// import useAnimation from "@/app/Hooks/animateHooks";
// import "aos/dist/aos.css";
// import imageBlog1 from "@/../public/article/blog/blog-1.jpg";

// export default function Article() {
//   const isMobile = useIsMobile();
//   const animation = useAnimation();

//   return (
//     <div
//       data-aos="fade-left"
//       id="news"
//       className="w-full"
//       style={{
//         marginBottom: isMobile ? 10 : 20,
//       }}
//     >
//       <div
//         style={{ marginTop: isMobile ? 100 : 100 }}
//         className="w-full flex flex-col justify-between lg:flex-row lg:justify-center items-center"
//       >
//         <div
//           className="flex justify-center text-customBlueText"
//           style={{
//             // backgroundColor: "#B9FF66",
//             height: isMobile ? 46 : "auto",
//             width: isMobile ? "80%" : "auto",
//             // textAlign: "center",
//             // borderRadius: 7,
//           }}
//         >
//           <h1 style={{ fontSize: isMobile ? "5vw" : 40 }}>Pengumuman</h1>
//         </div>
//       </div>
//       <div className=" w-full" data-aos="fade-left" data-aos-delay="200">
//         <article
//           className="flex relative"
//           style={{
//             boxShadow:
//               "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//             padding: isMobile ? 20 : 25,
//           }}
//         >
//           <div className="relative" data-aos="fade-up">
//             <h3 className="text-customBlueText mx-2">Terbaru</h3>
//             <button
//               className="absolute text-white font-sans font-bold bg-customBlue rounded-md active:bg-customBlueHover"
//               style={{
//                 margin: 5,
//                 marginBottom: 10,
//                 padding: 5,
//                 bottom: 2,
//                 left: 5,
//                 fontSize: 15,
//               }}
//             >
//               Lihat Lainnya
//             </button>
//           </div>

//           <div className="container">
//             <div className="row justify-content-start">
//               <div
//                 className="col-xl-4 col-md-6"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <article
//                   className=""
//                   style={{
//                     boxShadow:
//                       "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//                     padding: isMobile ? 20 : 30,
//                   }}
//                 >
//                   <div className="">
//                     <Image src={imageBlog1} alt="" className="img-fluid" />
//                   </div>
//                   <h4>
//                     <a href="">Dolorum optio tempore voluptas dignissimos</a>
//                   </h4>
//                   <p>2 Jam yang lalu</p>
//                 </article>
//               </div>
//               <div
//                 className="col-xl-4 col-md-6"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <article
//                   className=""
//                   style={{
//                     boxShadow:
//                       "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//                     padding: isMobile ? 20 : 30,
//                   }}
//                 >
//                   <div className="post-img">
//                     <Image src={imageBlog1} alt="" className="img-fluid" />
//                   </div>
//                   <h4>
//                     <a href="">Dolorum optio tempore voluptas dignissimos</a>
//                   </h4>
//                   <p>2 Jam yang lalu</p>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// }
// // Article.tsx
// "use client"
// import useIsMobile from "@/app/Hooks/resizeHooks";
// import React from "react";
// import Image from "next/image";
// import { usePengumuman } from "../../components/Layout/PengumumanContext"; // Import context

// export default function Article() {
//   const isMobile = useIsMobile();
//   const { pengumuman } = usePengumuman(); // Ambil data pengumuman dari context

//   return (
//     <div
//       data-aos="fade-left"
//       id="news"
//       className="w-full"
//       style={{
//         marginBottom: isMobile ? 10 : 20,
//       }}
//     >
//       <div
//         style={{ marginTop: isMobile ? 100 : 100 }}
//         className="w-full flex flex-col justify-between lg:flex-row lg:justify-center items-center"
//       >
//         <div
//           className="flex justify-center text-customBlueText"
//           style={{
//             height: isMobile ? 46 : "auto",
//             width: isMobile ? "80%" : "auto",
//           }}
//         >
//           <h1 style={{ fontSize: isMobile ? "5vw" : 40 }}>Pengumuman</h1>
//         </div>
//       </div>
//       <div className=" w-full" data-aos="fade-left" data-aos-delay="200">
//         <article
//           className="flex relative"
//           style={{
//             boxShadow:
//               "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//             padding: isMobile ? 20 : 25,
//           }}
//         >
//           <div className="relative" data-aos="fade-up">
//             <h3 className="text-customBlueText mx-2">Terbaru</h3>
//             <button
//               className="absolute text-white font-sans font-bold bg-customBlue rounded-md active:bg-customBlueHover"
//               style={{
//                 margin: 5,
//                 marginBottom: 10,
//                 padding: 5,
//                 bottom: 2,
//                 left: 5,
//                 fontSize: 15,
//               }}
//             >
//               Lihat Lainnya
//             </button>
//           </div>

//           <div className="container">
//             <div className="row justify-content-start">
//               {pengumuman.map((item) => (  // Memetakan pengumuman dari context
//                 <div
//                   key={item.id}  // Gunakan ID sebagai key
//                   className="col-xl-4 col-md-6"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <article
//                     className=""
//                     style={{
//                       boxShadow:
//                         "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//                       padding: isMobile ? 20 : 30,
//                     }}
//                   >
//                     <div className="post-img">
//                       <Image src={`http://localhost:5000/uploads/${item.gambar}`} alt={item.judul} className="img-fluid" />
//                     </div>
//                     <h4>
//                       <a href="">{item.judul}</a>  // Menggunakan judul dari pengumuman
//                     </h4>
//                     <p>{item.tanggal}</p>  // Menggunakan tanggal dari pengumuman
//                   </article>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// }

"use client";
import useIsMobile from "@/app/Hooks/resizeHooks";
import React from "react";
import Image from "next/image";
import { usePengumuman } from "../../components/Layout/PengumumanContext"; // Import context

export default function Article() {
  const isMobile = useIsMobile();
  const { pengumuman } = usePengumuman(); // Retrieve pengumuman from context

  return (
    <div
      data-aos="fade-left"
      id="news"
      className="w-full"
      style={{ marginBottom: isMobile ? 10 : 20 }}
    >
      <div
        style={{ marginTop: 100 }}
        className="w-full flex flex-col justify-between lg:flex-row lg:justify-center items-center"
      >
        <h1
          className="text-customBlueText"
          style={{ fontSize: isMobile ? "5vw" : 40, textAlign: "center" }}
        >
          Pengumuman
        </h1>
      </div>

      <div className="w-full mt-6" data-aos="fade-left" data-aos-delay="200">
        <article
          className="flex relative bg-white rounded-lg shadow-lg p-6"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="relative w-full" data-aos="fade-up">
            <h3 className="text-customBlueText mb-4">Pengumuman Terbaru</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pengumuman.length === 0 ? (
                <p className="text-gray-500">Tidak ada pengumuman untuk ditampilkan.</p>
              ) : (
                pengumuman.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-white rounded-lg shadow-md p-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={`http://localhost:5000/uploads/${item.gambar}`}
                        alt={item.judul}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.judul}</h4>
                    <p className="text-gray-600 text-sm mb-4">{item.tanggal}</p>
                  </div>
                ))
              )}
            </div>
            <button
              className="absolute bottom-2 left-2 bg-customBlue text-white py-2 px-4 rounded-md font-bold hover:bg-customBlueHover"
              onClick={() => alert('Redirect to more announcements')}
            >
              Lihat Lainnya
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
