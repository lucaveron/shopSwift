const nodemailer = require("nodemailer");

const sendEmail = async (options) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
      }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado: " + info.response);
  } catch (error) {
    console.error("Error al enviar el correo: " + error.message);
  }
};

module.exports = sendEmail;
