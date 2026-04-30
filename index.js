const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        try {
            const page = await fs.readFile(path.join(__dirname, "index.html"));
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(page);
        } catch (err) {
            if (!res.headersSent) {
                res.writeHead(500, { "Content-Type": "text/plain" });
            }
            res.end(err.message);
        }
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        try {
            const page = await fs.readFile(path.join(__dirname, "about.html"));
            res.end(page);
        } catch (err) {
            if (!res.headersSent) {
                res.writeHead(500, { "Content-Type": "text/plain" });
            }
            res.end(err.message);
        }
    } else if (req.url === "/contact-me") {
        try {
            const page = await fs.readFile(
                path.join(__dirname, "contact-me.html"),
            );
            res.end(page);
        } catch (err) {
            if (!res.headersSent) {
                res.writeHead(500, { "Content-Type": "text/plain" });
            }
            res.end(err.message);
        }
    } else {
        try {
            const page = await fs.readFile(path.join(__dirname, "404.html"));
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(page);
        } catch (err) {
            if (!res.headersSent) {
                res.writeHead(500, { "Content-Type": "text/plain" });
            }
            res.end(err.message);
        }
    }
});
const port = 8080;

server.listen(port);
