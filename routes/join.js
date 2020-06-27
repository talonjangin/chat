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
    db.query("select * from user", function (err, rows, fields) {
      if (!err) {
        res.send(rows)
        console.log(rows)
      } else {
        console.log(err)
      }
    })
  } else {
    res.send("password not match!")
  }
})
/*
router.post("/", function (req, res, next) {
  const userId = req.body["userId"]
  const userPw = req.body["userPw"]
  const userPwRe = req.body["userPwRe"]
  if (userPw == userPwRe) {
    connection.query("insert into test_user values(?,?)", [userId, userPw], function (err, rows, fields) {
      if (!err) {
        res.send("success")
      } else {
        res.send("err : " + err)
      }
    })
  } else {
    res.send("password not match!")
  }
})
*/

module.exports = router
