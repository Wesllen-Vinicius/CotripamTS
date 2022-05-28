import axios from "axios"
import { useForm } from "react-hook-form"
import { SubmitHandler, UseFormRegister } from "react-hook-form/dist/types/form"
import { Path } from "react-hook-form/dist/types/path/eager"
import AdmLayout from "../../../modules/layouts/AdmLayout"

interface IFormValues {
  Nome: String
  Email: String
  PassWord: String
  NivelAcesso: Boolean
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

export default function Colaboradores() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")
  const userId = userJson.id

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    axios.post("", data, userId)

  return (
    <AdmLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro de Colaboradores</h1>
        <Input label="Nome" register={register} required />
        <Input label="Email" register={register} required />
        <Input label="PassWord" register={register} required />
        <Input label="NivelAcesso" register={register} required />
        <button type="submit">Cadastrar</button>
      </form>
    </AdmLayout>
  )
}
