
"use client";
import React, { useState, useEffect } from "react";
import ShowEye from "@/app/components/Layout/showEye";
import TextDashboard from "@/app/components/Layout/textDashboard";
import { RiEditFill } from "react-icons/ri";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2"; // Pastikan SweetAlert2 diimport

type User = {
  id: number;
  name: string;
  username: string;
};

const UserCreate: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/home");
      const data = await response.json();
      if (data.status === "success") {
        setUsers(data.data);
      } else {
        console.error("Error fetching users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) return;

    const userData = {
      username,
      password,
      name, // Pastikan name dikirimkan jika diperlukan
    };

    try {
      const response = editUserId
        ? await fetch(`http://localhost:5000/api/home/${editUserId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, name }), // Kirim name ke backend
          })
        : await fetch("http://localhost:5000/api/home", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, name }), // Kirim name ke backend
          });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        return;
      }

      if (editUserId) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editUserId ? { ...user, name, username } : user
          )
        );
        Swal.fire({
            title: "Updated!",
            text: "Data suksess diubah!",
            icon: "success",
          });
      } else {
        const newUser = { id: Math.random(), name, username };
        setUsers((prevUsers) => [newUser, ...prevUsers]);
        Swal.fire({
            title: "Berhasil!",
            text: "Data pengguna berhasil didaftarkan!",
            icon: "success",
          });
      }

      setName("");
      setUsername("");
      setPassword("");
      setEditUserId(null);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Apa kamu yakin?",
        text: "Data tidak dapat dipulihkan ketika di hapus!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete user!",
      });

      if (result.isConfirmed) {
        await fetch(`http://localhost:5000/api/home/${id}`, {
          method: 'DELETE',
        });

        Swal.fire({
          title: "Deleted!",
          text: "User berhasil dihapus!",
          icon: "success",
        });

        // Refresh data setelah penghapusan
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong during deletion.",
        icon: "error",
      });
    }
  };

  const handleEdit = (user: User) => {
    setName(user.name); // Pastikan setName memuat nilai yang benar
    setUsername(user.username);
    setEditUserId(user.id);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      <h1 className="text-3xl font-bold mt-10">Registrasi Pengguna</h1>
      <div className="flex-1 flex justify-center">
        <div className="text-1xl font-sm flex flex-col mt-4 w-full max-w-md space-x-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Pastikan setName bekerja dengan benar
              required
            />
            <input
              type="text"
              className="h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="relative flex flex-col mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="h-10 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ShowEye
                togglePasswordVisibility={togglePasswordVisibility}
                showPassword={showPassword}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md border border-blue-700"
              >
                {editUserId ? "Update" : "Daftar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tabel Pengguna */}
      <h2 className="text-2xl font-bold mt-4">Daftar Pengguna</h2>
      <div className="relative mt-2 max-h-[400px] overflow-y-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200 sticky top-0 z-10 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 border-r border-gray-300 text-left text-sm font-semibold text-gray-600 text-center">No</th>
              <th className="py-3 px-4 border-r border-gray-300 text-left text-sm font-semibold text-gray-600 text-center">Nama</th>
              <th className="py-3 px-4 border-r border-gray-300 text-left text-sm font-semibold text-gray-600 text-center">Username</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              // Menampilkan 10 baris kosong jika tidak ada data
              Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors">
                  <td className="py-2 px-4 border-t border-gray-300 text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center">-</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center">-</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center">-</td>
                </tr>
              ))
            ) : (
              // Menampilkan data pengguna dan menambahkan baris kosong hingga jumlah baris = 10
              users.concat(Array.from({ length: 10 - users.length })).map((user, index) => (
                <tr key={user?.id || index} className="hover:bg-gray-100 transition-colors">
                  <td className="py-2 px-4 border-t border-gray-300 text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center">{user?.name || '-'}</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center">{user?.username || '-'}</td>
                  <td className="py-2 px-4 border-t border-gray-300 text-center flex justify-center space-x-2">
                    <RiEditFill
                      onClick={() => handleEdit(user)}
                      className="text-blue-500 cursor-pointer hover:text-blue-600"
                      title="Edit"
                    />
                    <MdAutoDelete
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 cursor-pointer hover:text-red-600"
                      title="Delete"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCreate;