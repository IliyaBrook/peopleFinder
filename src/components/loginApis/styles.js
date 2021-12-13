import { keyframes } from "styled-components";

export const floatingEffect = keyframes`
  0%,100% {
    box-shadow: none;
    transform: scale(0.6);
  }
  70% {
    transform: translateX(1px) rotate(1deg) scale(0.6);
  }
  45% {
    transform: translateY(1px) rotate(-1deg) scale(0.6);
  }
  20% {
    transform: translateX(1px) rotate(1deg) scale(0.6);
  }
`;