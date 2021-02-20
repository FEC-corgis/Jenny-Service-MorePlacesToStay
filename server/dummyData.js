let makeArray = function() {
  let houseArray = []
  for (let i = 0; i < 12; i++) {
    let dummyHouse = {}
    dummyHouse.houseUrl = `https://fakehouses.s3.us-east-2.amazonaws.com/0.jpg` // got from dane
    dummyHouse.overallRating = 4.32 // got from me
    dummyHouse.totalReviews = 50 // got from me
    dummyHouse.houseType = "Entire house" // got from pauly
    dummyHouse.bedrooms = 4 // got from pauly
    dummyHouse.houseTitle = "Standard Suburban Jawn" //***DANE
    dummyHouse.totalPrice = 234 // hardcoded!
    dummyHouse.superhost = true // got from dane
    dummyHouse.propertyId = i
    houseArray.push(dummyHouse)
  }
  return houseArray
}

module.exports.makeArray = makeArray;