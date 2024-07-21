const Http = require("node:http");

const PORT = 40472;

const logger = {
  count: 0,
  log(message) {
    this.count++;
    console.log("LOGGER: <", this.count, "> ", message);
  },
};

const server = Http.createServer((req, res) => {
  logger.log(req.url);
  logger.log(req.headers);

  res.setHeader("content-type", "text/html");
  res.setHeader("status", 200);

  res.end("<h1>Hello from NodeJS server!!</h1>");
});

server.listen(PORT, () => {
  console.log("Server is runnint on: http://localhost:" + PORT);
});
