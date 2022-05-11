import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  height: 0px;
  display: flex;
  z-index: 12;
  position: relative;
  /* Third Nav */
  /* justify-content: flex-start; */
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffff;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  padding: 11px 13px;
  color: white;
  
  height: 50px;
  display: flex;
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`
