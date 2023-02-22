import styled from "styled-components";
import {
  colorSoftRed,
  colorCream,
  colorVeryPaleOrange,
  colorDarkBrown,
} from "../../styles/colors";

export const Container = styled.header`
  padding: 1.8rem 2rem;
  background-color: ${colorSoftRed};
  border-radius: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${colorCream};
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  p:last-of-type {
    color: ${colorVeryPaleOrange};
    font-size: 2.1rem;
    font-weight: 700;
  }
`;

export const CircleContainer = styled.span`
  width: 3rem;
  height: 3rem;
  background-color: ${colorDarkBrown};
  border: 1px solid transparent;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${colorVeryPaleOrange};
    z-index: 1;

    position: absolute;
    top: -1px;
    right: 1.5rem;
  }
`;
