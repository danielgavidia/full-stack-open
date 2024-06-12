// load express
const express = require("express");
const app = express();

// data
const data = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

// route: test
app.get("/", (request, response) => {
    response.send("<h1>Hello world!</h1>");
});

// route: get
app.get("/api/entries", (request, response) => {
    response.json(data);
});

// initialize application
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
