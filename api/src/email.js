require("dotenv").config();
const { GMAIL_USER, GMAIL_PASSWORD } = process.env;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "footballcentraladm@gmail.com",
    pass: "PROYECTOfinal2023",
  },
});

const emailNewUser = (email) => {
    const mailOptions ={
        from: "footballcentraladm@gmail.com",
        to: email,
        subject: "Football Central account",
        text:"Congratulations! Your account was created successfully"
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(`Error sending email: ${error}`)
        }
        else{
            console.log(`Email sent succesfully: ${info.response}`)
        }
    })
};

module.exports = {emailNewUser}