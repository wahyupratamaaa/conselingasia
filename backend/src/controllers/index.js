const express = require("express");
const router = express.Router();
const middlewere = require("../config/middlewere"); // Pastikan ini adalah fungsi middleware
const Home = require("./home");
const Login = require("./login");
const Article = require("./article");
const Pengumuman = require("./pengumuman");

router.use("/home", Home);
router.use("/login", Login);
router.use("/article", Article);
router.use("/pengumuman", Pengumuman); // Aktifkan jika ingin menggunakan

module.exports = router;
