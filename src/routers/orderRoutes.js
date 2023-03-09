const express=require('express')

const router=express.Router();

// import {orderDetails} from "../controllers/orderController.js"
const con=require('../controllers/orderController')

router.route("/check").get(con.orderDetails);

module.exports=router;
