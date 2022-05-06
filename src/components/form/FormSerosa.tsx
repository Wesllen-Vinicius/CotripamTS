import { useState } from "react"
import styled, { css } from "styled-components"

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
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
  flex-direction: column;
`

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

const StyledInput = styled.input`
  display: flex;
  width: 100px;
  ${sharedStyles}
`

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`

const StyledButton = styled.button`
  display: block;
  width: 20%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #4682b4;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`

const initalState = {
  630: "",
  520: "",
  470: "",
  320: "",
  170: "",
}

export default function FormSerosa() {
  const [state] = useState(initalState)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("submitted!")
    console.log(state)

    console.log("Succeeded!!!")
  }

  return (
    <div>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Serosa</h2>
          <label htmlFor="630">630</label>
          <StyledInput type="number" name="630" value={state[630]} />
          <label htmlFor="520">520</label>
          <StyledInput type="number" name="520" value={state[520]} />
          <label htmlFor="470">470</label>
          <StyledInput type="number" name="470" value={state[470]} />
          <label htmlFor="320">320</label>
          <StyledInput type="number" name="320" value={state[320]} />
          <label htmlFor="170">170</label>
          <StyledInput type="number" name="170" value={state[170]} />
          <StyledButton type="submit">Enviar</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </div>
  )
}
