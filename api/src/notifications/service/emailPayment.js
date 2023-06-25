const {transporter} = require("../transporter")
const {GMAIL_USER} = require("../config")

const emailPayment = (email) => {
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Premium Account",
      text: `You are now a premium user.`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email: ${error}`);
      } else {
        console.log(`Email sent succesfully: ${info.response}`);
      }
    });
  };
  
  module.exports = { emailPayment };