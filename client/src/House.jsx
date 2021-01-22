import React from 'react';

class House extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render() {
    return (
      <div className="house">
          <br/>{<img src={this.props.details.houseUrl}/>}
          <br/>{this.props.details.overallRating} ({this.props.details.totalReviews})
          <br/>{this.props.details.houseType} - {this.props.details.bedrooms} bed
          <br/>{this.props.details.houseTitle}
          <br/>${this.props.details.totalPrice} / night
          <br/>Superhost: {this.props.details.superhost ? "Yes" : "No"}
      </div>
    )
  }
}

export default House;