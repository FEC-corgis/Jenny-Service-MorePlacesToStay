const express = require('express')
const app = express()
const port = 1985
const db = require('../database/db.js')
const dummyData = require('./dummyData.js')
const cors = require('cors')

app.use('/rooms/:id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/morePlaces/propId/:id', async (req, res) => {
  try {
    let data = await dummyData.makeArray()
    res.send(data)
  } catch(e) {
    console.log('ERROR', e)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})