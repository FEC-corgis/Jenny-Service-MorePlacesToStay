// import styled from 'styled-components';
import { Star } from "@styled-icons/boxicons-solid";

export const Carousel = window.styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
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
  font-weight: 700;
`;

export const Buttons = window.styled.div`
  grid-area: buttons;
  margin-left: 70%;
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

export const HouseStyled = window.styled.div`
  margin: 10px;
`;

export const HousePic = window.styled.img`
  width: 18vw;
  border-radius: 10px;
`;

export const PinkStar = window.styled(Star)`
  color: #FF385C;
  width: 15px;
`;