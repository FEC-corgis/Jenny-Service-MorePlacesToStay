// import styled from 'styled-components';

export const Carousel = styled.div`
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
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
  font-size: 20px;
`;

export const Buttons = window.styled.div`
  grid-area: buttons;
  margin-left: 70%;
`;

export const WrapperStyled = window.styled.div`
  grid-area: wrapper;
  width: 95vw;
  /* overflow: scroll; */
  overflow: hidden;
`;

export const ArrayStyled = window.styled.div`
  display: flex;
`;

export const HouseStyled = window.styled.div`
  margin: 10px;
`;

export const HousePic = window.styled.img`
  width: 25vw;
  border-radius: 10px;
`;