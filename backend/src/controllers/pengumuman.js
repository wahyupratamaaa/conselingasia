const express = require("express");
const router = express.Router();
const Pengumuman = require("../models/table_pengumuman");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const response = {
  status: "failed",
  message: "aksi gagal dilakukan",
  data: [],
};

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder penyimpanan file
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Buat nama file yang unik
  },
});

const upload = multer({ storage: storage });

// POST - Tambah pengumuman baru
router.post("/", upload.single("gambar"), async (req, res) => {
  const { judul, tanggal } = req.body;
  const gambar = req.file ? req.file.filename : null;

  try {
    const pengumuman = await Pengumuman.create({
      judul,
      tanggal,
      gambar,
    });

    if (pengumuman) {
      response.status = "success";
      response.message = "Pengumuman berhasil ditambahkan";
      response.data = pengumuman;
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat menambahkan pengumuman";
  }
  res.status(200).json(response);
});

// DELETE - Hapus pengumuman berdasarkan ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pengumuman = await Pengumuman.findOne({ where: { id } });

    if (pengumuman) {
      await Pengumuman.destroy({ where: { id } });

      if (pengumuman.gambar) {
        const filePath = path.join(__dirname, "../uploads", pengumuman.gambar);

        // folder system
        if (fs.existsSync(filePath)) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Gagal menghapus file gambar:", err);
            } else {
              console.log("File gambar berhasil dihapus:", filePath);
            }
          });
        } else {
          console.log("File gambar tidak ditemukan:", filePath);
        }
      }

      response.status = "success";
      response.message = "Pengumuman berhasil dihapus";
    } else {
      response.message = "Pengumuman tidak ditemukan";
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat menghapus pengumuman";
  }

  res.status(200).json(response);
});

// GET - Ambil semua pengumuman
router.get("/", async (req, res) => {
  try {
    const pengumuman = await Pengumuman.findAll();

    if (pengumuman) {
      response.status = "success";
      response.message = "Berhasil mendapatkan semua pengumuman";
      response.data = pengumuman;
    }
  } catch (error) {
    console.warn(error);
  }
  res.status(200).json(response);
});

// GET - Ambil pengumuman berdasarkan ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pengumuman = await Pengumuman.findOne({
      where: { id },
    });
    if (pengumuman) {
      response.status = "success";
      response.message = "Berhasil mendapatkan pengumuman berdasarkan ID";
      response.data = pengumuman;
    }
  } catch (error) {
    console.warn(error);
  }
  res.status(200).json(response);
});

// PUT - Update pengumuman berdasarkan ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const updatePengumuman = await Pengumuman.update(data, { where: { id } });

    if (updatePengumuman) {
      response.status = "success";
      response.message = "Pengumuman berhasil diupdate";
      response.data = updatePengumuman;
    }
  } catch (error) {
    console.warn(error);
  }
  res.status(200).json(response);
});

module.exports = router;
