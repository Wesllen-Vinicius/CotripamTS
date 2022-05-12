import { ReactNode } from "react"
import CardPerfilUsuario from "../../card/PerfilUSer/perfilUsuario"
import NavbarAdm from "../../navBar/Adm"
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
      <RigthAside></RigthAside>
    </Div>
  )
}



