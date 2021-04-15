//import
const express = require("express");
const router = express.Router();
const Rendezvous = require("../Model/Rendevous");
const controleur = require("../Controlles/Rendezvous");
//docteur router
//@POST methode
//@DESC ADD CONTACT
//PATH:http://l ocalhost/api/contact/
//PARAMS : req.body
//access: public /private
router.post("/", controleur.adddrendezvous);
//@methode GET
//@DESC GET all CONTACTS
//PATH:http://localhost/api/contact/
router.get("/", controleur.afficherendezvous);
//@methode GET
//@DESC GET one CONTACT
//PATH:http://localhost/api/contact/
//@params req.params._id
router.get("/:_id", controleur.afficheOnerendezvous);
router.get("/docteur/:id_doc", controleur.afficheOnerendezvousbyDoctorid);

//@methode DELETE
//@DESC DELETE one CONTACT
//PATH:http://localhost/api/contact/
//@params _id
router.delete("/:_id", controleur.Deleterendezvous);
//@methode put
//@DESC update CONTACT by id
//PATH:http://localhost/api/contact/
//@params _id body
router.put("/:_id", controleur.updaterendezvous);
//export
module.exports = router;
