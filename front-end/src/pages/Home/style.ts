import styled from "styled-components"

export const NavCenterFooter = styled.div`
  width: 33.333%;
  text-align: center;
`

export const HomeDiv = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "side main main"
    "footer footer footer";
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px 100vh 350px;
`

export const HomeHeader = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  position: fixed;
  width: 100%;
`

export const HomeFooter = styled.footer`
  background-color: #4682b4;
  grid-area: footer;
  padding: 1rem;
  width: 100%;
`

export const HomeContent = styled.section`
  grid-area: main;
  width: auto;
`

export const SideBar = styled.section`
  grid-area: side;
  width: 200px;
`

export const MenuLink = styled.a`
  text-decoration: none;
  margin-right: 1em;
  color: white;
  cursor: pointer;
`

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: white;
`

export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  cursor: pointer;
`

export const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`

export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

export const NavFooter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: white;
`

export const NavLeftFooter = styled.div`
  width: 33.333%;
  text-align: left;
  cursor: pointer;
`

export const NavRightFooter = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`
