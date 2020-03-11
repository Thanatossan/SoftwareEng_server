const database = require('../database')

module.exports = {
    getEvent(req, res, next) {
        const studentCode = req.body.code
        const sqlSelect = 'select * from calendar where student_code =' + studentCode
        database.query(sqlSelect, (err, data) => {
            console.log(data)
            res.json(data)
        })
    },
    addEvent(req, res, next) {
        const data = req.body
        console.log(data)
        const studentCode = data.code
        const title = data.title
        const description = data.description
        const startDate = data.startDate
        const endDate = data.endDate
        const sqlInsert = "INSERT INTO `calendar` (`id`, `title`, `description`, `startDate`, `endDate`, `student_code`) VALUES (NULL, '"+ title +"', '"+ description +"', '"+ startDate +"', '"+ endDate +"', '"+ studentCode +"')"
        console.log(sqlInsert)
        
        database.query(sqlInsert)
        console.log("Created!!!")
        res.sendStatus(204).end()
    },
    deleteEvent(req, res, next) {
        const eventID = req.body.id
        const sqlDelete = 'delete from calendar where calendar.id =' + eventID
        database.query(sqlDelete)
        console.log("DELETED!!!")
        res.sendStatus(404).end()
    }
}