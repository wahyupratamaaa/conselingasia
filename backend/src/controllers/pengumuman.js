const express = require("express");
const router = express.Router();
const Pengumuman = require("../models/table_pengumuman");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Struktur response default
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

    response.status = "success";
    response.message = "Pengumuman berhasil ditambahkan";
    response.data = pengumuman;
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

        // Menghapus file gambar jika ada
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

    response.status = "success";
    response.message = "Berhasil mendapatkan semua pengumuman";
    response.data = pengumuman;
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat mengambil pengumuman";
  }
  res.status(200).json(response);
});

// GET - Ambil pengumuman berdasarkan ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pengumuman = await Pengumuman.findOne({ where: { id } });
    if (pengumuman) {
      response.status = "success";
      response.message = "Berhasil mendapatkan pengumuman berdasarkan ID";
      response.data = pengumuman;
    } else {
      response.message = "Pengumuman tidak ditemukan";
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat mengambil pengumuman";
  }
  res.status(200).json(response);
});

// PUT - Update pengumuman berdasarkan ID
router.put("/:id", upload.single("gambar"), async (req, res) => {
  const id = req.params.id;
  const { judul, tanggal } = req.body;
  // const gambar = req.file ? req.file.filename : null;

  try {
    const pengumuman = await Pengumuman.findOne({ where: { id } });

    if (!pengumuman) {
      return res.status(404).json({ message: "Pengumuman tidak ditemukan" });
    }

    // Jika ada file gambar baru, hapus gambar lama
    if (req.file && pengumuman.gambar) {
      const oldFilePath = path.join(__dirname, "../uploads", pengumuman.gambar);
      if (fs.existsSync(oldFilePath)) {
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            console.error("Gagal menghapus file gambar lama:", err);
          }
        });
      }
    }

    // Update pengumuman
    const updatedPengumuman = await pengumuman.update({
      judul,
      tanggal,
      gambar: req.file ? req.file.filename : pengumuman.gambar,
    });

    res
      .status(200)
      .json({ message: "Pengumuman diperbarui", updatedPengumuman });
  } catch (error) {
    res.status(500).json({ message: "Error memperbarui pengumuman", error });
  }
});

router.put("/published/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pengumuman = await Pengumuman.findOne({ where: { id } });
    if (pengumuman) {
      const updatedPengumuman = await article.update({
        status: article.status == 0 ? 1 : 0,
      });

      response.status = "success";
      response.message = "Artikel terpublish";
      response.data = updatedArticle;
      res.status(200).json(response);
    } else {
      response.message = "Artikel tidak ditemukan";
      res.status(404).json(response);
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat mengedit artikel";
    res.status(500).json(response);
  }
});

router.put("/archive/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pengumuman = await Pengumuman.findOne({ where: { id } });
    if (pengumuman) {
      // Mengubah status menjadi 2 (arsip)
      const updatedPengumuman = await pengumuman.update({
        status: 2,
      });

      response.status = "success";
      response.message = "Artikel telah diarsipkan";
      response.data = updatedPengumuman;
      res.status(200).json(response);
    } else {
      response.message = "Artikel tidak ditemukan";
      res.status(404).json(response);
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat mengarsipkan artikel";
    res.status(500).json(response);
  }
});

module.exports = router;
