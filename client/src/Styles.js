// import styled from 'styled-components';
import { Star } from "@styled-icons/boxicons-solid";
import { Clock } from "@styled-icons/icomoon/Clock";
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos";
import { ArrowBackIos } from "@styled-icons/material-rounded/ArrowBackIos";
import { SmokingBan } from "@styled-icons/fa-solid/SmokingBan";
import { DoorOpenFill } from "@styled-icons/bootstrap/DoorOpenFill";
import { Pets } from "@styled-icons/material/Pets";
import { GlassCheers } from "@styled-icons/fa-solid/GlassCheers";
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles";
import { SprayCan } from "@styled-icons/fa-solid/SprayCan";
import { CheckCircle } from "@styled-icons/material/CheckCircle";

// THINGSTOKNOW

export const MaxWidth = window.styled.div`
  max-width: 1128px;
  display: flex;
  justify-items: center;
`;

export const WhiteBg = window.styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: white;
`;

export const ThingsToKnowStyled = window.styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  // padding: 25px;
  padding: 48px;
  max-width: 1128px;
`;

export const ThingsLine = window.styled.div`
  height: 1px;
  background-color: lightgray;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const ThingsTitle = window.styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-right: auto;
`;

export const ThingsTable = window.styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1128px;
`;

export const ThingsTableCol = window.styled.div`

`;

export const ThingsTableRow = window.styled.div`
position: relative;
display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 3px;
`;

export const ThingsTableRowDouble = window.styled.div`
  position: relative;
  left: 30px;
  max-width: 15vw;
`;

export const ThingsTableTitle = window.styled.div`
  position: relative;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
`;

export const ThingsTableLink = window.styled.span`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

// BACKGROUND

export const GrayBg = window.styled.div`
display: flex;
flex-direction: column;
align-items: center;
  background-color: #F7F7F7;
  position: absolute;
  left: 0px;
  width: 100%;
`;

export const Carousel = window.styled.div`
max-width: 1128px;
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  padding: 30px;
  grid-template-columns: 50% 50%;
  grid-template-areas:
  "test test"
  "title buttons"
  "wrapper wrapper";
`;

export const Test = window.styled.div`
  grid-area: test;
`;

export const Title = window.styled.div`
  grid-area: title;
  font-size: 22px;
  font-weight: 600;
`;

// BUTTONS

export const Buttons = window.styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  column-gap: 12px;
  // margin-left: 72%;
  margin-left: auto;
`;

export const Counter = window.styled.div`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 3px;
`;

export const Left = window.styled.button`
  height: 32px;
  width: 32px;
  background-color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  cursor: pointer;
  box-shadow: 0px 2px 3px lightgray;
`;

export const Right = window.styled.button`
  height: 32px;
  width: 32px;
  background-color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  cursor: pointer;
  box-shadow: 0px 2px 3px lightgray;
`;

// HOUSE CONTAINERS

export const WrapperStyled = window.styled.div`
  grid-area: wrapper;
  width: 85vw;
  // overflow: scroll;
  overflow: hidden;
  max-width: 1128px;
`;

export const ArrayStyled = window.styled.div`
  display: flex;
  width: 80vw;
  column-gap: 17px;
`;

// HOUSE

export const HouseStyled = window.styled.div`
`;

export const HousePic = window.styled.img`
  width: 20vw;
  height: 13vw;
  border-radius: 10px;
`;

export const RatingLine = window.styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 2px;
`;

export const ReviewCount = window.styled.div`
  color: gray;
`;

export const Details = window.styled.div`
  font-size: 17px;
`;

export const Description = window.styled.div`
  font-size: 17px;
`;

export const PriceLine = window.styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 16px;
`;

export const Price = window.styled.div`
  font-weight: 700;
`;

export const Superhost = window.styled.div`
  color: lightgray;
`;

// TODO

export const TODOCarousel = window.styled.div`
max-width: 1128px;
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  padding: 30px;
  grid-template-columns: 50% 50%;
  grid-template-areas:
  "TODOtest TODOtest"
  "title buttons"
  "TODOwrapper TODOwrapper"
  "TODOline TODOline";
`;

export const TODOTest = window.styled.div`
  grid-area: TODOtest;
`;


export const TODOWrapperStyled = window.styled.div`
  grid-area: TODOwrapper;
  width: 85vw;
  // overflow: scroll;
  overflow: hidden;
  max-width: 1128px;
`;

export const TODOArrayStyled = window.styled.div`
position: relative;
  display: flex;
  width: 80vw;
  column-gap: 17px;
`;

// TODOHOUSE

export const TODOHouseStyled = window.styled.div`
`;

export const TODOHousePic = window.styled.img`
  width: 16vw;
  border-radius: 10px;
`;

export const TODORatingLine = window.styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 2px;
`;

export const TODOReviewCount = window.styled.div`
  color: gray;
`;

export const TODODescription = window.styled.div`
  font-size: 17px;
  width: 16vw;
`;

export const TODOPriceLine = window.styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 16px;
`;

export const TODOPrice = window.styled.div`
  font-weight: 700;
`;

export const TODOLine = window.styled.div`
  grid-area: TODOline;
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;

// PAULY TEST

export const PaulyFooter = window.styled.div`
display: block;
background-color: #f7f7f7;
border-top: 1px solid #DDDDDD;
color: rgb(34,34,34);
font-weight: 400;
font-size: 16px;
padding-bottom: 0px;
font-family: 'Nunito Sans', sans-serif;
`;

export const PaulySectionContainer = window.styled.div`
display: block;
color: rgb(34,34,34);
margin-left: 197px;
margin-right: 197px;
margin-top: 0px;
margin-bottom: 0px;
// max-width: 1280px;
max-width: 1128px;
padding-left: 80px;
padding-right: 80px;
text-size-adjust: 100%;

`;

export const PaulyColContainer = window.styled.div`
display: flex;
flex-direction: row;
margin-left: -12px;
margin-right: -12px;
padding-bottom: 48px;
padding-top: 48px;
padding-left: 0px;
padding-right: 0px;
text-size-adjust: 100%;
`;

export const PaulyCol = window.styled.div`
display: block;
border-bottom-color: rgb(34,34,34);
border-bottom-style: none;
border-bottom-width: 0px;
margin-bottom: 0px;
padding-bottom: 0px;
padding-left: 12px;
padding-right: 12px;
text-size-adjust: 100%;
width: 286px;
`;

export const PaulyHfoot = window.styled.h4`
font-family: 'Nunito Sans', sans-serif;

font-weight: 700;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-top: 0px;
text-size-adjust: 100%;
text-transform: uppercase;
`;

export const PaulyUfoot = window.styled.ul`
font-family: 'Nunito Sans', sans-serif;

display: block;
flex-wrap: wrap;
font-weight: 400;
list-style-image: none;
list-style-position: outside;
list-style-type: none;
margin-block-end: 0px;
margin-block-start: 0px;
margin-bottom: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
padding-bottom: 0px;
padding-inline-start: 0px;
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
text-size-adjust: 100%;
`;

export const PaulyLfoot = window.styled.li`
font-family: 'Nunito Sans', sans-serif;
box-sizing: border-box;
display: list-item;
flex-basis: 33.3333%;
font-weight: 400;
height: 20px;
line-height: 20px;
list-style-image: none;
list-style-position: outside;
list-style-type: none;
margin-top: 16px;
padding-left: 0px;
padding-right: 0px;
text-align: left;
text-size-adjust: 100%;
`;

export const PaulyFooterDesc = window.styled.div`
font-family: 'Nunito Sans', sans-serif;
border-top-color: rgb(221, 221, 221);
font-size:14px;
line-height:18px;
font-weight:400;
border-top-style: solid;
border-top-width: 1px;
box-sizing: border-box;
display: block;
height: 69px;
padding-bottom: 24px;
padding-top: 24px;
text-size-adjust: 100%;
`;

export const PaulyFooterSection = window.styled.div`
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
line-height: 20px;
text-align: left;
text-size-adjust: 100%;
width: 1120px;
`;

export const PaulySocialContainer = window.styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-align: left;
width: 327px;
margin-right: 24px;
margin-bottom: 0px;
text-size-adjust: 100%;
`;

export const PaulyEnglish = window.styled.div`
display: flex;
flex-direction: row;
`;

export const PaulyFooterImg = window.styled.img`
width: 18px;
`;

// ICONS

export const PinkStar = window.styled(Star)`
  color: #FF385C;
  width: 15px;
`;

export const ClockIcon = window.styled(Clock)`
  width: 15px;
`;

export const ArrowIcon = window.styled(ArrowForwardIos)`
  width: 15px;
`;

export const ArrowIconLeft = window.styled(ArrowBackIos)`
  position: relative;
  left: 3px;
  width: 15px;
`;

export const NoSmoking = window.styled(SmokingBan)`
  width: 15px;
`;

export const SelfCheckIcon = window.styled(DoorOpenFill)`
  width: 15px;
`;

export const PetsIcon = window.styled(Pets)`
  width: 15px;
`;

export const AlcoholIcon = window.styled(GlassCheers)`
  width: 15px;
`;

export const SparkleIcon = window.styled(Sparkles)`
  position: absolute;
  width: 15px;
`;

export const SprayIcon = window.styled(SprayCan)`
  position: absolute;
  width: 15px;
`;

export const CheckIcon = window.styled(CheckCircle)`
  width: 15px;
`;