import { useContext } from "react"
import AuthContext from "../../../AuthProvider/userAuth"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./style"

export default function NavbarAdm() {
  const { Logout } = useContext(AuthContext)

  function handleLogout() {
    Logout()
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/colaboradores">Colaboradores</NavLink>
          <NavLink to="/unidades">Frigorificos</NavLink>
          <NavLink to="/relatorios">Relatorios</NavLink>
          <NavLink to="/">Estoques</NavLink>
          <NavLink to="/">Cadastros Diarios</NavLink>
        </NavMenu>
        <NavBtn onClick={handleLogout}>Sair</NavBtn>
      </Nav>
    </>
  )
}
