const express = require("express")
const router = express.Router()
const db = require("../db.js")
/* GET home page. */
router.get("/test", function (req, res, next) {
  res.render("test")
  //res.render("index", { title: "Express" })
})

router.get("/api/join", function (req, res) {
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
module.exports = router
