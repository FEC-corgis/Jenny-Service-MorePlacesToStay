import React from 'react';
import House from './House.jsx'
import styled from 'styled-components'
import Styles, { ArrayStyled } from './Styles.js'

class HouseArray extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render() {
    const styles = {
      transform: `translateX(${this.props.transform}vw)`,
      transition: '.5s',
    }
    return (
      <ArrayStyled style={styles}>
        {this.props.top12.map(house => <House details={house}/>)}
      </ArrayStyled>
    )
  }
}

export default HouseArray;