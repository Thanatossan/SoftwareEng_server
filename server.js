const express = require('express')
const app = express()
const db = require('./database')
const api = require('./router/api')
const cors = require('cors')


db.connect((err)=>{ //connect to database 
    if(err) throw err
    console.log("Database connected!!!");
})

app.use(cors({  //use for fronted can use command from backend
    origin: true,
    credentials: true
}))

app.get("/",(req,res)=>{    //set default page
    res.send("Hello to my first nodejs!!!")
})

app.use("/api",api) //using middleware(RESTful API)

const port = process.env.PORT || 5500   //init port

app.listen(port,()=>{   //start server 
    console.log("server started at PORT : "+ port)
})