const router = require('express').Router()
const controllers = require('../controllers/index')

router.get("/dashboard/show",controllers.dashboardController.show)    //ส่งข้อมูลไปยังหน้าdashboard

router.post("/users/login",controllers.usersController.check_user)    //เช็คว่าuserที่loginเข้ามาเคยloginมาก่อนรึเปล่า

router.post("/todolist/added",controllers.todolistController.add_title)  //เพิ่มสิ่งที่ต้องทำ
router.get("/todolist/showtitle",controllers.todolistController.show_title)  //ส่งชื่อสิ่งที่ต้องทำ
router.patch("/todolist/updated",controllers.todolistController.update_data) //อัพเดทค่าในตาราง todolist

router.get("/calendar/topic",controllers.calendarController.getEvent)
router.post("/calendar/created",controllers.calendarController.addEvent)
router.delete("/calendar/deleted",controllers.calendarController.deleteEvent)
module.exports = router;