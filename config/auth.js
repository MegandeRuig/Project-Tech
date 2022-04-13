let sessions = require("express-session");
const userModel = require("../models/user");

let currentsession;

module.exports = {
  // authenticate function
  authenticate: async function(req, res, next){
    // haal de cookie op van client side
    currentsession=req.session;
    console.log(`session cookie is`)
    console.log(currentsession)


    const userid = req.session.userid
    const currentUser = await userModel.findOne({
      email: userid,
    }).lean();

    // als de cookie een userid heeft, ga verder
    if(currentUser != null){
      console.log("auth valid")
      return next()
    }

    console.log("auth invalid")
    // redirect naar login --> Gebruiker kan geen pagina accesen zonder cookie (userid)
    res.redirect("/login")
  }
};

