const express = require('express')
const app = express()
var BodyParser = require('body-parser')
const db = require('./database')
const api = require('./router/api')
const cors = require('cors')

//connect to database 
db.connect((err)=>{
    if(err) throw err
    console.log("Database connected!!!");
})

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

//use for fronted can use command from backend
app.use(cors({
    origin: true,
    credentials: true
}))
//set default page
app.get("/",(req,res)=>{
    res.send("Hello to my first nodejs!!!")
})
//use rest api
app.use("/api",api)
//init port
const port = process.env.PORT || 5500
//start server 
app.listen(port,()=>{
    console.log("server started!!")
})