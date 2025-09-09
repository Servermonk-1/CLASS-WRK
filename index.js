const express = require('express');
const app = express();
require('ejs')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
const customerRouter = require("./routers/user.route")
dotenv.config();

const URI = process.env.URI;
mongoose.connect(URI)

	.then(() => {
		console.log("DB Connected");
	})
	.catch(err => {
		console.error("MongoDB Error: ", err);
	});


let allCustomers = [];
app.use("/user", customerRouter)

app.post("/register", (req, res) => {
	res.send("Registered Successfully")
})

const port = process.env.PORT || 2132;
app.listen(port, () => {
	console.log("It's Working");

})