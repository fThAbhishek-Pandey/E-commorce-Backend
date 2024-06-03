const user_model = require("../Model/user.model");
/**
 * Create a new check if request body is proper and correct 
 */
const verifySigupBody = (req,res, next)=>{
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

        }
        catch (err){
                console.log("Error while validating the request object",err);
                res.status(500).send({
                    massage: "error while validating the request body",
                });
        }
}