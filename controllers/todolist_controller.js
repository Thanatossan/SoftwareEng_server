const database = require('../database')

module.exports = {

    addTitle(req, res, next) {
        const title = req.body.title
        const isComplete = req.body.isComplete
        const student_id = req.params.id
        console.log(req.body.isComplete)
        const createTitle = "INSERT INTO `todolist` ( `title`,`isComplete`,`student_code`) VALUES('" + title + "','" + isComplete + "'," + student_id + ")"
        database.query(createTitle)
        res.send("Created!!")
        res.end()
    },

    showTitle(req, res, next) {
        const studentID = req.params.id
        const selectTitle = 'SELECT Todolist_id,title,isComplete,description,priority_level,deadline FROM todolist WHERE student_code = ' + studentID
        // console.log(selectTitle);
        database.query(selectTitle, (err, data) => {
            // console.log(data);
            res.json(data)
        })
    },


    updateDetail(req, res, next) {
        const description = req.body.description
        const priority = parseInt(req.body.priority)
        const deadline = req.body.deadline.toString()
        const id = parseInt(req.params.id)
        const selectMax = "SELECT MAX(Todolist_id) AS id FROM `todolist` WHERE `student_code` = " + id + " ORDER BY `isComplete`"
        database.query(selectMax, (err, data) => {
            const idMax = data[0].id
            const updateData = "UPDATE `todolist` SET `description` = '" + description + "', `priority_level` = " + priority + ", `deadline` = '" + deadline + "' WHERE `Todolist_id` = " + idMax
            database.query(updateData)
            res.send("Updated!!")
            res.end()
        })
    },

    deleteTitle(req, res, next) {
        const titleID = req.params.id
        const deleteData = 'DELETE FROM todolist WHERE todolist.Todolist_id =' + titleID
        database.query(deleteData)
        console.log("Deleted!!")
    }

}