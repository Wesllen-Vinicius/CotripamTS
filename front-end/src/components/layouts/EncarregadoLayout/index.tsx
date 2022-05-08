import { ReactNode } from "react"
import CardHistorico from "../../card/CardHistorico/card-historico"
import CardPerfilUsuario from "../../card/PerfilUSer/perfilUsuario"
import NavbarEnc from "../../navBar/navbarEnc"
import { EncAside, EncContent, EncHeader, EncRigthAside, EnDiv } from "./style"

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
      <EncRigthAside>
        <CardHistorico />
      </EncRigthAside>
    </EnDiv>
  )
}
