import React from 'react';
import HouseArray from './HouseArray.jsx'
import styled from 'styled-components'
import Styles, { ArrayStyled } from './Styles.js'

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render() {
    return (
        <HouseArray
        top12={this.props.top12}
        array={this.props.array}
        transform={this.props.transform}
        />
    )
  }
}

export default Wrapper;