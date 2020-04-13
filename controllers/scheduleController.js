const database = require('../database')

module.exports = {
    getSubject(req, res, next) {
        const major = req.params.major
        const sqlSelect = 'select * from schedule where major =' + major
        database.query(sqlSelect, (err, data) => {
            console.log(data)
            res.json(data)
        })
    }
}