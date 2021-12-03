import express from 'express'

const app = express()

const formchecker = async (req, res) => {
  const {method, body} = req
  console.log(method, body)

  res.json(body)
}

app.get('/formchecker', formchecker)

module.exports = app
