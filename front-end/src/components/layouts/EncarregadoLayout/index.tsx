import { ReactNode } from "react"
import CardPerfilUsuario from "../../card/PerfilUSer/perfilUsuario"
import HistoricoAbate from "../../Historico/abate"
import NavbarEnc from "../../navBar/navbarEnc"
import { EncAside, EncContent, EncHeader, EncRigthAside, EnDiv } from "./style"

type layoutProps = {
  children: ReactNode
}

type historicoProps = {
  children2: ReactNode
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
        <HistoricoAbate />
      </EncRigthAside>
    </EnDiv>
  )
}
