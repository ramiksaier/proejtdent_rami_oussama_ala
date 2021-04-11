//import
const express = require("express");
const router = express.Router();
const Admin = require("../Model/Admin");
const controleur = require("../Controlles/Admin");
//docteur router
//@POST methode
//@DESC ADD CONTACT
//PATH:http://l ocalhost/api/contact/
//PARAMS : req.body
//access: public /private
router.post("/", controleur.addadmin);
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
