require("dotenv").config({ path: "./.env" });

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

console.log("✅ Using shared secrets from .env file:");
console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`🔑 SECRET_KEY: ${process.env.SECRET_KEY}`);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Check the console for secrets loaded from .env\n");
});

server.listen(port, hostname, () => {
    console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
