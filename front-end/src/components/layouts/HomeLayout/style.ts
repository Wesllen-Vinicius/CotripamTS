import styled from "styled-components"

export const Div = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "carousel carousel carousel"
    "aside main main"
    "footer footer footer";
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px 20% 100vw;
`

export const CarouselDiv = styled.div`
  grid-area: carousel;
  padding: 1.5rem;
  display: flex;

  border: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  background-color: cornflowerblue;
  grid-area: footer;
  padding: 1rem;
  margin: 0;
  width: 100%;
  height: 500px;
`
