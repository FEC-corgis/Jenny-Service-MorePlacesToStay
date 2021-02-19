import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './Wrapper.jsx'
import HouseArray from './HouseArray.jsx'
import House from './House.jsx'
import ThingsToKnow from './ThingsToKnow.jsx'
// import styled from 'styled-components'
import Styles, { Carousel, Test, Title, Buttons, WrapperStyled, Counter, Left, Right } from './Styles.js'

const App = (props) => {
  const [top12, setTop12] = useState([])
  const [array, setArray] = useState(0)
  const [transform, setTransform] = useState(0)

  const arrowLeft = () => {
    if (array === 2 || array === 1) {
      setArray(array - 1)
      setTransform(transform + 85)
     } else {
       setArray(2)
       setTransform(-170)
      }
    }
  const arrowRight = () => {
    if (array === 0 || array === 1) {
      setArray(array + 1)
      setTransform(transform - 85)
     } else {
       setArray(0)
       setTransform(0)
      }
  }
  let id = props.match.params.id
  useEffect(() => {
    axios(`/morePlaces/propId/${id}`)
    .then(res =>{
      console.log('MOREPLACES DUMMYDATA', res.data)
      setTop12(res.data.houseArray)
    })
  }, [])

    if (top12.length === 0) {
      return null
    } else {
      return (
        <div>

          <ThingsToKnow/>

        <Carousel>
          {/* <Test>
          carousel index: {array} transform: {transform}
        </Test> */}

          <Title>More places to stay</Title>

          <Buttons>
            <Counter>{array + 1}/3 </Counter>{" "}
          <Left onClick={arrowLeft}>{'<'}</Left>
          <Right onClick={arrowRight}>{'>'}</Right>
          </Buttons>

          <WrapperStyled>
          <Wrapper
          top12={top12}
          array={array}
          transform={transform}
          />
          </WrapperStyled>

        </Carousel>
        </div>
      )
    }
}

export default App;