import React from 'react';
import House from './House.jsx'

class HouseArray extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render() {
    // console.log('array test', this.props)
    return (
      <div className="array">
        {this.props.top12.map(house => <House details={house}/>)}
      </div>
    )
  }
}

export default HouseArray;