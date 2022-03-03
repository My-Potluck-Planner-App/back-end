const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const eventsRouter = require("./events/events-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/events", eventsRouter);
server.get("/auth", authRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
