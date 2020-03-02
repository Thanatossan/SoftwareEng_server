const router = require('express').Router()
const controllers = require('../controllers/index')

//ผ่านไปเลยไม่ทำอะไร => next()
//showหน้าdashboard
router.get("/",controllers.dashboardController.show)
//show todolist ที่ต้องทำ
router.get("/show",controllers.todolistController.show_todolist)
//ไปที่หน้าsubmit สิ่งที่ต้องทำ
router.post("/saved",controllers.todolistController.add_topic)
    
module.exports = router;