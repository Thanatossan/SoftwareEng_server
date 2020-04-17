const db = require('../database')
const checkID = (data, idCheck, everHave) => {
    console.log(data)
    lenght = Object.keys(data).length
    for (i = 0; i < lenght; i++) {
        if (idCheck == data[i].student_id) {   //check id that ever have or not
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
        const cmuitaccount_name = req.body.cmuitaccount_name
        const cmuitaccount = req.body.cmuitaccount
        const student_id = parseInt(req.body.student_id)
        const prename_id = req.body.prename_id
        const prename_TH = req.body.prename_TH
        const prename_EN = req.body.prename_EN
        const firstname_TH = req.body.firstname_TH
        const firstname_EN = req.body.firstname_EN
        const lastname_TH = req.body.lastname_TH
        const lastname_EN = req.body.lastname_EN
        const organization_code = req.body.organization_code
        const organization_name_TH = req.body.organization_name_TH
        const organization_name_EN = req.body.organization_name_EN
        const itaccounttype_id = req.body.itaccounttype_id
        const itaccounttype_TH = req.body.itaccounttype_TH
        const itaccounttype_EN = req.body.itaccounttype_EN
        // console.log(idCheck)
        const selectStudent = 'select student_id from users'
        db.query(selectStudent, (err, data) => {
            const everHave = checkID(data, idCheck, false)
            console.log(everHave)
            if (everHave == true) {
                console.log("DO NOTHING!!");
                res.sendStatus(204).end()
            } else {
                console.log("Don't have this id!!");
                console.log(req.body.student_id)
                const addStudent = "INSERT INTO `users` (`cmuitaccount_name`,`cmuitaccount`,`student_id`,`prename_id`,`prename_TH`,`prename_EN`,`firstname_TH`,`firstname_EN`,`lastname_TH`,`lastname_EN`,`organization_code`,`organization_name_TH`,`organization_name_EN`,`itaccounttype_id`,`itaccounttype_TH`,`itaccounttype_EN`) VALUES('" + cmuitaccount_name + "','" + cmuitaccount + "','" + student_id + "','" + prename_id + "','" + prename_TH + "','" + prename_EN + "','" + firstname_TH + "','" + firstname_EN + "','" + lastname_TH + "','" + lastname_EN + "','" + organization_code + "','" + organization_name_TH + "','" + organization_name_EN + "','" + itaccounttype_id + "','" + itaccounttype_TH + "','" + itaccounttype_EN + "')"
                // const addStudent = "insert into `users` (`cmuitaccount_name`,`cmuitaccount`,`student_id`) VALUES(" + cmuitaccount_name + "," + cmuitaccount + "," + student_id + ")"
                db.query(addStudent)
                console.log("Created!!");
                res.sendStatus(201).end()
            }
        })
    },
    getDetail(req, res, next) {
        const studentID = req.params.id
        const selectTitle = 'SELECT * FROM users WHERE student_id = ' + studentID
        // console.log(selectTitle);
        database.query(selectTitle, (err, data) => {
            // console.log(data);
            res.json(data)
        })
    }

}

