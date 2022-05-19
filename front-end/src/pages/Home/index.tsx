import {
  HomeContent,
  HomeDiv,
  HomeFooter,
  HomeHeader,
  MenuLink,
  NavCenter,
  NavCenterFooter,
  NavFooter,
  NavHeader,
  NavLeft,
  NavLeftFooter,
  NavRight,
  NavRightFooter,
} from "./style"

function Home() {
  return (
    <HomeDiv>
      <HomeHeader>
        <NavHeader>
          <NavLeft>Header</NavLeft>
          <NavCenter>Cotripam</NavCenter>
          <NavRight>
            <MenuLink href="login">Acesso Restrito</MenuLink>
          </NavRight>
        </NavHeader>
      </HomeHeader>
      <HomeContent></HomeContent>
      <HomeFooter>
        <NavFooter>
          <NavLeftFooter>Sobre nós Sobre nós Sobre nós</NavLeftFooter>
          <NavCenterFooter>Centro do footer</NavCenterFooter>
          <NavRightFooter>Direita footer</NavRightFooter>
        </NavFooter>
      </HomeFooter>
    </HomeDiv>
  )
}

export default Home