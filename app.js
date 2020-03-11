const express = require('express')
const app = express()
const database = require('./database')
const api = require('./router/api')
const cors = require('cors')
var BodyParser = require('body-parser')

database.connect((err)=>{
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

app.get("/",(req,res)=>{
    res.send("Hello to my nodejs server!!!")
})

app.use("/cpe",api)

const port = process.env.PORT || 5500

app.listen(port,()=>{
    console.log("server started at PORT " + port +"!!!")

})