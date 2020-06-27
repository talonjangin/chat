const express = require("express")
const mysql = require("mysql")
const db = require("../db")
const router = express.Router()

router.get("/join", function (req, res, next) {
  res.render("join")
})

db.connect()

router.post("/join", function (req, res, next) {
  const userId = req.body["userId"]
  const userPw = req.body["userPw"]
  const userPwRe = req.body["userPwRe"]
  if (userPw == userPwRe) {
    db.query("insert into user (id, password) values(?,?)", [userId, userPw], function (err, rows, fields) {
      if (err) {
        console.log(err)
      } else {
        console.log(rows)
        res.send("query ok")
      }
    })
  } else {
    res.send("password not match!")
  }
})

module.exports = router
