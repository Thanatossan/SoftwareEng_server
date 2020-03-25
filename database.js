const mysql = require('mysql')

//ต้องการเอาตัวนี้ออกไป
module.exports = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "kornny",
    password: "root",
    database: "study"
})


