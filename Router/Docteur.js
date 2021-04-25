//import
const express = require("express");
const router = express.Router();
const Docteur = require("../Model/Docteur");
const controleur = require("../Controlles/Docteur");
const isAuthdoc = require("../middelwere/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middelwere/Docteur");

router.post("/signup", registerValidation(), validation, controleur.Signup);
router.post("/signin", signinValidation(), validation, controleur.SignIn);
router.get("/current", isAuthdoc, (req, res) => {
  res.send(req.user);
});

//docteur router
//@POST methode
//@DESC ADD CONTACT
//PATH:http://l ocalhost/api/contact/
//PARAMS : req.body
//access: public /private
//@methode GET
//@DESC GET all CONTACTS
//PATH:http://localhost/api/contact/
router.get("/", controleur.affichedocteur);
//@methode GET
//@DESC GET one CONTACT
//PATH:http://localhost/api/contact/
//@params req.params._id
router.get("/:_id", controleur.afficheOnedocteur);
//@methode DELETE
//@DESC DELETE one CONTACT
//PATH:http://localhost/api/contact/
//@params _id
router.delete("/:_id", controleur.Deletedocteur);
//@methode put
//@DESC update CONTACT by id
//PATH:http://localhost/api/contact/
//@params _id body
router.put("/:_id", controleur.updatedocteur);
//export
module.exports = router;
