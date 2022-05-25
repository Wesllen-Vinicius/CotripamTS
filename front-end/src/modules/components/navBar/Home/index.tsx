import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from "./style"

export default function NavbarHome() {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/login">Acesso Restrito</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Fale Conosco</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
