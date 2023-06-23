const nodemailer = require("nodemailer");
const { GMAIL_USER, GMAIL_PASSWORD } = require("./config");

exports.transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: GMAIL_USER,
        pass:GMAIL_PASSWORD
    }
})
