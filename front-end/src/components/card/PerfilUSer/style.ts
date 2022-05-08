import styled, { css } from "styled-components"


 


 export  const sharedStyles = css`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
`

 export const StyledFormWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  padding-top: 10px;
  width: 100%;
`

 export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

 export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  padding: 3px;
  align-items: center;
  ${sharedStyles}
`
