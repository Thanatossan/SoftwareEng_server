const database = require('../database')

module.exports = {

    add_title(req, res, next) {
        const data = req.body
        console.log(data)
        // print object เพื่อดูว่าจะเอาข้อมูลมาใช้อะไร
        const title = req.body.title
        const isComplete = req.body.iscom
        const student_id = req.body.id
        const sql = "INSERT INTO `todolist` ( `title`,`isComplete`,`student_code`) VALUES('" + title + "','" + isComplete + "'," + student_id + ")"
        //console.log(sql);
        console.log(data)
        database.query(sql)
        res.end()
    },

    show_title(req, res, next) {
        
        const sql = 'select title,isComplete from todolist'
        console.log(sql);
        
        database.query(sql, (err, data) => {
            console.log(data);
            res.json(data)
        })
    },

    update_data(req, res, next) {
        // const data = req.body
        // console.log(data)
        const description = req.body.description
        const priority = parseInt(req.body.priority)
        const deadline = req.body.deadline.toString()
        const id = parseInt(req.body.id)

        const sql_1 = "SELECT MAX(Todolist_id) as id FROM `todolist` WHERE `student_code` = " + id + " ORDER BY `isComplete`"


        database.query(sql_1, (err, data) => {
            const id_max = data[0].id
            console.log(id_max);

            const sql_2 = "UPDATE `todolist` SET `description` = '" + description + "', `priority_level` = " + priority + ", `deadline` = '" + deadline + "' WHERE `Todolist_id` = " + id_max
            console.log(sql_2)
            database.query(sql_2)
            res.send("update!!!!!")
            res.end()
        })

        // const sql = "UPDATE `todolist` `descrition` = 'descrition', `priority_level` = 'priority', `deadline` = 'deadline',`student_id` = 'id' WHERE "

    }

}