const mysql = require('mysql')

//ต้องการเอาตัวนี้ออกไป
module.exports  = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "study"
})


