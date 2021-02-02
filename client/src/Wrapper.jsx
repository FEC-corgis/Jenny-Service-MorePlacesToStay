import React from 'react';
import HouseArray from './HouseArray.jsx'
import styled from 'styled-components'
import Styles, { ArrayStyled } from './Styles.js'

const Wrapper  = (props) => {
    return (
        <HouseArray
        top12={props.top12}
        array={props.array}
        transform={props.transform}
        />
    )
}

export default Wrapper;