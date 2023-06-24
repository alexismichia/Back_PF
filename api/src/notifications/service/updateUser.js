const {transporter} = require("../transporter")
const {GMAIL_USER} = require("../config")
const updateUsername = (email, username) => {
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Account updates",
      text: `Your username was updated successfully to "${username}"! From now on your old username is no longer valid`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email: ${error}`);
      } else {
        console.log(`Email sent succesfully: ${info.response}`);
      }
    });
  };
  
  module.exports = { updateUsername };