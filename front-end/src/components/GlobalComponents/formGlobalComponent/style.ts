import { up } from "styled-breakpoints"
import styled from "styled-components"

export const FormComponent = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  h1 {
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
  }

  input {
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    width: 100%;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  button {
    display: block;
    margin-top: 10px;
    width: 50%;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
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
  }

  .error {
    color: red;
    font-family: sans-serif;
    font-size: 12px;
    height: 30px;
  }
`
