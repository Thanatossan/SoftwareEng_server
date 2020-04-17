const database = require('../database')

module.exports = {
    getEvent(req, res, next) {
        const studentCode = req.params.id
        const sqlSelect = 'select id,title,start,end from calendar where student_code =' + studentCode
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
        const startDate = data.start
        // const endDate = data.endDate
        // const sqlInsert = "INSERT INTO `calendar` (`title`, `startDate`, `endDate`, `student_code`) VALUES ('" + title + "', '" + startDate + "', '" + endDate + "', '" + studentCode + "')"
        const sqlInsert = "INSERT INTO `calendar` (`title`, `startDate`, `student_code`) VALUES ('" + title + "', '" + startDate + "', '" + studentCode + "')"
        console.log(sqlInsert)
        database.query(sqlInsert)
        console.log("Created!!!")

    },
    deleteEvent(req, res, next) {
        const eventID = req.params.id
        const sqlDelete = 'delete from calendar where calendar.id =' + eventID
        database.query(sqlDelete)
        console.log("DELETED!!!")
        res.sendStatus(404).end()
    }
}