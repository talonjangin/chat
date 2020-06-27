const express = require("express")
const http = require("http")
const path = require("path")
const socket = require("socket.io")
const app = express()

const server = http.createServer(app)
const io = socket(server)

app.get("/", function (req, res) {
  res.send("hello world good bye")
})

// server
const port = process.env.PORT || 8080
server.listen(port, function () {
  console.log("Server running at http://127.0.0.1:%s", port)
  console.log("Server running at http://127.0.0.1:%s/ko/quiz/1", port)
})
