const router = require('express').Router()
const controllers = require('../controllers/index')

router.get('/id=:id', (req, res) => {
    res.send('Your requested is ' + req.params.id)
})

router.get("/schedule/get/:major", controllers.scheduleController.getSubject)
router.post("/schedule/created", controllers.scheduleController.addSubject)

router.post("/users/login/:id", controllers.usersController.checkUserLogin)

router.post("/todolist/added/:id", controllers.todolistController.addTitle)
router.get("/todolist/showtitle/:id", controllers.todolistController.showTitle)
router.post("/todolist/updated/:id", controllers.todolistController.updateDetail)
router.delete("/todolist/deleted/:id", controllers.todolistController.deleteTitle)
router.post("/todolist/tickon/:todoid", controllers.todolistController.tickrightOn)
router.post("/todolist/tickoff/:todoid", controllers.todolistController.tickrightOff)

router.get("/calendar/topic/:id", controllers.calendarController.getEvent)
router.post("/calendar/created/:id", controllers.calendarController.addEvent)
router.post("/calendar/updated/:id", controllers.calendarController.updateEvent)
router.delete("/calendar/deleted/:id", controllers.calendarController.deleteEvent)

module.exports = router;

