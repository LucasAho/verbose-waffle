//Nodemailer js import
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "1044440592107-1sc0l94kpgpe3gvpcsoqgoqt2n38mtkg.apps.googleusercontent.com", // ClientID
    "_93EoY3sF53eVzkoy-zpj7-K", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
    refresh_token: "1//040rPksjSnAp6CgYIARAAGAQSNwF-L9IrxK1Zc0APK9LGLGegP5ipib66UKPW9rWXmMmpnG6Y15mAFzdD1k3Ug8Eyzu7AZBXcijE"
});
const accessToken = oauth2Client.getAccessToken()
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