
import Header from "../../components/header";
import styled from "styled-components";


const HomeDiv = styled.div`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-style: italic;
  width: 100%;
  heigth: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns:  1fr;
  grid-template-rows: 40px 100% 200px;
  grid-template-areas: "cabecalho" 
                        "secao" 
                        "rodape";
`;

const HomeHeader = styled.header`
grid-area: cabecalho;
background-color: black;
heigth: 40px;
`

const HomeFooter = styled.footer`
background-color: black;
grid-area: rodape;
`

const HomeContent = styled.section`
grid-area: secao;
heigth: 100vh;
`


function Home() {
    return (
      <HomeDiv>
      <HomeHeader>
      <Header/>
      </HomeHeader>
      <HomeContent>
      </HomeContent>
       <HomeFooter/>
      </HomeDiv>
    );
  }
  
  export default Home;
  