import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
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

const StyledFormWrapper = styled.form`
  display: flex;
  padding: 0 20px;
  padding-top: 10px;
  flex-direction: column;
`

const StyledForm = styled.div`
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

interface IFormValues {
  abate: Number;
  bois: Number;
  vacas: Number;
  total: Number;
  condenados: Number;
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)



export default function FormAbate() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem('@App:user');
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || '{}');
  window.localStorage.getItem("@App:user")
  const userId = userJson.id
  async function getIdUser() {

  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => 
    axios.post("http://localhost:4500/abates/cadastro", (data), userId)

    
  
  return (
      <StyledForm>
    <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input label="abate" register={register} required />
      <Input label="bois" register={register} required />
      <Input label="vacas" register={register} required />
      <Input label="total" register={register} required />
      <Input label="condenados" register={register} required />
      <input type="submit" />
      <StyledButton onClick={getIdUser}/>
    </StyledFormWrapper>
      </StyledForm>
  )
}
