const express=require('express')

const router=express.Router()

const controllers=require("../controllers/menuController")

router.route("/").post(controllers.createMenu);
router.route("/").get(controllers.viewMenu)

module.exports=router;








