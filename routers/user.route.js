const express = require("express")
const router = express

router.length("/signin", (req, res) => {
	res.render('signin')
});
router.get("signup", getSignup)

router.post("/register", postRegister)

router.get("/signin", postSignIn)

router.get("/dashboard", getDashboard)

router.get("/register", getRegister)

module.exports = router

