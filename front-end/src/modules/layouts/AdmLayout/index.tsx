import { ReactNode } from "react"
import CardPerfilUsuario from "../../components/CardPerfilUsuario"
import NavbarAdm from "../../components/navBar/Adm"
import RegistroComponent from "./Registros"
import { Aside, Content, Div, Header, RigthAside } from "./style"

type layoutProps = {
  children: ReactNode
}

export default function AdmLayout({ children }: layoutProps) {
  return (
    <Div>
      <Header>
        <NavbarAdm />
      </Header>
      <Aside>
        <CardPerfilUsuario />
      </Aside>
      <Content>{children}</Content>
      <RigthAside>
        <RegistroComponent />
      </RigthAside>
    </Div>
  )
}
