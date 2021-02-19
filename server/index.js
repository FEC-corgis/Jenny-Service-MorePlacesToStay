const express = require('express')
const app = express()
const port = 1985
const db = require('../database/db.js')
const dummyData = require('./dummyData.js')
const cors = require('cors')
const axios = require('axios')
const path = require('path')

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'))
})
app.use('/rooms/:id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/morePlaces/propId/:id', async (req, res) => {
  const id = req.params.id
  try {
    let data = {}
    let houseArray = await dummyData.makeArray()
    data.houseArray = houseArray
    // let overall = await axios(`http://localhost:1984/reviews/morePlaces/${id}`)
    let overall = await axios(`http://3.22.194.10:1984/reviews/morePlaces/${id}`)
    data.overallRating = Number(overall.data.overallRating)
    res.send(data)
  } catch(e) {
    console.log('FALLBACK!')
    let data = {}
    data.houseArray = await dummyData.makeArray()
    data.overallRating = 4.44
    res.send(data)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})