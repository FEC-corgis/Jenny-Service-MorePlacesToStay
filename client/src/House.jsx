import React from 'react';
import styled from 'styled-components'
import Styles, { HouseStyled, HousePic } from './Styles.js'

const House = (props) => {
    return (
      <HouseStyled>
          <br/>{<HousePic src={props.details.houseUrl}/>}
          <br/>{props.details.overallRating} ({props.details.totalReviews})
          <br/>{props.details.houseType} - {props.details.bedrooms} bed
          <br/>{props.details.houseTitle}
          <br/>${props.details.totalPrice} / night
          <br/>Superhost: {props.details.superhost ? "Yes" : "No"}
      </HouseStyled>
    )
}

export default House;