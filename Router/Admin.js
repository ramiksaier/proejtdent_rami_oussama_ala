//import
const express = require("express");
const router = express.Router();
const Admin = require("../Model/Admin");
const controleur = require("../Controlles/Admin");
const isAuth = require("../middelwere/Admin_auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middelwere/Docteur");

router.post("/signup", registerValidation(), validation, controleur.Signup);
router.post("/signin", signinValidation(), validation, controleur.SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

//@methode GET
//@DESC GET all CONTACTS
//PATH:http://localhost/api/contact/
router.get("/", controleur.afficheadmins);
//@methode GET
//@DESC GET one CONTACT
//PATH:http://localhost/api/contact/
//@params req.params._id
router.get("/:_id", controleur.afficheOneadmin);
//@methode DELETE
//@DESC DELETE one CONTACT
//PATH:http://localhost/api/contact/
//@params _id
router.delete("/:_id", controleur.Deleteadmin);
//@methode put
//@DESC update CONTACT by id
//PATH:http://localhost/api/contact/
//@params _id body
router.put("/:_id", controleur.updateadmin);
//export
module.exports = router;
