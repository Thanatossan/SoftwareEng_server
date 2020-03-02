const database = require('../database')

module.exports = {
    add_topic(req,res,next) {
        const data = req.body
        //print object เพื่อดูว่าจะเอาข้อมูลมาใช้อะไร
        console.log(data)
        database.query(
            "INSERT INTO `todolist`(`Todolist_id`,`title`,`description`,`priority_level`,`deadline`) VALUES (value1, value2, value3, ...)")
    },
    show_todolist(req,res,next){
        database.query("select * from `todolist`",
        (err,data)=>{
            console.log(err)
            res.json(data)
        })
    }
}