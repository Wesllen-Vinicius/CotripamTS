import { ReactNode } from "react"
import CardPerfilUsuario from "../../components/card/perfilUsuario"
import HistoricoAbate from "../../components/Historico/abate"
import NavbarEnc from "../../components/navBar/Encarregado"
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
        <HistoricoAbate />
      </EncRigthAside>
    </EnDiv>
  )
}
