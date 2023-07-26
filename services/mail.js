const nodemailer = require("nodemailer");



async function SendEmail (to,subject,msgBody){

    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "manojtalwar33@gmail.com", // generated ethereal user
          pass: "18DIWmbrOULEgZCT", // generated ethereal password
        },
      });


     const info = await transporter.sendMail({
        from: "manojtalwar33@gmail.com",
        to: to, // list of receivers
        subject: subject, // Subject line
        html: msgBody, // html body
      });

      return info


}
module.exports = SendEmail;