// const express = require("express");
// const router = express.Router();
// const User = require("../models/model_user");
// const { password_hash } = require("../config/encryp");
// const bcrypt = require("bcryptjs"); // Jika password terenkripsi dengan bcrypt

// const response = {
//   status: "failed",
//   message: "aksi gagal dilakukan",
//   data: [],
// };

// // POST - Tambah user baru
// router.post("/", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.create({
//       username,
//       password: password_hash(password), // password terenkripsi
//     });

//     if (user) {
//       response.status = "success";
//       response.message = "User berhasil ditambahkan";
//       response.data = user;
//     }
//   } catch (error) {
//     console.warn(error);
//   }

//   res.status(200).json(response);
// });

// // POST - Login user
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Cari user berdasarkan username
//     const user = await User.findOne({ where: { username } });

//     if (!user) {
//       return res.status(401).json({ message: "Username tidak ditemukan" });
//     }

//     // Periksa password, misalkan disimpan dalam bentuk hash
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Password salah" });
//     }

//     // Jika username dan password cocok
//     return res.status(200).json({
//       status: "success",
//       message: "Login berhasil",
//       data: user,
//     });
//   } catch (error) {
//     console.warn(error);
//     return res.status(500).json({
//       status: "error",
//       message: "Terjadi kesalahan server",
//       error: error.message,
//     });
//   }
// });

// // GET - Ambil semua user
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     if (users) {
//       response.status = "success";
//       response.message = "Berhasil mendapatkan semua user";
//       response.data = users;
//     }
//   } catch (error) {
//     console.warn(error);
//   }

//   res.status(200).json(response);
// });

// // GET - Ambil user berdasarkan ID
// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await User.findOne({ where: { id } });
//     if (user) {
//       response.status = "success";
//       response.message = "Berhasil mendapatkan user berdasarkan ID";
//       response.data = user;
//     }
//   } catch (error) {
//     console.warn(error);
//   }

//   res.status(200).json(response);
// });

// // PUT - Update user
// router.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;

//   try {
//     const updatedUser = await User.update(data, { where: { id } });

//     if (updatedUser > 0) {
//       response.status = "success";
//       response.message = "User berhasil diupdate";
//     }
//   } catch (error) {
//     console.warn(error);
//   }

//   res.status(200).json(response);
// });

// // DELETE - Hapus user
// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;

//   try {
//     const deletedUser = await User.destroy({ where: { id } });

//     if (deletedUser) {
//       response.status = "success";
//       response.message = "User berhasil dihapus";
//     }
//   } catch (error) {
//     console.warn(error);
//   }

//   res.status(200).json(response);
// });

// module.exports = router;
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

// POST - Tambah user baru (Pendaftaran)
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash password sebelum disimpan ke database
    const hashedPassword = password_hash(password);

    const user = await User.create({
      username,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        status: "success",
        message: "User berhasil ditambahkan",
        data: user,
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

// POST - Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cari user berdasarkan username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Username tidak ditemukan" });
    }

    // Verifikasi password
    const isPasswordValid = password_verify(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Jika login berhasil, Anda bisa mengembalikan data user atau token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY, {
      expiresIn: '1h', // Contoh jika menggunakan token JWT
    });

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

module.exports = router;
