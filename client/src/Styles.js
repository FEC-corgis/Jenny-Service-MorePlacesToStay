import styled from 'styled-components';

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

export const Test = styled.div`
  grid-area: test;
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 20px;
`;

export const Buttons = styled.div`
  grid-area: buttons;
  margin-left: 70%;
`;

export const WrapperStyled = styled.div`
  grid-area: wrapper;
  width: 95vw;
  /* overflow: scroll; */
  overflow: hidden;
`;

export const ArrayStyled = styled.div`
  display: flex;
`;

export const HouseStyled = styled.div`
  margin: 10px;
`;

export const HousePic = styled.img`
  width: 25vw;
  border-radius: 10px;
`;