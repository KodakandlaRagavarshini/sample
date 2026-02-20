const express = require('express');
const app = express();
const PORT = 3000;

function parseNumber(value) {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the Calculator API! Use /add, /subtract, /multiply, or /divide with query params a and b.");
});

// Addition
app.get('/add', (req, res) => {
    const a = parseNumber(req.query.a);
    const b = parseNumber(req.query.b);

    if (a === null || b === null) {
        return res.status(400).json({ error: "Invalid input. Provide numbers for a and b." });
    }

    res.json({ result: a + b });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const a = parseNumber(req.query.a);
    const b = parseNumber(req.query.b);

    if (a === null || b === null) {
        return res.status(400).json({ error: "Invalid input. Provide numbers for a and b." });
    }

    res.json({ result: a - b });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const a = parseNumber(req.query.a);
    const b = parseNumber(req.query.b);

    if (a === null || b === null) {
        return res.status(400).json({ error: "Invalid input. Provide numbers for a and b." });
    }

    res.json({ result: a * b });
});

// Division
app.get('/divide', (req, res) => {
    const a = parseNumber(req.query.a);
    const b = parseNumber(req.query.b);

    if (a === null || b === null) {
        return res.status(400).json({ error: "Invalid input. Provide numbers for a and b." });
    }

    if (b === 0) {
        return res.status(400).json({ error: "Cannot divide by zero." });
    }

    res.json({ result: a / b });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});