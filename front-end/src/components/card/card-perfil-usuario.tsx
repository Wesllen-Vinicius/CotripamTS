import React, { useState } from "react";
import styled, {  css } from "styled-components";

const sharedStyles = css`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  padding-top: 10px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledLabel = styled.label`
  display: block;
  width: 50%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;




export default function CardPerfilUsuario() {
  const [state, setState] = useState();
  const [error, setError] = useState('');

 

  const handleInput = (e: { currentTarget: { name: any; value: any; }; }) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev: any) => ({ ...prev, [inputName]: value }));
  };

  return (
    <div>
      <StyledFormWrapper>
        <StyledForm>
          <h2>Perfil do Colaborador</h2>
          <label htmlFor="name">Name</label>
          <StyledLabel
          />
          <label htmlFor="email">Comarca</label>
          <StyledLabel
          />
          <label htmlFor="message">Função</label>
          <StyledLabel
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
        </StyledForm>
      </StyledFormWrapper>
    </div>
  );
}
