const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(5000, console.log("Server Started on Port 5000"));
