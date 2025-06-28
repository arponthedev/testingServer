// index.js
import express from 'express';
import cors from 'cors';

import path from 'path';

app.use(express.static(path.join(process.cwd(), 'public')));

const app = express();
app.use(cors());

const students = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  department: `Department ${((i) % 5) + 1}`
}));

const text = "This is update text from local mechine";

app.get('/', (req, res) => {
  res.send(text);
});

app.get('/students', (req, res) => {
  res.json(students);
});

// ✅ Export the app instead of app.listen()
export default app;
