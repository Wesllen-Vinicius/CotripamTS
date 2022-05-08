import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import { StyledForm, StyledFormWrapper, StyleEnvio } from "./style"


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

const InputForm = ({ label, register, required }: InputProps) => (
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
      <StyleEnvio>
        <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <InputForm label="abate" register={register} required />
          <InputForm label="bois" register={register} required />
          <InputForm label="vacas" register={register} required />
          <InputForm label="total" register={register} required />
          <InputForm label="condenados" register={register} required />
          <button type="submit" >
            Enviar
          </button>
        </StyledFormWrapper>
      </StyleEnvio>
    </StyledForm>
  )
}
