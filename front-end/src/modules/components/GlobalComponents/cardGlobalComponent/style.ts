import { up } from "styled-breakpoints"
import styled, { css } from "styled-components"
export const sharedStyles = css`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
`

export const CardComponent = styled.div`
  display: flex;
  padding: 0 20px;
  border-radius: 10px;
  height: 100%;
  padding-top: 10px;
  width: auto;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  ${up("sm")} {
  }

  ${up("md")} {
  }

  ${up("lg")} {
    font-size: 1rem;
    display: grid;
    padding: 0 20px;
    border-radius: 10px;
    height: 100%;
    padding-top: 10px;
    width: 950px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }

  ${up("xl")} {
    font-size: 1rem;
    display: flex;
    padding: 0 20px;
    border-radius: 10px;
    height: 100%;
    padding-top: 10px;
    width: auto;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }
`
