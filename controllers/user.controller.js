const customerModel = require("../models/user.model")

exports.getSignup = (req, res) => {
	res.render('signup')
}

exports.getRegister = (req, res) => {
	console.log(res.body);

	let newCustomer = new customerModel(req.body);
	newCustomer.save()
		.then(() => {
			let nodemailer = require('nodemailer');

			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'biothegreat26@gmail.com',
					pass: 'uafsshvtohuebdfx'
				}
			});
			let mailOptions = {
				from: 'biothegreat26@gmail.com',
				to: [req.body.email, 'idrisbello1215@gmail.com', 'olabello1215@gmail.com'],
				subject: 'Registration Successful',
				html: `
    <!DOCTYPE html>
    <html lang="en">
      <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:20px auto; background-color:#ffffff; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding:20px;">
              <h1 style="color:#333333; font-size:24px; margin:0 0 10px 0;">Hello ${req.body.name}!</h1>
              <p style="color:#555555; font-size:16px; line-height:1.5; margin:0 0 20px 0;">
                You have successfully registered on our platform. We’re excited to have you on board!
              </p>
              <a href="https://example.com" style="display:inline-block; padding:10px 20px; background-color:#4CAF50; color:#ffffff; text-decoration:none; border-radius:5px; font-weight:bold;">Visit Dashboard</a>
              <p style="margin-top:30px; font-size:12px; color:#999999; text-align:center;">
                &copy; 2025 Your Company. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
			};


			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});
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





