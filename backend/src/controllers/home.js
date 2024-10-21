const express = require("express");
const router = express.Router();
const User = require("../models/model_user"); // model yang sudah Anda buat
const { password_hash, password_verify } = require("../config/encryp"); // fungsi hashing dan verifikasi password
const jwt = require("jsonwebtoken"); // untuk token JWT jika Anda ingin menggunakannya

const response = {
  status: "failed",
  message: "aksi gagal dilakukan",
  data: [],
};

// POST - Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Username tidak ditemukan" });
    }
    const isPasswordValid = password_verify(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Jika login berhasil, Anda bisa mengembalikan data user atau token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h", // Contoh jika menggunakan token JWT
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Login berhasil",
      token: token, // Kirim token ke frontend jika diperlukan
      data: user,
    });
  } catch (error) {
    console.warn(error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan server",
      error: error.message,
    });
  }
});
// post create
router.post("/", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Step 1: Cek apakah username sudah ada di database
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Username sudah digunakan, pilih username lain.",
      });
    }

    // Step 2: Hash password sebelum disimpan ke database
    const hashedPassword = password_hash(password);

    // Step 3: Buat user baru
    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        status: "success",
        message: "User berhasil ditambahkan",
        data: { id: user.id, username: user.username },
      });
    }
  } catch (error) {
    console.warn(error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat membuat user",
      error: error.message,
    });
  }
});

// router.post("/", async (req, res) => {
//   const { name, username, password } = req.body;

//   try {
//     // Hash password sebelum disimpan ke database
//     const hashedPassword = password_hash(password);

//     const user = await User.create({
//       name,
//       username,
//       password: hashedPassword,
//     });

//     if (user) {
//       return res.status(201).json({
//         status: "success",
//         message: "User berhasil ditambahkan",
//         data: { id: user.id, username: user.username },
//       });
//     }
//   } catch (error) {
//     console.warn(error);
//     return res.status(500).json({
//       status: "error",
//       message: "Terjadi kesalahan saat membuat user",
//       error: error.message,
//     });
//   }
// });

// PUT - Update user by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, password, name } = req.body; // Tambahkan name di sini jika Anda perlu memperbarui nama

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    user.username = username || user.username;
    if (password) {
      user.password = password_hash(password);
    }
    user.name = name || user.name; // Update nama jika perlu

    await user.save();

    return res.status(200).json({
      status: "success",
      message: "User berhasil diperbarui",
      data: { id: user.id, username: user.username, name: user.name }, // Data yang telah diperbarui
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat memperbarui user",
      error: error.message,
    });
  }
});

// ambil
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll(); // Mengambil semua pengguna dari database
    return res.status(200).json({
      status: "success",
      message: "Data pengguna berhasil diambil",
      data: users,
    });
  } catch (error) {
    console.warn(error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengambil data pengguna",
      error: error.message,
    });
  }
});

// delete - Delete user by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Ambil ID dari URL

  try {
    // Cari user berdasarkan ID
    const user = await User.findByPk(id); // Gunakan findByPk untuk mencari berdasarkan primary key

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    await user.destroy(); // Hapus user dari database

    return res.status(200).json({
      status: "success",
      message: "User berhasil dihapus",
    });
  } catch (error) {
    console.warn(error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat menghapus user",
      error: error.message,
    });
  }
});

// POST - Create user
router.post("/", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Cek apakah username sudah ada di database
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Username sudah digunakan",
      });
    }

    // Hash password sebelum disimpan ke database
    const hashedPassword = password_hash(password);

    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        status: "success",
        message: "User berhasil ditambahkan",
        data: { id: user.id, username: user.username },
      });
    }
  } catch (error) {
    console.warn(error);
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat membuat user",
      error: error.message,
    });
  }
});

module.exports = router;
// const express = require("express");
// const router = express.Router();
// const User = require("../models/model_user"); // model yang sudah Anda buat
// const { password_hash, password_verify } = require("../config/encryp"); // fungsi hashing dan verifikasi password
// const jwt = require("jsonwebtoken"); // untuk token JWT jika Anda ingin menggunakannya

// // // POST - Login user
// // router.post("/login", async (req, res) => {
// //   const { username, password } = req.body;

// //   try {
// //     const user = await User.findOne({ where: { username } });

// //     if (!user) {
// //       return res.status(401).json({ message: "Username tidak ditemukan" });
// //     }

// //     const isPasswordValid = password_verify(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: "Password salah" });
// //     }

// //     const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
// //       expiresIn: '1h',
// //     });

// //     return res.status(200).json({ message: "Login berhasil", token });
// //   } catch (error) {
// //     console.error("Login error:", error);
// //     return res.status(500).json({ message: "Terjadi kesalahan server" });
// //   }
// // });
// // POST - Register new user (dengan nama)
// router.post("/", async (req, res) => {
//   const { name, username, password } = req.body;

//   // Jika name tidak diisi, maka beri nilai null atau string kosong
//   const userName = name || null; // Nama di-set null jika tidak ada

//   try {
//     const hashedPassword = password_hash(password);
//     const newUser = await User.create({ name: userName, username, password: hashedPassword });
//     return res.status(201).json({ message: "User created successfully", data: newUser });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return res.status(500).json({ message: "Error creating user" });
//   }
// });

// // POST - Login user hanya dengan username dan password
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ where: { username } });

//     if (!user) {
//       return res.status(401).json({ message: "Username tidak ditemukan" });
//     }

//     const isPasswordValid = password_verify(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Password salah" });
//     }

//     const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
//       expiresIn: '1h',
//     });

//     return res.status(200).json({ message: "Login berhasil", token });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ message: "Terjadi kesalahan server" });
//   }
// });

// // GET - Fetch all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     return res.status(200).json({ status: "success", data: users });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return res.status(500).json({ status: "error", message: "Error fetching users" });
//   }
// });

// // POST - Register new user
// router.post("/", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const hashedPassword = password_hash(password);
//     const newUser = await User.create({ username, password: hashedPassword });
//     return res.status(201).json({ message: "User created successfully", data: newUser });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return res.status(500).json({ message: "Error creating user" });
//   }
// });

// // PUT - Update user
// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { username, password } = req.body;

//   try {
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.username = username;
//     if (password) {
//       user.password = password_hash(password);
//     }

//     await user.save();
//     return res.status(200).json({ message: "User updated successfully", data: user });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return res.status(500).json({ message: "Error updating user" });
//   }
// });

// // DELETE - Delete user
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     await user.destroy();
//     return res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return res.status(500).json({ message: "Error deleting user" });
//   }
// });

// module.exports = router;
