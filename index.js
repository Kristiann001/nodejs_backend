const express = require("express");
const studentroutes = require("./Routes/studentroute");
require("dotenv").config();
require("./Helpers/init_mongodb")

const app = express();
app.use(express.json())
app.use(studentroutes);

app.use((req,res,next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.port || 4000, function () {
  console.log("Now Listening for requests on http://localhost:4000");
});
