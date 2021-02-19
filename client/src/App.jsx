import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './Wrapper.jsx'
import HouseArray from './HouseArray.jsx'
import House from './House.jsx'
import ThingsToKnow from './ThingsToKnow.jsx'
import TODOWrapper from './TODOWrapper.jsx'
// import styled from 'styled-components'
import Styles, { Carousel, Test, Title, Buttons, WrapperStyled, Counter, Left, Right, GrayBg, TODOCarousel, TODOTest, TODOTitle, TODOWrapperStyled, TODOLine, ArrowIcon, ArrowIconLeft } from './Styles.js'

const App = (props) => {
  const [top12, setTop12] = useState([])
  const [array, setArray] = useState(0)
  const [transform, setTransform] = useState(0)
  const [todoArray, setTodoArray] = useState(0)
  const [todoTransform, setTodoTransform] = useState(0)

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
  const todoArrowLeft = () => {
    if (todoArray === 2 || todoArray === 1) {
      setTodoArray(todoArray - 1)
      setTodoTransform(todoTransform + 88)
     } else {
       setTodoArray(2)
       setTodoTransform(-176)
      }
    }
  const todoArrowRight = () => {
    if (todoArray === 0 || todoArray === 1) {
      setTodoArray(todoArray + 1)
      setTodoTransform(todoTransform - 88)
     } else {
       setTodoArray(0)
       setTodoTransform(0)
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
          <p></p>{" "}
    <GrayBg>
        <p></p><Carousel>
          {/* <Test>
          carousel index: {array} transform: {transform}
        </Test> */}

          <Title>More places to stay</Title>

          <Buttons>
            <Counter>{array + 1}/3 </Counter>{" "}
          {/* <Left onClick={arrowLeft}>{'<'}</Left> */}
          <Left onClick={arrowLeft}><ArrowIconLeft/></Left>
          <Right onClick={arrowRight}><ArrowIcon/></Right>
          </Buttons>

          <WrapperStyled>
          <Wrapper
          top12={top12}
          array={array}
          transform={transform}
          />
          </WrapperStyled>

        </Carousel>
          {/* <TODOTest>
          carousel index: {todoArray} transform: {todoTransform}
        </TODOTest> */}

        <TODOCarousel>
          <Title>Things to do nearby</Title>

          <Buttons>
            <Counter>{todoArray + 1}/3 </Counter>{" "}
          <Left onClick={todoArrowLeft}><ArrowIconLeft/></Left>
          <Right onClick={todoArrowRight}><ArrowIcon/></Right>
          </Buttons>

        <TODOWrapperStyled>
          <TODOWrapper
          todoArray = {todoArray}
          todoTransform = {todoTransform}
          />
        </TODOWrapperStyled>

        </TODOCarousel>
  </GrayBg>
        </div>
      )
    }
}

export default App;