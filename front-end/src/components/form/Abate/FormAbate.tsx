import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import styled from "styled-components"
import { StyledForm, StyledFormWrapper } from "./style"

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

styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color 0.25s ease-in;
`

export default function FormAbate() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")
  const userId = userJson.id

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    axios.post("http://localhost:4500/abates/cadastro", data, userId)

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

