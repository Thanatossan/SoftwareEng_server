const router = require('express').Router()
const controllers = require('../controllers/index')

//ผ่านไปเลยไม่ทำอะไร => next()
//showหน้าdashboard
router.get("/",controllers.dashboardController.show)
//show todolist ที่ต้องทำ
//ไปที่หน้าsubmit สิ่งที่ต้องทำ
router.post("/added",controllers.todolistController.add_title)
router.get("/showtitle",controllers.todolistController.show_title)
router.patch("/updated",controllers.todolistController.update_data)
    
module.exports = router;