const express = require("express");
const path = require("path");
const server = express();

// Middleware
server.use(express.static("public"));

// Routing
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

server.get("/gift", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gift.html"));
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
