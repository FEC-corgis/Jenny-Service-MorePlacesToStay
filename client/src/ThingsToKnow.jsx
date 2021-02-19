import React from 'react';
import Styles, { ThingsToKnowStyled, ThingsTable, ThingsTitle, ThingsTableTitle, ThingsLine, ThingsTableLink, ClockIcon, ThingsTableRow, ArrowIcon, NoSmoking, SelfCheckIcon, PetsIcon, AlcoholIcon, ThingsTableCol, SparkleIcon, SprayIcon, CheckIcon, ThingsTableRowDouble } from './Styles.js';

const ThingsToKnow = () => {
  return (
    <ThingsToKnowStyled>

      <ThingsLine></ThingsLine>

      <p></p><ThingsTitle>Things to know</ThingsTitle>

      <br/><ThingsTable>
      <ThingsTableCol>
        <ThingsTableTitle>House Rules</ThingsTableTitle>

        <ThingsTableRow>
          <ClockIcon/>Check-in: After 3:00 PM
          </ThingsTableRow>
          <ThingsTableRow>
          <ClockIcon/>Checkout: 10:00 AM
          </ThingsTableRow>
          <ThingsTableRow>
          <SelfCheckIcon/>Self check-in with keypad
          </ThingsTableRow>
          <ThingsTableRow>
          <NoSmoking/>No smoking
          </ThingsTableRow>
          <ThingsTableRow>
          <PetsIcon/>No pets
          </ThingsTableRow>
          <ThingsTableRow>
          <AlcoholIcon/>No parties or events
          </ThingsTableRow>

        <br/><ThingsTableLink>
          Show all<ArrowIcon/>
          </ThingsTableLink>
      </ThingsTableCol>

      <ThingsTableCol>
      <ThingsTableTitle>Health & safety</ThingsTableTitle>

      <ThingsTableRow>
          <SparkleIcon/><ThingsTableRowDouble>Committed to Airbnb's enhanced cleaning process. {" "} <ThingsTableLink>Learn more</ThingsTableLink>
          </ThingsTableRowDouble>
          </ThingsTableRow>
          <ThingsTableRow>
          <SprayIcon/><ThingsTableRowDouble>Airbnb's social-distancing and other COVID-19-related guidelines apply</ThingsTableRowDouble>
          </ThingsTableRow>
          <ThingsTableRow>
          <CheckIcon/>Carbon monoxide alarm
          </ThingsTableRow>
          <ThingsTableRow>
          <CheckIcon/>Smoke alarm
          </ThingsTableRow>
        <br/><ThingsTableLink>
          Show all<ArrowIcon/>
          </ThingsTableLink>
      </ThingsTableCol>

      <ThingsTableCol>
      <ThingsTableTitle>Cancellation policy</ThingsTableTitle>

      <ThingsTableRow>Add your trip dates to get the cancellation details for this stay.</ThingsTableRow>
        <p></p><ThingsTableLink>
          Add dates<ArrowIcon/>
          </ThingsTableLink>
      </ThingsTableCol>

      </ThingsTable>
    </ThingsToKnowStyled>
  )
}

export default ThingsToKnow;