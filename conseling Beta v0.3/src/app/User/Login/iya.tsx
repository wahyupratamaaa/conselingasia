// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";
// import ShowEye from "@/app/components/Layout/showEye";
// import Asia from "../../../../public/asset/asia.png";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validasi input
//     if (username && password) {
//       router.push("/dashboard");
//       Swal.fire({
//         title: "Success Login!",
//         icon: "success",
//       });
//     } else {
//       setErrorMessage("Username dan password harus terisi!");
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Username dan password tidak boleh kosong!",
//       });
//     }
//   };

//   return (
//     <div className="relative min-h-screen">
//       <div className="flex justify-center items-center h-screen relative z-10">
//         <div className="block">
//           <img src={Asia.src} alt="asia" className="w-24" />
//           <div className="flex flex-col justify-start items-center mr-32 ">
//             <div className="space-y-2 font-poppins">
//               <h1 className="text-7xl font-bold mt-10 mr-4">Selamat Datang</h1>
//               <h1 className="text-4xl font-bold mr-4 text-gray-500">
//                 disitus resmi konseling institut asia malang
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-4 mt-12">
//           <h1 className="text-center text-xl font-bold mb-3">Login</h1>
//           <div className="mb-4">
//             <h2 className="text-gray-900 text-center font-bold text-lg leading-6 mb-2">
//               Login ke Akun Anda
//             </h2>
//             <p className="text-gray-500 text-center text-sm font-normal">
//               Masukkan Username dan Password Anda
//             </p>
//           </div>
//           <form onSubmit={handleLogin} className="relative">
//             <input
//               type="text"
//               className="w-full h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type={showPassword ? "text" : "password"}
//               className="w-full h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <ShowEye
//               togglePasswordVisibility={togglePasswordVisibility}
//               showPassword={showPassword}
//             />
//             <button
//               type="submit"
//               className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//             {errorMessage && (
//               <p className="text-red-500 text-center mt-4">{errorMessage}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// mata di user output di password
