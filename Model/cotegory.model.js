/**
 * name 
 * description
 */
const mongoose = require("mongoose");
const cotegorySchema = new mongoose.Schema({
    name :{
        type: String,
        require : true,
        unique : true,
    },
    description :{
            type : String,
            require: true,
    }
},{
   timestamps :true,
   versionKey :false,
});
module.exports= mongoose.model("Categories",cotegorySchema);