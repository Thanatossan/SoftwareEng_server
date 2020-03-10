const db = require('../database')

const checkID = (data, id_check, checkpoint) => {
    lenght = Object.keys(data).length   
    for (i = 0; i < lenght; i++) {
        if (id_check == data[i].student_code) {   //check id that ever have or not
            console.log("Have ever!!!");
            checkpoint = true
            break
        }
    }
    if(checkpoint==true){
        return true
    }
    else{
        return false
    }
}


module.exports = {

    check_user(req, res, next) {
        const req_data = req.body
        const id_check = req_data.id
        const sql = 'select student_code from users'

        db.query(sql, (err, data) => {
            const checkpoint = checkID(data,id_check,false)
            if (checkpoint == true) {
                console.log("No Content!!");
                res.sendStatus(204)
                res.end()
            } else {
                console.log("Don't have this id!!");
                const insertSQL = 'insert into users (student_code) values(' + id_check + ')'
                db.query(insertSQL, (err, data) => { //add new id in users table
                    if (err) {
                        console.log(err);
                    }
                    console.log("Created!!");
                    res.sendStatus(201)
                    res.end()
                })
            }

        })
    }
}