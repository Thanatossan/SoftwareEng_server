const router = require('express').Router()
const controllers = require('../controllers/index')



router.get("/",controllers.dashboardController.show)    //ส่งข้อมูลไปยังหน้าdashboard

router.post("/login",controllers.usersController.check_user)    //เช็คว่าuserที่loginเข้ามาเคยloginมาก่อนรึเปล่า

router.post("/added",controllers.todolistController.add_title)  //เพิ่มสิ่งที่ต้องทำ
router.get("/showtitle",controllers.todolistController.show_title)  //ส่งชื่อสิ่งที่ต้องทำ
router.patch("/updated",controllers.todolistController.update_data) //อัพเดทค่าในตาราง todolist
    
module.exports = router;    //ประกาศ router ให้ไฟล์อื่นเรียกใช้ได้