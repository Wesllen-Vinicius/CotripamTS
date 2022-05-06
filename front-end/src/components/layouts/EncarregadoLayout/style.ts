import styled from "styled-components"

export const EnDiv = styled.div`
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

export const EncHeader = styled.header`
  grid-area: header;
  padding: 1.5rem;
  background-color: #4682b4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  align-items: center;
  padding: 26px 20px;
  position: fixed;
  width: 100%;
`

export const EncAside = styled.div`
  grid-area: aside;
  padding: 1rem;
  align-items: center;
`

export const EncContent = styled.section`
  grid-area: main;
  width: 95%;
`
