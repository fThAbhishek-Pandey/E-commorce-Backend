/**
 * POST localhost : 8080npm install http-servernpm install http-server /Ecommerce Backend/api/auth/signup
 * I need to intercept this
 */
const authController = require("../Controller/auth.controller");
const authMiddleware = require("../midileware/auth.middleware");
const authMW = require("../midileware/auth.middleware");
module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup",[authMiddleware.verifySigupBody], authController.signup);
}