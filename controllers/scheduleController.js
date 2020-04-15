const database = require('../database')

module.exports = {
    getSubject(req, res, next) {
        const major = req.params.major
        console.log(major)
        const sqlSelect = "SELECT * FROM `schedule` WHERE `major` = '" + major + "'"
        database.query(sqlSelect, (err, data) => {
            console.log(data)
            res.json(data)
        })
    },
    addSubject(req, res, next) {
        const data = req.body
        console.log(data)

        const major = data.major
        const year = data.year
        const semester = data.semester
        const subjectID = data.subjectID
        const subject = data.subject
        const credits = data.credits
        const general_education = data.general
        const sqlInsert = "INSERT INTO `schedule` ( `major` , `year`, `semester`, `subjectID`, `subject`, `credits`, `general_education`) VALUES ('" + major + "', '" + year + "', '" + semester + "', '" + subjectID + "', '" + subject + "', '" + credits + "', '" + general_education + "')"
        console.log(sqlInsert)

        database.query(sqlInsert)
        console.log("Created!!!")
        res.sendStatus(204).end()
    }
}