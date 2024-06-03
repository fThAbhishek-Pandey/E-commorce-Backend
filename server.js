/**
 * this is starting file of the object
 */
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./configs/server.configs") ;
const db_config= require("./configs/db.config");
const user_model = require("./Model/user.model");
const bcrypt = require("bcryptjs");
app.use(express.json());// middleware

/**
 * Create an admin user at the starting of the application 
 * if not already present
 * connetion with mongodb
 */
 mongoose.connect(db_config.DB_URL);
 const db =mongoose.connection;
db.on("error", ()=>{
     console.log("error to connecting Mongo database");
});
db.once("open",()=>{
        console.log("Connected to MongoDB");
        init();
});
async function init(){
    try {
        let user =await user_model.findOne({userID :"admin"});
        if (user){
            console.log("Admin is already present");
            return;
        }
    }catch(err) {
        console.log("Error while reading the data", err);
    }
   
    try {
            user = await user_model.create({
                name: "Abhishek",
                userID:'admin',
                email: "abhishek830564@gmail.com",
                userType: "ADMIN",
                password: bcrypt.hashSync("welcome2",8),
            });
            console.log("Admin created ", user);
    }catch(error){
            console.log("error while creating admin",error);
    }

}


/**
 * stich the route to the server
 */
require("./Routes/auth.routes")(app);
/**
 * start the server 
 */
app.listen(server_config.PORT, ()=>{
    try{
        console.log("server started at port no : ",server_config.PORT);
    }
   catch(error){
       console.log("I am alreay used addres  error : ",error);
   }
   
}); 

