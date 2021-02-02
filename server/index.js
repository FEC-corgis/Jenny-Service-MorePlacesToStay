const express = require('express')
const app = express()
const port = 1985
const db = require('../database/db.js')
const dummyData = require('./dummyData.js')

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/morePlaces/propId/:id', (req, res) => {
  let data = dummyData.makeArray()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})