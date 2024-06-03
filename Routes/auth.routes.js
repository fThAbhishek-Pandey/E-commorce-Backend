/**
 * POST localhost : 8080npm install http-servernpm install http-server /Ecommerce Backend/api/auth/signup
 * I need to intercept this
 */
const authController = require("../Controller/auth.controller");
module.exports = (app) =>{
    app.post("/ecommerce/api/v1/auth/signup", authController.signup);
}