import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

 const menuRouters=require("./routers/menuRoutes.js")

  mongoose.connect(mongo_url,{useNewUrlParser: true});


 app.use(bodyParser.urlencoded({extended: true}))

 app.use(bodyParser.json());

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb4e5d8472824ab818f13ff590a28bae&units=metric";
 


 app.get("/", function(req, res)
 {
    //response.send("Hello How are you ?? ");
    //console.log(__dirname);

    https.get(url, function(response)
    {
      console.log(response.statusCode);

      response.on("data" , function(data)
      {
         const weatherData = JSON.parse(data)
         const temp = weatherData.main.temp
         const weatherDescription = weatherData.weather[0].description
         const icon = weatherData.weather[0].icon

         const iconUrl = "http://api.openweathermap.org/img/wn/" +icon+ "@2x.png"

         res.write("<p> The weather is currently " + weatherDescription + "<p>")
         res.write("<h1> The temperature in London is " + temp + " degree Celcius. </h1>")
         res.write("<img src=" + iconUrl + ">");

         res.send()

      })
    })
 })

 app.use("/addmenu",menuRouters)

 app.post("/", function(req,res)
 {
    const fname = req.body.fname;
    const email = req.body.email;
    const phone = req.body.phone;

    console.log(fname);
    console.log(email);
    console.log(phone);
  
 });

 app.listen(3000 , function(){

    console.log("Server started at port 3000")
 });
