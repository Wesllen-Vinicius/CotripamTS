import styled, { css } from "styled-components"

const sharedStyles = css`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  padding-top: 10px;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

const StyledLabel = styled.label`
  display: block;
  width: 50%;
  ${sharedStyles}
`

export default function CardPerfilUsuario() {
  return (
    <div>
      <StyledFormWrapper>
        <StyledForm>
          <h2>Perfil do Colaborador</h2>
          <label htmlFor="name">Name</label>
          <StyledLabel />
          <label htmlFor="email">Comarca</label>
          <StyledLabel />
          <label htmlFor="message">Função</label>
        </StyledForm>
      </StyledFormWrapper>
    </div>
  )
}
