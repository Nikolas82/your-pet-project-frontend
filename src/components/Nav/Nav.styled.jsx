import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavWrap = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1279px) {
      display: none;
      
    }

`

export const StyledLink = styled(NavLink)`
  
  color: var(--black);
  text-decoration:none;
  font-size: 20px;
  font-weight:500;
  &:active{
  color: var(--yellow);}
`
export const ButtonBurger = styled.button`

  border: none;
  background: transparent;
  padding: 0;

  &> svg {
    width: 2em;
    height: 2em;
  color: var(--yellow);
  @media screen and (min-width: 1279px) {
      display: none;
      
    }
}
`