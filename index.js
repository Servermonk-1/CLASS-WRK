const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
require("./models/user.model")




mongoose.connect(URI)
	.then(() => {
		console.log("DB Connected");
	})
	.catch(err => {
		console.error("MongoDB Error: ", err);
	});


let allCustomers = [];
app.use("/user", customerRouter)

app.post