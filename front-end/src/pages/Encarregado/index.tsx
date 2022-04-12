import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../AuthProvider/userAuth";
import FormAbate from "../../components/form/form-abate-diario";
import FormSerosa from "../../components/form/form-serosa";

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;

const EnDiv = styled.div`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-style: italic;
  width: 100%;
  heigth: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25%% 25% 25% 25%;
  grid-template-rows: 50px 50% 50% 180px;
  grid-template-areas: "cabecalho cabecalho" 
                        "secao secao" 
                        "secao secao" 
                        "rodape rodape";
`;

const EncHeader = styled.header`
grid-area: cabecalho;
background-color: black;
heigth: 40px;
`

const EncFooter = styled.footer`
background-color: black;
grid-area: rodape;
`

export default function Encarregados() {
  const { Logout, user } = useContext(AuthContext);

  function handleLogout() {
    Logout();
  }

  return (
    <EnDiv>
      <EncHeader/>
      <FormSerosa />
      <FormAbate />
      <FormAbate />
      <FormAbate />
      <EncFooter/>
    </EnDiv>
  );
}
