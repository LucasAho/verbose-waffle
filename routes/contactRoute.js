//Nodemailer js import
const nodemailer = require('nodemailer');

//Env variables to store messages
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

module.exports = function(app) {
    //Route for contact submission
    app.post('/contact', (req, res) => {

        //Using gmail 
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
            }
        });
        //Sends mail usings req.body from front-end
        const mailOpts = {
            from: 'Your sender info here',
            to: GMAIL_USER,
            subject: "New message from portfolio contact page",
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }
        //Renders error or confirmation to handlebars
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