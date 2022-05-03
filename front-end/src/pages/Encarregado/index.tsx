import styled from "styled-components"
import CardPerfilUsuario from "../../components/card/card-perfil-usuario"
import FormAbate from "../../components/form/FormAbate"
import NavbarEnc from "../../components/navBar/navbarEnc"
import { TabNavigationEnc } from "../../components/tabNavigation/tabNavigationEnc"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

const EnDiv = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "aside main main";
  grid-template-columns: auto auto;
  grid-template-rows: 60px 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const EncHeader = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  padding: 26px 20px;
  position: fixed;
  width: 98%;
`

const EncAside = styled.div`
  grid-area: aside;
  padding: 1rem;
  align-items: center;
`

const EncContent = styled.section`
  grid-area: main;
`

export default function Encarregados() {
  return (
    <EnDiv>
      <EncHeader>
        <NavbarEnc />
      </EncHeader>
      <EncAside>
        <CardPerfilUsuario />
      </EncAside>
      <EncContent>
        <FormAbate/>
      </EncContent>
    </EnDiv>
  )
}
