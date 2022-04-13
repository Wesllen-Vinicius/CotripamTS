import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../AuthProvider/userAuth";
import CardPerfilUsuario from "../../components/card/card-perfil-usuario";
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
display: grid;
font-family: Arial, sans-serif;
grid-gap: 1rem;
grid-template-areas:
  "header header header"
  "aside main main"
  "footer footer footer";
grid-template-columns: auto auto auto;
grid-template-rows: 40px 100vh 100px;
`;

const EncHeader = styled.header`
grid-area: header;
background-color: black;
padding: 1.5rem;
`

const EncFooter = styled.footer`
background-color: black;
grid-area: footer;
padding: 1rem;

`
const EncAside = styled.div`
grid-area: aside;
`
const EncContent = styled.section`
grid-area: main;
display: flex;
`

export default function Encarregados() {
  const { Logout} = useContext(AuthContext);

  function handleLogout() {
    Logout();
  }

  return (
    <EnDiv>
      <EncHeader></EncHeader>
      <EncAside>

      <CardPerfilUsuario/>

      </EncAside>

      <EncContent>
      <FormSerosa />
      <Button onClick={handleLogout} type="button">
        Deslogar
      </Button>
      </EncContent>

      <EncFooter></EncFooter>
    </EnDiv>
  );
}
