const express = require("express");
const app = express();

app.use(express.json());

function logger(req, res, next) {
    console.log(`Paul's Dad: ${req.method} ${req.url}`);
    next(); // continue to the route handler
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/users", (req, res) => {
    res.json([{ name: "Ali" }, { name: "Siti" }]);
});

app.get("/me", (req, res) => {
    res.json({ name: "Paul", role: "Developer" });
});

app.get("/hobbies", (req, res) => {
    res.json(["Rock Climbing", "Gaming", "Programming"]);
});

app.get("/user/:ids", (req, res) => {
    const userId = req.params.ids;
    res.send(`User ID: ${userId}`);
});

app.post("/submit", (req, res) => {
    res.send("Form submitted");
});

app.post("/message", (req, res) => {
    const message = req.body.text;
    res.send(`You said: ${message}`);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
