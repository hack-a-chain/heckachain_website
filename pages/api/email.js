import { html, text } from "../../src/mail/contact";
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    const data = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: `"Hack a chain" <${process.env.SMTP_FROM}>`, // sender address
      to: `${process.env.SMTP_FROM}`, // list of receivers
      subject: `Formulário de Contato de <${email}>`, // Subject line
      text: text(data), // plain text body
      html: html(data), // html body
    });

    res.status(200).json({ message: "Email foi enviado." });
  } else {
    // Handle any other HTTP method
  }
}
