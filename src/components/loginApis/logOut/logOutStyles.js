import styled from "styled-components";
import logOutImage from '../../../images/icons8-logout-58.png'




export const LogOutButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  border-radius: 2px;
  width: fit-content;
  max-height: 2rem;
  background-color: rgba(52, 67, 213, 0.7);
  :hover{
    box-shadow: steelblue 0 0 5px 1px;
  }
  > span {
    margin-right: 1rem;
  }
`

export const LogOutImage = styled.div`
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  transform: scale(0.4);
  background: url(${logOutImage}) center no-repeat;
`
