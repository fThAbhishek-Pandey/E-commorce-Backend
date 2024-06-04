const bcrypt= require("bcryptjs");
const user_model = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const secret = require ("../configs/auth.config");
/**
 * I need a write to controller / logic to register a user
 */
exports.signup= async (req,res)=>{
/**
 * logic to create the user 
 */
// 1. read the request body 
const request_body = req.body;// js object 

// 2. Insert the data in the users collections in mongodb 
const userObj={
    name : request_body.name,
    userID : request_body.userID,
    email : request_body.email,
    userType : request_body.userType,
    password : bcrypt.hashSync(request_body.password,10),
}
try {
      const user_created= await  user_model.create(userObj);
      /**
       * Return the user 
       */
      const res_obj = {
        name : user_created.name,
        userId : user_created.userID,
        email : user_created.email,
        userType : user_created.userType,
        createdAt : user_created.createdAt,
        updatedAt : user_created.updateAt
    }
      res.status(201).send(res_obj);
}
catch(err){
        console.log("error while registering the user", err);
        res.status(500).send({
            message : "some error happen while registering the user",
        })
}
// 3. return the responce back to the user 
}
exports.signin = async (req,res) =>{
    // check if userID is present in  the Database
   const user = await user_model.findOne({userID : req.body.userID});
   if(user == null){
     return   res.status(400).send({
            message : "user id passed is not a valid user id",
        });
   }
    // password is correct 
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if(isPasswordValid ) {
         return   res.status(401).send({
                message : "wrong Password Pass",
            });

    }
    // using jwt  we will create the acces token with the given TTL and return 
    const token = jwt.sign(
        {id:user.userID},
        secret.secret,
        {expiresIn :120} ,
    );
    res.status(200).send({
        name : user.name,
        userID : user.userID,
        userType : user.userType,
        accessToken : token ,
    })
}