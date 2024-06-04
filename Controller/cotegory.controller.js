const cotegory_model = require("../Model/cotegory.model");

/**
 * controller for creating the cotegory 
 * POST localhost :8080/ecomm/api/v1/cotegories
 * 
 * {
 *      "name" : "household",
 *      "description" : "This will have all the hausehold items "
 * }
 */
exports.createNewCategory = async(req, res) =>{
       // Read the req body 

       // create the cotegory object 
       const cat_data ={
                name : req.body.name,
                description : req.body.description,
       }
       // Insert into mongodb 
       try{
        const cotegory = await cotegory_model.create(cat_data);
        return res.status(201).send(cotegory);
       }
       catch(err){
            console.log("error while creating a cotegory");
          return  res.status(500).send({
                message: "error while creating the cotegories"
            });
       }
      
       // return the responce of the created cotegory 

}