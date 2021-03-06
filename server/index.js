const compression = require('compression')
const express = require('express')
const app = express()
const port = 1985
const db = require('../database/db.js')
const dummyData = require('./dummyData.js')
const cors = require('cors')
const axios = require('axios')
const path = require('path')

app.use(compression())
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
    throw 'bypassing classmate requests'
    let paulyArray = await axios(`http://54.215.197.139:4454/region/${id}`)
    // console.log('RESULT OF PAULY TEST', paulyArray.data)
    let paulyRes = []
    for (let i = 0; i < 12; i++) {
      console.log('element', paulyArray.data[i])
      paulyRes.push(paulyArray.data[i].id)
    }
    console.log('RESULTS OF PAULY PUSH', paulyRes)
    // get propIds via specific metric
    let data = []
    // let dummyIds = [1,2,3,4,5,6,7,8,9,10,11,12]
    for (let i = 0; i < paulyRes.length; i++) {
      // create array of data objs and assign propIds
      let propObj = {}
      propObj.propId = paulyRes[i]
      data.push(propObj)
    }
    console.log('GOT propId data!')

    // get overallResults & reviewsTotal via propId
    let myResults = await Promise.all(paulyRes.map(propId => axios(`http://3.20.69.232:1984/reviews/morePlaces/${propId}`)))
    for (let i = 0; i < myResults.length; i++) {
      data[i].overallRating = myResults[i].data.overallRating
      data[i].totalReviews = myResults[i].data.reviewsTotal
    }
    console.log('GOT my reviews data!')

    // get main photo, superhost, & title via propId from dane
    let daneResults = await Promise.all(paulyRes.map(propId => axios(`http://54.211.95.226:5001/api/headerService/more-places/${propId}`)))
    for (let i = 0; i < daneResults.length; i++) {
      data[i].houseUrl = daneResults[i].data.photo
      data[i].houseTitle = daneResults[i].data.title
      data[i].superhost = daneResults[i].data.isSuperhost
    }
    console.log('GOT danes data!')

    // get house type & bedrooms via propId from pauly
    let paulyResults = await Promise.all(paulyRes.map(propId => axios(`http://13.56.218.102:5545/propertyDetails/${propId}`)))
    for (let i = 0; i < paulyResults.length; i++) {
      data[i].houseType = `${paulyResults[i].data[0].property_type} ${paulyResults[i].data[0].property_narrow_type}`
      data[i].bedrooms = paulyResults[i].data[0].beds
    }
    console.log('GOT paulys data!')

    // hardcoded data: price
    for (let i = 0; i < data.length; i++) {
      data[i].totalPrice = 234
    }
    // console.log('data:', data)

    console.log('SUCCESS!')
    res.send(data)
  } catch(e) {
    console.log('FALLBACK!', e)
    let data = dummyData.makeArray()
    res.send(data)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})