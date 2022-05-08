import { StyledForm, StyledFormWrapper, StyledLabel } from "./style"

export default function CardPerfilUsuario() {
  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")

  return (
    <StyledFormWrapper>
      <StyledForm>
        <h2>Perfil do Colaborador</h2>
        <label htmlFor="Nome">Nome</label>
        <StyledLabel>{userJson.nome}</StyledLabel>
        <label htmlFor="email">Email</label>
        <StyledLabel>{userJson.email}</StyledLabel>
      </StyledForm>
    </StyledFormWrapper>
  )
}
