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
    return (
      <div>
        <HouseArray
        top12={this.props.top12}
        array={this.props.array}
        />
      </div>
    )
  }
}

export default Wrapper;