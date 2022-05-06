import { ReactNode } from "react"
import CardPerfilUsuario from "../../card/card-perfil-usuario"
import NavbarEnc from "../../navBar/navbarEnc"
import { EncAside, EncContent, EncHeader, EnDiv } from "./style"

type layoutProps = {
  children: ReactNode
}

export default function EncarregadoLayout({ children }: layoutProps) {
  return (
    <EnDiv>
      <EncHeader>
        <NavbarEnc />
      </EncHeader>
      <EncAside>
        <CardPerfilUsuario />
      </EncAside>
      <EncContent>{children}</EncContent>
    </EnDiv>
  )
}