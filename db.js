const mysql = require("mysql")
const connection = mysql.createConnection({
  host: `db-instance-identify1.ckkumldpzh8n.ap-northeast-2.rds.amazonaws.com`,
  user: "wltjd1014",
  password: "lucifer247",
  database: "chat_aws",
})

module.exports = connection
