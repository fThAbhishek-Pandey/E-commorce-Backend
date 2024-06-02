const mongoose = require ("mongoose");
/**
 * name 
 * password
 * email
 * userType
 * 
 */
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        require : true,
    },
    userID :{
        type : String,
        require : true,
        uniqe : true,
    },
    password :{
        type :String,
        require: true,

    },
    email : {
        type: String,
        require : true,
        lowercase : true,
        minLength : 10,
        unique: true,
    },
    userType :{
        type :String,
        defalt : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }
},{versionKey: false});

module.exports = mongoose.model("User",userSchema);