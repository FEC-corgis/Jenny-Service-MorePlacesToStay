import React from 'react';
import HouseArray from './HouseArray.jsx'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render() {
    const styles = {
      color: 'green',
      transform: `translateX(${this.props.transform}vw)`,
      // transform: `translateX(80vw)`,
      'transition-timing-function': 'ease',
      transition: '.5s',
    }
    return (
      <div className="testthis"
      style={styles}>
        <HouseArray
        top12={this.props.top12}
        array={this.props.array}
        transform={this.props.transform}
        />
      </div>
    )
  }
}

export default Wrapper;