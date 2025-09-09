const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: [true, "Email already exists, please choose another one"]
	},
	password: { type: String, required: true }
});

module.exports = mongoose.model("Customer", customerSchema)