const express = require("express");
const router = express.Router();
const Patient = require("../Model/Patient");
const controleur = require("../Controlles/Patient");

//@POST methode
//@DESC ADD CONTACT
//PATH:http://localhost/api/contact/
//PARAMS : req.body
//access: public /private
router.post("/", controleur.addPatient);
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