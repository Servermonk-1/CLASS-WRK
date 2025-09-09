const customerModel = require("../models/user.model")

exports.getSignup = (req, res) => {
	res.render('signup')
}

exports.getRegister = (req, res) => {
	console.log(res.body);

	let newCustomer = new customerModel(req.body);
	newCustomer.save()
		.then(() => {
			res.redirect("/user/dashboard")
		})
		.catch((err) => {
			console.log("Error registering customer: ", err);

		})
}


exports.getDashboard = (req, res) => {
	customerModel.find()
		.then((customers) => {
			console.log(allCustomers);
			res.render("index", { allCustomers })
		})
		.catch((err) => {
			console.log("Error retrieving customers: ", err);
			res.status(500).send("Internal Server Error");
		})
}

exports.postSignIn = (req, res) => {
	res.render('signin')	
}

exports.postSignup = (req, res) => {
	res.render('signup')	
}





