const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const eventsRouter = require("./events/events-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(express.static(path.resolve(__dirname, "./client/build")));

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/potlucks", eventsRouter);
server.get("/auth", authRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
