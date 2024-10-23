"use client";

import React, { useState, useEffect } from "react";
import ShowEye from "@/app/components/Layout/showEye";
import TextDashboard from "@/app/components/Layout/textDashboard";
import { FaUserEdit } from "react-icons/fa";
import Loader from "@/app/components/Layout/loader"; // Loader component

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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(true); // Initial state for loading set to true

  // Re-Type Password State
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true); // Set loading to true when fetching users
    try {
      const response = await fetch("http://localhost:5000/api/home");
      const data = await response.json();
      if (data.status === "success") {
        const sortedUsers = data.data.sort((a: User, b: User) => b.id - a.id);
        setUsers(sortedUsers);
      } else {
        console.error("Error fetching users:", data.message);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false); // Set loading to false when done
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!username || !password) return;

    if (confirmPassword !== password) {
      Swal.fire({
        title: "Error",
        text: "Password dan Re-type Password tidak cocok!",
        icon: "error",
      });
      return;
    }

    const userData = {
      username,
      password,
      name,
    };

    setLoading(true); // Set loading to true before submitting data

    try {
      const response = editUserId
        ? await fetch(`http://localhost:5000/api/home/${editUserId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name }),
          })
        : await fetch("http://localhost:5000/api/home", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name }),
          });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === "Username sudah digunakan, pilih username lain.") {
          Swal.fire({
            title: "Error",
            text: "Username sudah digunakan, pilih username lain.",
            icon: "error",
          });
        } else {
          console.error("Error:", data.message);
        }
        setLoading(false); // Set loading to false if an error occurs
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
      setConfirmPassword("");
      setEditUserId(null);
      fetchUsers();
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    setLoading(false); // Set loading to false after operation is done
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
          method: "DELETE",
        });

        Swal.fire({
          title: "Data berhasil dihapus!",
          text: "User berhasil dihapus!",
          icon: "success",
        });

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
    setName(user.name);
    setUsername(user.username);
    setEditUserId(user.id);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const toggleConfirmPasswordVisibility = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 mt-10 h-screen w-screen bg-gray-100">
      <TextDashboard />
      <h1 className="text-3xl font-bold mt-10">Registrasi Pengguna</h1>
      <div className="mt-10">
        <div className="text-1xl font-sm flex flex-col mt-4 w-full max-w-md space-x-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="mr-2 h-10 mb-4 px-3 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className="text-start h-10 px-4 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              disabled={editUserId ? true : false}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="relative flex flex-col mb-4">
              {/* Password Input */}
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

              {/* Re-type Password Input */}
              <input
                type={"password"}
                className="h-10 px-3 mt-2 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Re-type Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className=" mt-4 flex flex-row">
              <div className="flex-1 justify-between">
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-red-500 text-sm w1/2">
                    Password tidak sesuai
                  </p>
                )}
              </div>
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
      <div className="relative mt-2 max-h-[1000px] overflow-y-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300 shadow-md rounded-md ">
          <thead className="bg-gray-200 sticky top-0 z-10 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 border-r border-gray-300  text-sm font-semibold text-gray-600 text-center">
                No
              </th>
              <th className="py-3 px-4 border-r border-gray-300  text-sm font-semibold text-gray-600 text-center">
                Nama
              </th>
              <th className="py-3 px-4 border-r border-gray-300 text-sm font-semibold text-gray-600 text-center">
                Username
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-300 overflow-y-auto"
              >
                <td className="py-3 px-4 border-r border-gray-300 text-sm text-gray-700 text-center">
                  {index + 1}
                </td>
                <td className="py-3 px-4 border-r border-gray-300 text-sm text-gray-700 text-center">
                  {user.name}
                </td>
                <td className="py-3 px-4 border-r border-gray-300 text-sm text-gray-700 text-center">
                  {user.username}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-600 mx-2"
                    onClick={() => handleEdit(user)}
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 mx-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdAutoDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <span>Terdapat {users.length} Data </span>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
