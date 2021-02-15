// import styled from 'styled-components';
import { Star } from "@styled-icons/boxicons-solid";

export const Carousel = window.styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 87vw;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 50% 50%;
  grid-template-areas:
  "test test"
  "title buttons"
  "wrapper wrapper";
`;

export const Test = window.styled.div`
  grid-area: test;
  visibility: hidden;
`;

export const Title = window.styled.div`
  grid-area: title;
  font-size: 25px;
  font-weight: 600;
`;

export const Buttons = window.styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-left: 70%;
`;

export const Counter = window.styled.div`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 3px;
`;

export const WrapperStyled = window.styled.div`
  grid-area: wrapper;
  width: 78vw;
  /* overflow: scroll; */
  overflow: hidden;
`;

export const ArrayStyled = window.styled.div`
  display: flex;
  width: 80vw;
`;

// HOUSE

export const HouseStyled = window.styled.div`
  margin: 10px;
`;

export const HousePic = window.styled.img`
  width: 18vw;
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

export const PinkStar = window.styled(Star)`
  color: #FF385C;
  width: 15px;
`;