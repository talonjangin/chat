var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/test", function (req, res, next) {
  res.send("test router")
  //res.render("index", { title: "Express" })
})

module.exports = router
