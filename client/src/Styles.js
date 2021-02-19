// import styled from 'styled-components';
import { Star } from "@styled-icons/boxicons-solid";
import { Clock } from "@styled-icons/icomoon/Clock";
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos";
import { SmokingBan } from "@styled-icons/fa-solid/SmokingBan";
import { DoorOpenFill } from "@styled-icons/bootstrap/DoorOpenFill";
import { Pets } from "@styled-icons/material/Pets";
import { GlassCheers } from "@styled-icons/fa-solid/GlassCheers";
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles";
import { SprayCan } from "@styled-icons/fa-solid/SprayCan";
import { CheckCircle } from "@styled-icons/material/CheckCircle";

// THINGSTOKNOW

export const ThingsToKnowStyled = window.styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  // height: 60vh;
  margin-left: auto;
  margin-right: auto;
  padding:30px;
`;

export const ThingsLine = window.styled.div`
  height: 1px;
  background-color: lightgray;
`;

export const ThingsTitle = window.styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const ThingsTable = window.styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ThingsTableCol = window.styled.div`
`;

export const ThingsTableRow = window.styled.div`
  display: flex;
  width: 25vw;
  align-items: center;
  column-gap: 15px;
  padding: 3px;
`;

export const ThingsTableTitle = window.styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const ThingsTableLink = window.styled.div`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

// BACKGROUND

export const GrayBg = window.styled.div`
  background-color: #F7F7F7
`;

export const Carousel = window.styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 25px;
  font-weight: 600;
`;

// BUTTONS

export const Buttons = window.styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-left: 72%;
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
  font-size: 16px;
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
  font-size: 16px;
`;

// HOUSE CONTAINERS

export const WrapperStyled = window.styled.div`
  grid-area: wrapper;
  width: 85vw;
  // overflow: scroll;
  overflow: hidden;
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
  width: 15px;
`;

export const SprayIcon = window.styled(SprayCan)`
  width: 15px;
`;

export const CheckIcon = window.styled(CheckCircle)`
  width: 15px;
`;