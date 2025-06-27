// server.mjs or index.mjs
import express from 'express';
import cors from 'cors';

const app = express();
const port = 2000;

// 1. Use CORS
app.use(cors());

// 2. Create a JSON list for 20 students
const students = [];

for (let i = 1; i <= 20; i++) {
    students.push({
        id: i,
        name: `Student ${i}`,
        department: `Department ${((i - 1) % 5) + 1}` // Cycles through 5 departments
    });
}

const text = "Hello world iam here to server your team hellop"

// 3. Default Route
app.get('/', (req, res) => {
    res.send(text);
});

// 4. Create an endpoint for student GET
app.get('/students', (req, res) => {
    res.json(students);
});

// Start server
app.listen(port, () => {
    console.log(`Server Connected at http://localhost:${port}`);
});
