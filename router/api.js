const router = require('express').Router()
const controllers = require('../controllers/index')


router.get("/schedule/get/:major", controllers.scheduleController.getSubject)
router.post("/schedule/created", controllers.scheduleController.addSubject)

router.post("/users/login/:id", controllers.usersController.checkUserLogin)
router.get("/users/get/:id", controllers.usersController.getDetail)

router.post("/todolist/added/:id", controllers.todolistController.addTitle)
router.get("/todolist/showtitle/:id", controllers.todolistController.showTitle)
router.post("/todolist/updated/:id", controllers.todolistController.updateDetail)
router.delete("/todolist/deleted/:id", controllers.todolistController.deleteTitle)
router.post("/todolist/tickcommand/:todoid", controllers.todolistController.tickCommand)


router.get("/calendar/topic/:id", controllers.calendarController.getEvent)
router.post("/calendar/created/:id", controllers.calendarController.addEvent)
router.delete("/calendar/deleted/:id", controllers.calendarController.deleteEvent)

module.exports = router;

