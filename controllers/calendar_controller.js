const database = require('../database')

module.exports = {
    getEvent(req, res, next) {
        const studentCode = req.params.id
        const sqlSelect = 'select * from calendar where student_code =' + studentCode
        database.query(sqlSelect, (err, data) => {
            console.log(data)
            res.json(data)
        })
    },
    addEvent(req, res, next) {
        const data = req.body
        console.log(data)
        const studentCode = req.params.id
        const title = data.title
        const start = data.start
        const end = data.end
        const sqlInsert = "INSERT INTO `calendar` (`title` , `start`, `end`, `student_code`) VALUES ('" + title + "', '" + start + "', '" + end + "', '" + studentCode + "')"
        console.log(sqlInsert)

        database.query(sqlInsert)
        console.log("Created!!!")
        res.sendStatus(204).end()
    },
    deleteEvent(req, res, next) {
        const eventID = req.params.id
        const sqlDelete = 'delete from calendar where calendar.id =' + eventID
        database.query(sqlDelete)
        console.log("DELETED!!!")
        res.sendStatus(404).end()
    },

    updateEvent(req, res, next) {
        const data = req.body
        const eventID = req.params.id
        const title = data.title
        const start = data.start
        const end = data.end
        const save = "UPDATE `calendar` SET `title` = '" + title + "' ,`start` = '" + start + "' ,`end` = '" + end + "' WHERE `id` =" + eventID
        database.query(save)
        console.log("save")
        res.send("save!!")
        res.end()
    }

}