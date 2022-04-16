import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../AuthProvider/userAuth";

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

export default function Dashboard() {
  const { Logout } = useContext(AuthContext);

  function handleLogout() {
    Logout();
  }

  return (
    <div className="Home">
      <label>DashBoard</label>
      <Button onClick={handleLogout}>Deslogar</Button>
      <header className="App-header"></header>
    </div>
  );
}


