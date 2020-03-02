const db = require("../database")

module.exports = {
    show(req,res,next){
        db.query("select * from users",(err,data)=>{
            res.json(data)
        })
    }
}