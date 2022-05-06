import { useContext } from "react"
import AuthContext from "../../AuthProvider/userAuth"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./navbarStyle"

export default function NavbarEnc() {
  const { Logout } = useContext(AuthContext)

  function handleLogout() {
    Logout()
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/abate">Abates</NavLink>
          <NavLink to="/tripaCozida">Cozidos</NavLink>
          <NavLink to="/produto">Produtos</NavLink>
        </NavMenu>
        <NavBtn onClick={handleLogout}>Sair</NavBtn>
      </Nav>
    </>
  )
}