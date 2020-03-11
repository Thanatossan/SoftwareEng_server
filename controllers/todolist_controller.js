const database = require('../database')

module.exports = {

    addTitle(req, res, next) {
        const title = req.body.title
        const isComplete = req.body.iscom
        const student_id = req.body.id
        const createTitle = "INSERT INTO `todolist` ( `title`,`isComplete`,`student_code`) VALUES('" + title + "','" + isComplete + "'," + student_id + ")"
        database.query(createTitle)
        res.send("Created!!")
        res.sendStatus(201).end()
    },

    showTitle(req, res, next) {
        const studentID = req.body.id
        const selectTitle = 'SELECT title,isComplete FROM todolist WHERE student_code = ' + studentID
        console.log(selectTitle);
        database.query(selectTitle, (err, data) => {
            console.log(data);
            res.json(data)  
        })
    },

    updateDetail(req, res, next) {
        const description = req.body.description
        const priority = parseInt(req.body.priority)
        const deadline = req.body.deadline.toString()
        const id = parseInt(req.body.id)
        const selectMax = "SELECT MAX(Todolist_id) AS id FROM `todolist` WHERE `student_code` = " + id + " ORDER BY `isComplete`"
        database.query(selectMax, (err, data) => {
            const idMax = data[0].id
            const updateData = "UPDATE `todolist` SET `description` = '" + description + "', `priority_level` = " + priority + ", `deadline` = '" + deadline + "' WHERE `Todolist_id` = " + idMax
            database.query(updateData)
            res.send("Updated!!")
            res.sendStatus(204).end()
        })
    },
    
    deleteTitle(req,res,next){
        const titleID = req.body.id
        const deleteData = 'DELETE FROM todolist WHERE todolist.Todolist_id =' + titleID
        database.query(deleteData)
        console.log("Deleted!!")
        res.sendStatus(404).end()
    }
    
}