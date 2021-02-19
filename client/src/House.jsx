import React from 'react';
// import styled from 'styled-components'
import Styles, { HouseStyled, HousePic, PinkStar, RatingLine, Description, Price, PriceLine, Details, ReviewCount, Superhost } from './Styles.js'

const House = (props) => {
    return (
      <HouseStyled>
          {/* <br/>{<HousePic src={props.details.houseUrl}/>} */}
          <br/>{<HousePic src='https://fakehouses.s3.us-east-2.amazonaws.com/0.jpg'/>}
          <br/>

          <RatingLine>
            <PinkStar/>
            {props.details.overallRating} <ReviewCount>({props.details.totalReviews})</ReviewCount>
          </RatingLine>

          <Details>
            {props.details.houseType} · {props.details.bedrooms} beds
            </Details>

          <Description>
          {props.details.houseTitle}
          <br/><PriceLine>
            <Price>${props.details.totalPrice}</Price> / night
            </PriceLine>
          </Description>

          {/* <Superhost>
            <br/>Superhost: {props.details.superhost ? "Yes" : "No"}
            </Superhost> */}
      </HouseStyled>
    )
}

export default House;