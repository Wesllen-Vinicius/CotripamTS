import { ReactNode } from 'react'
import NavbarEnc from "../../components/navBar/navbarEnc"
import CardPerfilUsuario from "../../components/card/card-perfil-usuario"

type layoutProps = {
    children: ReactNode;
};

export default function EncarregadoLayout({ children }: layoutProps) {
    return (
        <EnDiv>
            <EncHeader>
                <NavbarEnc />
            </EncHeader>
            <EncAside>
                <CardPerfilUsuario />
            </EncAside>
            <EncContent>
                {children}
            </EncContent>
        </EnDiv>
    )
}