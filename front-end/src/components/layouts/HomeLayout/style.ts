import styled from "styled-components"

export const Div = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "aside main main"
    "footer footer footer";
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px 100vh auto;
`

export const Header = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  position: fixed;
  width: 100%;
`

export const Aside = styled.div`
  grid-area: aside;
  padding: 1rem;
  width: 200px;
  align-items: center;
  margin: 0;
`

export const Content = styled.section`
  grid-area: main;
  padding: 1.5rem;
  width: 100%;
`
export const Footer = styled.footer`
  background-color: #4682b4;
  grid-area: footer;
  padding: 1rem;
  margin: 0;
  width: 100%;
`
