let makeArray = function() {
  let houseArray = []
  for (let i = 0; i < 12; i++) {
    let dummyHouse = {}
    dummyHouse.houseUrl = `https://fakehouses.s3.us-east-2.amazonaws.com/${i}.jpg`
    dummyHouse.overallRating = 4.32
    dummyHouse.totalReviews = 50
    dummyHouse.houseType = "Entire house"
    dummyHouse.bedrooms = 4
    dummyHouse.houseTitle = "Standard Suburban Jawn"
    dummyHouse.totalPrice = 234
    dummyHouse.superhost = true
    dummyHouse.propertyId = i
    houseArray.push(dummyHouse)
  }
  return houseArray
}

module.exports.makeArray = makeArray;