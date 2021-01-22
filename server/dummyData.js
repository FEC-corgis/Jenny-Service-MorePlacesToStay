let makeArray = function() {
  let houseArray = []
  for (let i = 0; i < 12; i++) {
    let dummyHouse = {}
    dummyHouse.houseUrl = 'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4='
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