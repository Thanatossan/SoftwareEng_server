const router = require('express').Router()
const controllers = require('../controllers/index')

router.get("/",controllers.dashboardController.show)    //ส่งข้อมูลไปยังหน้าdashboard

router.post("users/login",controllers.usersController.checkUserLogin)    

router.post("/todolist/added",controllers.todolistController.addTitle)  
router.get("/todolist/showtitle",controllers.todolistController.showTitle)  
router.patch("/todolist/updated",controllers.todolistController.updateDetail)
router.delete("/todolist/deleted",controllers.todolistController.deleteTitle)

module.exports = router;    