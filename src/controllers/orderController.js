const Order=require("../models/Order.js")
// import bigPromise from "../middlewares/bigPromise";


exports.orderDetails=async(req,res)=>{
    const details=await Order.find();
    console.log(details);
    

    
    

}