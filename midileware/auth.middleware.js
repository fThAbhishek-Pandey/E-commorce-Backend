const user_model = require("../Model/user.model");
const jwt = require ("jsonwebtoken");
/**
 * Create a middleware  check if request body is proper and correct 
 */
const verifySigupBody = async (req,res, next)=>{
        try {
            // check for the name 
            if(!req.body.name){
                return res.status(400).send({
                    massage : "Failed ! Name was not provided in resuest body",
                }) 
            }
            // check for the email
            if(!req.body.email){
                return res.status(400).send({
                    massage : "Failed ! Email was not provided in resuest body",
                }) ;
            }
            // check for the userID 
            if(!req.body.userID){
                return res.status(400).send({
                    massage : "Failed ! UserID was not provided in resuest body",
                }) 
            }
            // check if the user same user ID is already present
            const user = await user_model.findOne({userID :req.body.userID});
            if(user){
                return res.status(400).send({
                    message : "Failed ! user with same userID is already Present",
                });
            }
            next();
        }
        catch (err){
                console.log("Error while validating the request object",err);
                res.status(500).send({
                    massage: "error while validating the request body",
                });
        }
}
const verifySigninBody = async (req,res,next)=>{
            if(!req.body.userID){
                return res.status(400).send({
                    message : "userId is not provided",
                })
            }
            if(!req.body.password){
                return res.status(400).send({
                    message : "userId is not provided",
                })
            }
            next();
}
const verifyToken = (req, res, next) =>{
        // Check if the token is present in the header 
        const token = req.header['x-access-token'];
        if(!token){
            return res.status(403).send({
                massage : "No Token Found"
            })
        }
        // If it's the valid token 
        jwt.verify(token.auth_configs.secret, async (err,decoded)=>{
            if(err){
                return res.status(401).send({
                    message : "Unautherised !",
                });
            }

            const user = await user_model.findOne({userID : decoded.id});
            if(!user){
                return res.status(400).send({
                    message : "unAutherised , this user for this token does not exist ",
                })
            }
            req.user = user;
            // set the user info in the request body
            next();
        });
}
const isAdmin = (req,res,next) =>{
    const user = req.user;
    if( user && user.userType == "ADMIN"){
        next();
    }
    else {
        return res.status(403).send({
            message :"Only ADMIN users are allouwed to access to this end", 
        })
    }
}
module.exports = {
    verifySigupBody :verifySigupBody,
    verifySigninBody :verifySigninBody,
    verifyToken: verifyToken,
    isAdmin : isAdmin,
}