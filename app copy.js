const express = require("express")
const bodyParser = require("body-parser")
const http = require("http")
const path = require("path")
const socket = require("socket.io")
const mysql = require("mysql")
const db = require("./db")
const formatMessages = require("./utils/messages")
const app = express()
const server = http.createServer(app)
const io = socket(server)
const router = express.Router()
//

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// view engine
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)
app.use("/static", express.static(__dirname + "/public"))

//rendering

app.get("/chat", function (req, res) {
  res.render("chat")
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

//test

var indexRouter = require("./routes/index")
app.use("/", indexRouter)
var testRouter = require("./routes/test")
app.use("/", testRouter)
var joinRouter = require("./routes/join")
app.use("/", joinRouter)

app.get("/api/get", function (req, res) {
  /*   var data = req.query.data

  var result = data + " Succese"
  */

  res.send({ result: "just text" })
  console.log("그냥 콘솔")
})
//

app.use("/test1", function (req, res) {
  res.render("test1")
})

app.get("/api/join", function (req, res) {
  db.query("INSERT INTO `chat_aws`.`chat_table` (`id`, `password`) VALUES ('3', '3');", function (err, rows, fields) {
    if (err) {
      console.log(err)
    } else {
      console.log(rows)
      console.log("query ok")
    }
    res.send({ result: "GOOD JISUNG" })
  })
})

// server
const port = process.env.PORT || 8080
server.listen(port, function () {
  console.log("Server running at http://127.0.0.1:%s", port)
})
