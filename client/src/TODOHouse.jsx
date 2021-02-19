import React from 'react';
import Styles, { TODOHouseStyled, TODOHousePic, TODORatingLine, TODOReviewCount, PinkStar, TODODescription, TODOPriceLine, TODOPrice } from './Styles.js'

const TODOHouse = (props) => {
  return (
    <TODOHouseStyled>
    <br/>{<TODOHousePic src='https://fecstock.s3.us-east-2.amazonaws.com/icecream.jpg'/>}
    <br/>

    <TODORatingLine>
      <PinkStar/>
      4.32 <TODOReviewCount>(20)</TODOReviewCount>
    </TODORatingLine>

    <TODODescription>
    Shove Ice Cream Into Your Face!
    <br/><TODOPriceLine>
      <TODOPrice>From $20</TODOPrice> / person
      </TODOPriceLine>
    </TODODescription>

</TODOHouseStyled>
  )
}

export default TODOHouse;