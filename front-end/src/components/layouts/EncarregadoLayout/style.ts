import { up } from "styled-breakpoints"
import styled from "styled-components"

export const EnDiv = styled.div`
  display: grid;
  font-family: Arial, sans-serif;
  grid-gap: 1rem;
  grid-template-areas:
    "header header header"
    "aside main aside2";
  grid-template-columns: 30% auto;
  grid-template-rows: 40px 90vh;

  ${up("sm")} {
    display: grid;
    font-family: Arial, sans-serif;
    grid-gap: 1rem;
    grid-template-areas:
      "header"
      "aside"
      "main"
      "aside2";
    grid-template-columns: 30% auto;
    grid-template-rows: 40px 100%;
  }

  ${up("md")} {
    display: grid;
    font-family: Arial, sans-serif;
    grid-gap: 1rem;
    grid-template-areas:
      "header"
      "aside"
      "main"
      "aside2";
    grid-template-columns: 30% auto;
    grid-template-rows: 40px 100%;
  }

  ${up("lg")} {
    font-size: 1rem;
    padding: 0;
    display: grid;
    font-family: Arial, sans-serif;
    grid-gap: 1rem;
    grid-template-areas:
      "header"
      "aside"
      "main" 
      "aside2";
    grid-template-columns: 100% 100%;
    grid-template-rows: 40px 100%;
  }

  ${up("xl")} {
    font-size: 1rem;
    display: grid;
    font-family: Arial, sans-serif;
    grid-gap: 1rem;
    grid-template-areas:
      "header header header"
      "aside main aside2";
    grid-template-columns: 30% auto;
    grid-template-rows: 40px 90vh;
  }
`

export const EncHeader = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  position: fixed;
  width: 100%;
`

export const EncAside = styled.div`
  grid-area: aside;
  padding: 1rem;
  width: auto;
  align-items: center;
`
export const EncRigthAside = styled.section`
  grid-area: aside2;
  border-radius: 10px;
  padding: 1.5rem;
  width: auto;
`

export const EncContent = styled.section`
  grid-area: main;
  padding: 1.5rem;
  width: 100%;
`
