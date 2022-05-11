import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from "./style"

export default function NavbarHome() {
  
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/login'>
            Acesso Restrito
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Fale Conosco</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
