import React from 'react';
import Styles, { ThingsToKnowStyled, ThingsTable, ThingsTitle, ThingsTableTitle, ThingsLine, ThingsTableLink } from './Styles.js';

const ThingsToKnow = () => {
  return (
    <ThingsToKnowStyled>

      <ThingsLine></ThingsLine>

      <p></p><ThingsTitle>Things to know</ThingsTitle>

      <br/><ThingsTable>
      <div>
        <ThingsTableTitle>House Rules</ThingsTableTitle>
        Check-in: After 3:00 PM
        <ThingsTableLink>Show all</ThingsTableLink>
      </div>
      <div>
      <ThingsTableTitle>Health & safety</ThingsTableTitle>
        Committed to Airbnb's enhanced cleaning process. Learn more
        <ThingsTableLink>Show all</ThingsTableLink>
      </div>
      <div>
      <ThingsTableTitle>Cancellation policy</ThingsTableTitle>
        Add your trip dates to get the cancellation details for this stay.
        <ThingsTableLink>Add dates</ThingsTableLink>
      </div>

      </ThingsTable>
    </ThingsToKnowStyled>
  )
}

export default ThingsToKnow;