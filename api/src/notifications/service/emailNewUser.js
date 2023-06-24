const {transporter} = require("../transporter")
const {GMAIL_USER} = require("../config")
const emailNewUser = (email, username) => {
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Football Central account",
      text: `Congratulations ${username}! Your account was created successfully`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email: ${error}`);
      } else {
        console.log(`Email sent succesfully: ${info.response}`);
      }
    });
  };
  
  module.exports = { emailNewUser };