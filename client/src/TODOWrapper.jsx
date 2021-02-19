import React from 'react';
import TODOHouseArray from './TODOHouseArray.jsx'
import Styles, { TODOLine } from './Styles.js'

const TODOWrapper = (props) => {
  return (
    <div>
    <TODOHouseArray
      todoArray={props.todoArray}
      todoTransform={props.todoTransform}
    />
    <p></p><TODOLine></TODOLine>
    </div>
  )
}

export default TODOWrapper;