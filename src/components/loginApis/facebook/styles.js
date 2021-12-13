import styled from "styled-components";
import { floatingEffect } from "../styles";


export const FacebookLoginStyled = styled.div`
  cursor: pointer;
  transform: scale(0.3);
  animation: ${floatingEffect} 5s infinite;
  & button {
    font-size: 120%;
    letter-spacing: 1px;
  }
  :hover{
    animation: none;
    transform: scale(0.6);
  }
`;