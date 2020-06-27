const mysql = require("mysql")
const connection = mysql.createConnection({
  host: `database-chat.ckkumldpzh8n.ap-northeast-2.rds.amazonaws.com`,
  user: "chatdb",
  password: "lucifer247",
  database: "chatdatabase",
})

module.exports = connection
