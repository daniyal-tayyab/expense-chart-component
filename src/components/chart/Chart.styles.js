import styled from "styled-components";

import {
  colorSoftRed,
  colorDarkBrown,
  colorVeryPaleOrange,
  colorMediumBrown,
  colorCyan,
} from "../../styles/colors";

export const Container = styled.section`
  height: 40rem;
  padding: 2.5rem 2rem;
  border-radius: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colorVeryPaleOrange};
`;

export const Heading = styled.h1`
  color: ${colorDarkBrown};
  font-size: 2.5rem;
`;

export const ChartContainer = styled.div`
  height: 25rem;

  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const ChartBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover p {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1090px) {
    min-width: 4rem;
  }

  @media (max-width: 540px) {
    min-width: 3rem;
  }
`;

export const HoverAmount = styled.p`
  background-color: ${colorDarkBrown};
  color: ${colorVeryPaleOrange};
  font-size: 1rem;
  text-align: center;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-weight: 800;
  margin-bottom: 3px;
  opacity: 0;
  transform: translateY(1rem);
  transition: all 0.3s;

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }

  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

export const Bar = styled.div`
  height: ${(props) => props.amount}%;
  background-color: ${(props) =>
    props.isCurrentDay ? colorCyan : colorSoftRed};
  margin-bottom: 1rem;

  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const Day = styled.p`
  height: 15%;
  text-align: center;
  font-size: 1.2rem;
  color: ${colorMediumBrown};
`;

export const MonthlyExpenseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CurrentMonth = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    color: ${colorMediumBrown};
  }

  p:last-of-type {
    font-size: 3rem;
    font-weight: 700;
    color: ${colorDarkBrown};
  }
`;

export const LastMonth = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  p {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
    color: ${colorDarkBrown};
    font-weight: 700;
  }

  p:last-of-type {
    font-size: 1.2rem;
    color: ${colorMediumBrown};
  }
`;
