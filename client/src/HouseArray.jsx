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
    console.log('transform test', this.props.transform)
    // const styles = {
    //   color: 'green',
    //   transform: `translateX(${this.props.transform}vw)`,
    //   // transform: `translateX(80vw)`,
    //   'transition-timing-function': 'ease',
    //   transition: '.5s',
    //   position: 'fixed'
    // }
    return (
      <div className="array"

      >
        {this.props.top12.map(house => <House details={house}/>)}
      </div>
    )
  }
}

export default HouseArray;