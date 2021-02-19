import React from 'react';
import TODOHouse from './TODOHouse.jsx';
import Styles, { TODOArrayStyled } from './Styles.js';

const TODOHouseArray = (props) => {
  const styles = {
    transform: `translateX(${props.todoTransform}vw)`,
    transition: '.5s',
  }
  let arr = []
  for (let i = 0; i < 15; i++) {
    arr.push('pic')
  }
  return (
    <div>
      <TODOArrayStyled style={styles}>
        {arr.map(pic => <TODOHouse/> )}
      </TODOArrayStyled>
    </div>
  )
}

export default TODOHouseArray;