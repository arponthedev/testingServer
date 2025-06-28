// index.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Required for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// ✅ Serve static files from 'public' folder (e.g., /info.json)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Dummy students array (dynamic)
const students = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  department: `Department ${((i) % 5) + 1}`
}));

// ✅ Sample text route
const text = "This is update text from local mechine";
app.get('/', (req, res) => {
  res.send(text);
});

// ✅ /students → returns students array
app.get('/students', (req, res) => {
  res.json(students);
});

// ✅ /students-file → returns content of students.json file
app.get('/students-file', (req, res) => {
  fs.readFile(path.join(__dirname, 'students.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read students.json" });
    }
    res.json(JSON.parse(data));
  });
});

// ✅ Export app for Vercel
export default app;
