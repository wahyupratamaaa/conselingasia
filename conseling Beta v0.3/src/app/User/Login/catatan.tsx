// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { addToken } from "../../utils/utils";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();

//   interface handleLogin {
//     value?: string;
//   }
//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       console.log("Response data:", data.data);

//       if (data.status === "success") {
//         addToken(data.data.token);
//         router.push("/dashboard");
//       } else if (res.status === 401) {
//         setErrorMessage("Username atau password salah.");
//       } else {
//         setErrorMessage(data.message || "Terjadi kesalahan. Silakan coba lagi.");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-start h-screen bg-white">
//       <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-4 mt-12">
//         <h1 className="text-center text-xl font-bold mb-3">Login</h1>
//         <div className="mb-4">
//           <h2 className="text-gray-900 text-center font-bold text-lg leading-6 mb-2">Login ke Akun Anda</h2>
//           <p className="text-gray-500 text-center text-sm font-normal">Masukkan Username dan Password Anda</p>
//         </div>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             className="w-full h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             className="w-full h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Submit
//           </button>
//           {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// testing sebelumnya ------------------------------------
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// // import { addToken } from "../../utils/utils";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const router = useRouter();

//   interface handleLogin {
//     value?: string;
//   }

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       console.log("Response data:", data.data);

//       if (data.status) {
//         router.push("/dashboard");
//       }
//       // data.data.token;

//       // } else if (res.status === 401) {
//       //   setErrorMessage("Username atau password salah.");
//       // } else {
//       //   setErrorMessage(
//       //     data.message || "Terjadi kesalahan. Silakan coba lagi."
//       //   );
//       // }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
//     }
//   };
//   //     const data = await res.json();
//   //     console.log("Response data:", data.data);

//   //     if (res.status === 200 && data.status === "success") {
//   //       addToken(data.data.token);
//   //       router.push("/dashboard");
//   //     } else if (res.status === 401) {
//   //       setErrorMessage("Username atau password salah.");
//   //     } else if (res.status === 404) {
//   //       setErrorMessage("Username tidak ditemukan.");
//   //     } else {
//   //       setErrorMessage(data.message || "Terjadi kesalahan. Silakan coba lagi.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Login failed:", error);
//   //     setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
//   //   }
//   // };
//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       <div className="flex justify-start items-center mr-32">
//         <div className="space-y-2">
//           <h1 className="text-6xl font-bold mt-10 mr-4">Selamat Datang</h1>
//           <h1 className="text-4xl font-bold mr-4 text-gray-500 font-poppins">
//             disitus resmi konseling institut asia malang
//           </h1>
//         </div>
//       </div>
//       <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-4 mt-12">
//         <h1 className="text-center text-xl font-bold mb-3">Login</h1>
//         <div className="mb-4">
//           <h2 className="text-gray-900 text-center font-bold text-lg leading-6 mb-2">
//             Login ke Akun Anda
//           </h2>
//           <p className="text-gray-500 text-center text-sm font-normal">
//             Masukkan Username dan Password Anda
//           </p>
//         </div>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             className="w-full h-10 mb-3 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password" // Ganti menjadi 'password' untuk keamanan
//             className="w-full h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//           {errorMessage && (
//             <p className="text-red-500 text-center mt-4">{errorMessage}</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
