const {transporter} = require("../transporter")
const {GMAIL_USER} = require("../config")

const emailPayment = (email) => {
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Premium Account",
      text: `Your account has been upgraded! You are now able to access our premium content!`,
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