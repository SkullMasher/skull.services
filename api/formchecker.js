import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const formchecker = (req, res) => {
  console.log(req.body)

  res.json({"success": "Contact form was sent"})
}

app.post('/formchecker', formchecker)

module.exports = app
