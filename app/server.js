const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello DevOps ";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    return res.end("OK");
  }

  console.log(`[${new Date().toISOString()}] Request received`);

  res.end(MESSAGE);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
