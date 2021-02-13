const express = require('express')
const app = express()
const port = 1985
const db = require('../database/db.js')
const dummyData = require('./dummyData.js')
const cors = require('cors')
const axios = require('axios')

app.use('/rooms/:id', express.static('./client/dist'))
// app.use(express.static('./client/dist'))
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
    console.log('ERROR', e)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})