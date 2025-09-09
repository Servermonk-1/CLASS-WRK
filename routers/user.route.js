const express = require("express")
const { getSignup, getRegister, getDashboard, postSignIn, postSignup } = require("../controllers/user.controller")
const router = express.Router()

router.get("signup", getSignup)

router.get("/signin", postSignIn)

router.get("/signup", postSignup)

router.get("/dashboard", getDashboard)

router.get("/register", getRegister)

module.exports = router

