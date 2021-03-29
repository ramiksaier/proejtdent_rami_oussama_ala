//import
const express = require("express");
const User = require("../Model/User");
const router = express.Router();
const control = require("../Controlles/User");

router.post("/", control.postUser);
// get All user

router.get("/", control.getUsers);
// get user with id
router.get("/:id", control.getUser);
// delete user
router.delete("/:_id", control.deleteUser);
// Edit user
router.put("/:_id", control.updateUser);
//export
module.exports = router;
