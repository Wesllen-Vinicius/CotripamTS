import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import styled from "styled-components"
import { StyledForm, StyledFormWrapper } from "./style"


const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
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

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;


interface IFormValues {
  abate: Number
  bois: Number
  vacas: Number
  total: Number
  condenados: Number
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}



const InputForm = ({ label, register, required }: InputProps) =>  (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

export default function FormAbate() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")
  const userId = userJson.id

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    axios.post("", data, userId)

  return (
    <StyledForm>
      <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <InputForm label="abate" register={register} required />
        <InputForm label="bois" register={register} required />
        <InputForm label="vacas" register={register} required />
        <InputForm label="total" register={register} required />
        <InputForm label="condenados" register={register} required />
        <input type="submit" />
      </StyledFormWrapper>
    </StyledForm>
  )
}

