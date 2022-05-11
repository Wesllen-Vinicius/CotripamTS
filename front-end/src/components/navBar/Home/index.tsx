import { Nav, NavLink, Bars, NavMenu, Button } from "./style"

export default function NavbarHome() {
  
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/login">Acesso Restrito</NavLink>
          <Button>
            <NavLink to="/login">Fale Conosco</NavLink>
          </Button>
        </NavMenu>
      </Nav>
    </>
  )
}
