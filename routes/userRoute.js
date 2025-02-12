const express = require("express");
const {
  registerController,
  loginControler,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routes
// REGIOSTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginControler);

//export
module.exports = router;
