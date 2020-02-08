const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

module.exports = function(app) {

    app.post('/contact', (req, res) => {
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
            }
        });

        const mailOpts = {
            from: 'Your sender info here',
            to: GMAIL_USER,
            subject: "New message from portfolio contact page",
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }

        smtpTrans.sendMail(mailOpts, (err, response) => {
            if (err) {
                res.render("contact", {
                    reply: "Error has occured, please try again"
                });
            } else {
                res.render("contact", {
                    reply: "Email sent. I'll get back to you shortly"
                });
            }
        })

    });
}