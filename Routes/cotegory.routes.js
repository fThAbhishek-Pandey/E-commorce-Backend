/**
 * POST localhost:8080/ecomm/api/v1/cotegories
 * 
 */
const  cotegory_controller = require("../Controller/cotegory.controller");
const auth_mw = require("../midileware/auth.middleware");
module.exports = (app)=>{
            app.post("ecomm/api/v1/cotegories",[auth_mw.verifyToken,auth_mw.isAdmin],cotegory_controller.createNewCategory);
}