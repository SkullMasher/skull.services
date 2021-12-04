import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'

const app = express()
app.use(bodyParser.json())
app.use(express.json({ limit: '10kb' }))

let transporter = nodemailer.createTransport({
  host: "heartlessgaming.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

const formchecker = async (req, res) => {
  const form = req.body

  try {
    let mail = await transporter.sendMail({
      from: '"Contact skullmasher.io" <no-reply@skullmasher.io>',
      to: "florian@skullmasher.io",
      subject: "Contact par skullmasher.io 💀 ✔",
      text: `${form.email}\n${form.subject}\n${form.message}`,
      html: `<p>${form.email}</p><p>${form.subject}</p><p>${form.message}</p>`,
    })
    console.log(`Message sent: ${mail.messageId}`)

    res.json({"success": "Contact form was sent"})
  }  catch (error) {
    console.log(error)
    res.json({"error": "Sending the message failed"})
  }
}

app.post('/formchecker', formchecker)

module.exports = app
