const express = require("express");
const router = express.Router();
const Article = require("../models/table_article");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const slugify = require("slugify");



const response = {
  status: "failed",
  message: "aksi gagal dilakukan",
  data: [],
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// POST
router.post("/", upload.single("gambar"), async (req, res) => {
  const { judul, tanggal, isi } = req.body;
  const gambar = req.file ? req.file.filename : null;

  try {
    const article = await Article.create({
      judul,
      tanggal,
      gambar,
      isi,
    });

    response.status = "success";
    response.message = "Artikel berhasil ditambahkan";
    response.data = article;
    res.status(201).json(response);
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat menambahkan artikel";
    res.status(500).json(response);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const article = await Article.findOne({ where: { id } });

    if (article) {
      await Article.destroy({ where: { id } });

      if (article.gambar) {
        const filePath = path.join(__dirname, "../uploads", article.gambar);
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
      response.message = "Artikel berhasil dihapus";
      res.status(200).json(response);
    } else {
      response.message = "Artikel tidak ditemukan";
      res.status(404).json(response);
    }
  } catch (error) {
    console.warn(error);
    response.message = "Terjadi kesalahan saat menghapus artikel";
    res.status(500).json(response);
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const article = await Article.findAll();

    if (article) {
      (response.status = "succes"),
        (response.message = "Berhasil mendapatkan semua article");
      response.data = article;
    }
  } catch (error) {
    console.warn(error);
  }
  res.status(200).json(response);
});

// GET BY ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const article = await Article.findOne({ where: { id } });

    if (article) {
      response.status = "success";
      response.message = "Berhasil Mendapatkan article berdasarkan ID";
      response.data = article;
    }
  } catch (error) {
    console.warn(error);
  }
  res.status(200).json(response);
});
// PUT (EDIT) ARTICLE
router.put("/:id", upload.single("gambar"), async (req, res) => {
  const id = req.params.id;
  const { judul, tanggal, isi } = req.body;
  const gambar = req.file ? req.file.filename : null;

  try {
    const article = await Article.findOne({ where: { id } });

    if (article) {
      // Jika ada file gambar baru, hapus gambar lama
      if (gambar && article.gambar) {
        const oldFilePath = path.join(__dirname, "../uploads", article.gambar);
        if (fs.existsSync(oldFilePath)) {
          fs.unlink(oldFilePath, (err) => {
            if (err) {
              console.error("Gagal menghapus file gambar lama:", err);
            } else {
              console.log("File gambar lama berhasil dihapus:", oldFilePath);
            }
          });
        }
      }

      // Update artikel
      const updatedArticle = await article.update({
        judul,
        tanggal,
        gambar: gambar || article.gambar, // Tetap gunakan gambar lama jika tidak ada gambar baru
        isi,
      });

      response.status = "success";
      response.message = "Artikel berhasil diperbarui";
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

module.exports = router;
