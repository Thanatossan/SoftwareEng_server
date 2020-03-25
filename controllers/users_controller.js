const db = require('../database')
const checkID = (data, idCheck, everHave) => {
    lenght = Object.keys(data).length
    for (i = 0; i < lenght; i++) {
        if (idCheck == data[i].student_code) {   //check id that ever have or not
            console.log("Have ever!!!");
            everHave = true
            break
        }
    }
    if (everHave == true) {
        return true
    }
    else {
        return false
    }
}

module.exports = {

    checkUserLogin(req, res, next) {
        const idCheck = req.params.id
        console.log(idCheck)
        const selectStudent = 'select student_code from users'
        db.query(selectStudent, (err, data) => {
            const everHave = checkID(data, idCheck, false)
            if (everHave == true) {
                console.log("DO NOTHING!!");
                res.sendStatus(204).end()
            } else {
                console.log("Don't have this id!!");
                const addStudent = 'insert into users (student_code) values(' + idCheck + ')'
                db.query(addStudent)
                console.log("Created!!");
                res.sendStatus(201).end()
            }
        })
    }
}

