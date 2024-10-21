"use client";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import TextDashboard from "@/app/components/Layout/textDashboard";
import { RiEditFill } from "react-icons/ri";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

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
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMismatchAlert, setPasswordMismatchAlert] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
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
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!username || !password) return;

    const userData = {
      username,
      password,
      name,
    };

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
          text: "Data sukses diubah!",
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
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Apa kamu yakin?",
        text: "Data tidak dapat dipulihkan ketika dihapus!",
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
          title: "Deleted!",
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (e.target.value && e.target.value !== password) {
      setPasswordMismatchAlert(true);
    } else {
      setPasswordMismatchAlert(false);
    }
  };

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
              <AiFillEyeInvisible
                className={`absolute inset-y-0 right-3 flex items-center cursor-pointer ${
                  showPassword ? "hidden" : "block"
                }`}
                onClick={togglePasswordVisibility}
              />
              <AiFillEye
                className={`absolute inset-y-0 right-3 flex items-center cursor-pointer ${
                  showPassword ? "block" : "hidden"
                }`}
                onClick={togglePasswordVisibility}
              />

              {/* Re-type Password Input */}
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="h-10 px-3 mt-2 text-gray-900 placeholder-gray-400 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Re-type Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <AiFillEyeInvisible
                className={`absolute inset-y-0 right-3 mt-8 flex items-center cursor-pointer ${
                  showConfirmPassword ? "hidden" : "block"
                }`}
                onClick={toggleConfirmPasswordVisibility}
              />
              <AiFillEye
                className={`absolute inset-y-0 right-3 mt-8 flex items-center cursor-pointer ${
                  showConfirmPassword ? "block" : "hidden"
                }`}
                onClick={toggleConfirmPasswordVisibility}
              />

              {/* Password Mismatch Warning */}
              {passwordMismatchAlert && (
                <p className="text-red-500 text-sm mt-2">
                  Password tidak sesuai
                </p>
              )}
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
      <div className="relative mt-2 max-h-[1000px] overflow-y-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-r border-gray-300 text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="py-3 px-4 border-r border-gray-300 text-sm font-medium text-gray-700">
                Username
              </th>
              <th className="py-3 px-4 border-r border-gray-300  text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-300">
                <td className="py-3 px-4 text-sm text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {user.username}
                </td>
                <td className="py-3 px-4 text-sm flex space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(user)}
                  >
                    <RiEditFill size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdAutoDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCreate;
