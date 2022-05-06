import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import "./style"

interface IFormValues {

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

export default function FormSerosa() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem('@App:user');
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || '{}');
  window.localStorage.getItem("@App:user")
  const userId = userJson.id
  
  const onSubmit: SubmitHandler<IFormValues> = (data) => 
    axios.post("http://localhost:4500/abates/cadastro", (data), userId)

  
  return (
      <StyledForm>
    <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input label="" register={register} required />  
      <Input label="" register={register} required />
      <Input label="" register={register} required />
      <Input label="" register={register} required />
      <Input label="" register={register} required />
      <input type="submit" />
    </StyledFormWrapper>
      </StyledForm>
  )
}