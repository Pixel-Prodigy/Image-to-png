import express from "express";
import multer from "multer";
import cors from "cors";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { Potrace } from "potrace";

const app = express();
const port = 5000;
const upload = multer({ dest: "uploads/" });

app.use(cors());

let activeRequest = 0;
const queue = [];

app.use((req, res, next) => {
  if (activeRequest >= 5) {
    queue.push(next);
    console.log(`Request queued: ${queue.length}`);
    return;
  }

  activeRequest++;
  console.log(`New request added: ${activeRequest}`);

  res.on("finish", () => {
    activeRequest--;
    console.log(`Request completed: ${activeRequest}`);

    if (queue.length > 0) {
      const nextReq = queue.shift();
      if (nextReq) setImmediate(nextReq);
    }
  });

  next();
});

app.post("/convert/imageToPng", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(404).json({ error: "No file uploaded" });

  const inputPath = req.file.path;
  const outputPath = `uploads/${req.file.filename}.png`;

  try {
    await sharp(inputPath).toFormat("png").toFile(outputPath);
    res.sendFile(path.resolve(outputPath), () => {
      fs.unlink(inputPath, () => {});
      fs.unlink(outputPath, () => {});
    });

    console.log("Image converted to PNG");
  } catch (error) {
    console.error("Error converting image:", error);
    res.status(500).json({ error: "Failed to convert image" });
  }
});

app.post("/convert/compileImage", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(404).json({ error: "No file uploaded" });

  const inputPath = req.file.path;
  const outputPath = `uploads/${req.file.filename}.jpg`;

  try {
    await sharp(inputPath).resize(800).jpeg({ quality: 70 }).toFile(outputPath);
    res.sendFile(path.resolve(outputPath), () => {
      fs.unlink(inputPath, () => {});
      fs.unlink(outputPath, () => {});
    });

    console.log("Image compressed successfully");
  } catch (err) {
    console.error("Error compressing image:", err);
    res.status(500).json({ error: "Failed to compress image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
