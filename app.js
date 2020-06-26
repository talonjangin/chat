const express = require("express")
const app = express()

const port = process.env.PORT || 8080

app.get("/", function (req, res) {
  res.send("hello world good bye")
})
app.listen(port, function () {
  console.log("Server running at http://127.0.0.1:%s", port)
  console.log("Server running at http://127.0.0.1:%s/ko/quiz/1", port)
})
