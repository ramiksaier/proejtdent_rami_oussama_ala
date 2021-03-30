//import
const express = require("express");
const router = express.Router();
const Docteur = require("../Model/Docteur");
const controleur = require("../Controlles/Docteur");
//docteur router
//@POST methode
//@DESC ADD CONTACT
//PATH:http://l ocalhost/api/contact/
//PARAMS : req.body
//access: public /private
router.post("/", controleur.adddocteur);
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
