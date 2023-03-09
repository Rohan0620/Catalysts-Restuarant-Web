// import Menu from "../models/Menu.js";
const Menu=require('../models/Menu.js')
// import bigPromise from "../middlewares/bigPromise.js";
//import multer from 'multer';
//import fs from 'fs';


exports.createMenu=async (req,res)=>{
    console.log(req.body);
    const {dish_name,discription,category,price,popularity}=req.body;

    if(!dish_name || !discription || !category || !price || !popularity)
    {
        return res.status(401).json(
            {
              "message":"fail",
               "status":"401"
            }
        )
    }
   
    const det = await Menu.create({

        dish_name,
        discription,
        category,
        price,
        popularity
     })




    return res.status(201).json({
        status:201,
        data: det
    })
    
}

exports.viewMenu=async (req,res)=>{
    const data=await Menu.find();

    if(!data){
        return res.status(400).json({
            status:"fail"
        })
    }
    console.log(data);

    return res.status(200).json({
        status:"sucess",
        menu:data
    })


}





