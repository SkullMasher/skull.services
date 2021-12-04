import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import slowDown from 'express-slow-down'
import xss from 'xss-clean'
import helmet from 'helmet'

const app = express()
app.use(bodyParser.json())
app.use(express.json({ limit: '10kb' }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50 // limit each IP to 50 requests per windowMs
})
app.use(limiter)

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 15, // allow 25 requests per 15 minutes, then...
  delayMs: 1000 // begin adding 1000ms of delay per request
})
app.use(speedLimiter)

app.use(helmet())

app.use(xss())

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
