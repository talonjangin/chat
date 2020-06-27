const express = require("express")
const http = require("http")
const path = require("path")
const socket = require("socket.io")
const formatMessages = require("./utils/messages")
const app = express()

const server = http.createServer(app)
const io = socket(server)

// view engine
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)
app.use("/static", express.static(__dirname + "/public"))

//rendering
app.get("/chat", function (req, res) {
  res.render("chat")
})
app.get("/", function (req, res) {
  res.render("main")
})

//socket.io

const masterBot = "jisung"
io.on("connection", socket => {
  //console.log("io connected")

  socket.emit("message", formatMessages(masterBot, "welcome jschat"))

  socket.on("chatMessage", msg => {
    io.emit("message", formatMessages("user", msg))
  })
})

// server
const port = process.env.PORT || 8080
server.listen(port, function () {
  console.log("Server running at http://127.0.0.1:%s", port)
})
