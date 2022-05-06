import styled from "styled-components"

const HomeDiv = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px 100vh 350px;
`

const HomeHeader = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  padding: 26px 20px;
  position: fixed;
  width: 98%;
`

const HomeFooter = styled.footer`
  background-color: #4682b4;
  grid-area: footer;
  padding: 1rem;
`

const HomeContent = styled.section`
  grid-area: main;
`

const MenuLink = styled.a`
  text-decoration: none;
  margin-right: 1em;
  color: white;
  cursor: pointer;
`

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: white;
`

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  cursor: pointer;
`

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

const NavFooter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: white;
`

const NavLeftFooter = styled.div`
  width: 33.333%;
  text-align: left;
  cursor: pointer;
`

const NavRightFooter = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`

const NavCenterFooter = styled.div`
  width: 33.333%;
  text-align: center;
`

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
