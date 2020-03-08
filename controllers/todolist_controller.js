const database = require('../database')

module.exports = {

    add_title(req, res, next) {
        const data = req.body
        console.log(data)

        const title = req.body.title
        const isComplete = req.body.iscom
        const student_id = req.body.id
        const createTitle = "INSERT INTO `todolist` ( `title`,`isComplete`,`student_code`) VALUES('" + title + "','" + isComplete + "'," + student_id + ")"
        
        console.log(data)
        database.query(createTitle)
        res.send("Created!!")
        res.sendStatus(201).end()
    },

    show_title(req, res, next) {
        const studentID = req.body.id
        const selectTitle = 'select title,isComplete from todolist where student_code = ' + studentID
        console.log(selectTitle);
        
        database.query(selectTitle, (err, data) => {
            console.log(data);
            res.json(data)  
        })
    },

    update_data(req, res, next) {
        const description = req.body.description
        const priority = parseInt(req.body.priority)
        const deadline = req.body.deadline.toString()
        const id = parseInt(req.body.id)

        const selectMax = "SELECT MAX(Todolist_id) as id FROM `todolist` WHERE `student_code` = " + id + " ORDER BY `isComplete`"

        database.query(selectMax, (err, data) => {
            const id_max = data[0].id
            console.log(id_max);

            const updateSQL = "UPDATE `todolist` SET `description` = '" + description + "', `priority_level` = " + priority + ", `deadline` = '" + deadline + "' WHERE `Todolist_id` = " + id_max
            console.log(updateSQL)
            
            database.query(updateSQL)
    
            res.send("No Content!!")
            res.sendStatus(204).end()
        })

        

    }

}