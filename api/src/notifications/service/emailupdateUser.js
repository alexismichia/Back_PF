const {transporter} = require("../transporter")
const {GMAIL_USER} = require("../config")
const emailUpdateUser = (email) => {
    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: "Account updates",
      text: `Your account has had recent changes; go to your profile at this link:${"https://football-central-bay.vercel.app/profile"} to see these changes`,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email: ${error}`);
      } else {
        console.log(`Email sent succesfully: ${info.response}`);
      }
    });
  };
  
  module.exports = { emailUpdateUser};