const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
    const page = await fs.readFile(path.join(__dirname, "index.html"), "utf8");
    res.send(page);
});

app.get("/about", async (req, res) => {
    const page = await fs.readFile(path.join(__dirname, "about.html"), "utf8");
    res.send(page);
});

app.get("/contact-me", async (req, res) => {
    const page = await fs.readFile(
        path.join(__dirname, "contact-me.html"),
        "utf8",
    );
    res.send(page);
});

app.use(async (req, res) => {
    const page = await fs.readFile(path.join(__dirname, "404.html"), "utf8");
    res.send(page);
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Basic Informational Site is running on PORT ${PORT}`);
});
