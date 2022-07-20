const {user_register}=require("../controllers/userController")
const express=require("express")
const router=express.Router();

router.route("/register").post(user_register);

module.exports = router;