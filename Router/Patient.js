const express = require("express");
const router = express.Router();
const Patient = require("../Model/Patient");
const controleur = require("../Controlles/Patient");
const isAuth = require("../middelwere/Pat_auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middelwere/Patient");

router.post("/signup", registerValidation(), validation, controleur.Signup);
router.post("/signin", signinValidation(), validation, controleur.SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

//@POST methode
//@DESC ADD CONTACT
//PATH:http://localhost/api/contact/
//PARAMS : req.body
//access: public /private
//@methode GET
//@DESC GET all CONTACTS
//PATH:http://localhost/api/contact/
router.get("/", controleur.affichePatients);
//@methode GET
//@DESC GET one CONTACT
//PATH:http://localhost/api/contact/
//@params req.params._id
router.get("/:_id", controleur.afficheOnePatient);
//@methode DELETE
//@DESC DELETE one CONTACT
//PATH:http://localhost/api/contact/
//@params _id
router.delete("/:_id", controleur.DeletePatient);
//@methode put
//@DESC update CONTACT by id
//PATH:http://localhost/api/contact/
//@params _id body
router.put("/:_id", controleur.updatePatient);

module.exports = router;
