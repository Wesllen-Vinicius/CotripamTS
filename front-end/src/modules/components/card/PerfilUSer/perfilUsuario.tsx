import { StyledForm, StyledFormWrapper, StyledLabel } from "./style"
import { GrUserManager } from "react-icons/gr"

export default function CardPerfilUsuario() {
  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")

  return (
    <StyledFormWrapper className="container">
      <div className="row">
        <StyledForm className="col-sm-12">
          <h1>
            <GrUserManager />
          </h1>
          <h2>Perfil do Colaborador</h2>
          <label htmlFor="Nome">Nome</label>
          <StyledLabel>{userJson.nome}</StyledLabel>
          <label htmlFor="email">Email</label>
          <StyledLabel>{userJson.email}</StyledLabel>
        </StyledForm>
      </div>
    </StyledFormWrapper>
  )
}
