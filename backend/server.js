const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const { Socket } = require("socket.io");

dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req);
  const singleChat = chats.find((c) => c._id === req.params.id);
  req.send(singleChat);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(5000, console.log("Server Started on PORT  ${PORT}"));

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");
});

//test
