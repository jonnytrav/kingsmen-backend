const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).send("Base URL retrieved!");
});

const port = process.env.PORT || 7000;

server.listen(port, (req, res) => {
  console.log(`Server listening on 'http://localhost:${port}'!`);
});
