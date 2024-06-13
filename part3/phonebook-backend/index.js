// load express
const express = require("express");
const app = express();

// data
let persons = [
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
app.get("/api/persons", (request, response) => {
    response.json(persons);
});

// route: get API info
app.get("/info", (request, response) => {
    const currentDate = new Date().toString();
    const personsCount = persons.length;
    const infoMessage = `
<div>
    <p>Phonebook has info for ${personsCount} people</p>
    <p>${currentDate}<p/>
</div>
`;
    response.send(infoMessage);
});

// route: get info for a single person
app.get("/api/persons/:id", (request, response) => {
    const personId = Number(request.params.id);
    const personIds = persons.map((p) => p.id);
    if (personIds.includes(personId) === true) {
        const personInfo = persons.find((p) => p.id === personId);
        response.json(personInfo);
        response.status(200).end();
    } else {
        response.status(400).end();
    }
});

// router: delete info for single id
app.delete("/api/persons/:id", (request, response) => {
    const personId = Number(request.params.id);
    const personIds = persons.map((p) => p.id);
    if (personIds.includes(personId) === true) {
        persons = persons.filter((p) => p.id !== personId);
        response.json(200).end();
    } else {
        response.status(400).end();
    }
});

// initialize application
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
