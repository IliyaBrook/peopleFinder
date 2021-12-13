import styled from "styled-components";
import { floatingEffect } from "../styles";

export const GoogleLoginButton = styled.button`
  width: 8rem;
  cursor: pointer;
  transform: scale(0.3);
  animation: ${floatingEffect} 5s infinite;
  :hover{
    animation: none;
    transform: scale(0.6);
  }
`;