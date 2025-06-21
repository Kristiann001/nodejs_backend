//Connect to MongoDB

const mongoose =require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {dbname: process.env.DB_NAME})
.then(()=>{
    console.log("Mongodb connected")
})
.catch((err)=>console.log(err.message));