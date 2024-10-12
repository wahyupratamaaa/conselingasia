// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const path = require("path");
// const controllers = require("./controllers");
// const Article = require("./controllers/article.js");
// const Pengumuman = require("./controllers/pengumuman");
// const app = express();

// // Middleware CORS
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
    
//   })
// );

// // Middleware morgan
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// } else if (process.env.NODE_ENV === "production") {
//   app.use(morgan("combined"));
// }
// app.options("*", cors()); // Izinkan semua preflight request



// // Body parser middleware
// app.use(
//   bodyParser.json({
//     limit: "100mb",
//     extended: true,
//   })
// );
// app.use(
//   bodyParser.urlencoded({
//     limit: "100mb",
//     extended: true,
//   })
// );
// app.use("/assets", express.static(path.join(__dirname, "../assets")));

// // Connection test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
//   });
// });




// // Daftarkan Controller di Dalam Folder Controllers
// app.use("/api", controllers);
// // app.use("/article", Article);
// // app.use("/pengumuman", Pengumuman);

// module.exports = app;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const controllers = require("./controllers");
const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Middleware morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
}
app.options("*", cors()); // Izinkan semua preflight request

// Body parser middleware
app.use(
  bodyParser.json({
    limit: "100mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
  })
);

// Middleware untuk menyajikan file dari folder 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // Menyesuaikan path

// Middleware untuk menyajikan file dari folder 'assets'
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// Connection test route
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

// Daftarkan Controller di Dalam Folder Controllers
app.use("/api", controllers);

module.exports = app;
