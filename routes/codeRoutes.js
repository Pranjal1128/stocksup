import express from "express";
import { upload_codes } from "../controllers/codeController.js";
// import fs from "fs";
// import path from "path";
// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     if (!fs.existsSync("public")) {
//       fs.mkdirSync("public");
//     }
//     if (!fs.existsSync("public/files")) {
//       fs.mkdirSync("public/files");
//     }
//     cb(null, "public/files");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     const extension = path.extname(file.originalname);

//     if (extension !== ".csv") {
//       return cb(new Error("Only csv files are allowed!"), false);
//     }

//     cb(null, true);
//   },
// });

const router = express.Router();

router.post("/upload_codes", upload_codes);

export default router;
