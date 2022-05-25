import axios from "axios"
import { Path, SubmitHandler, useForm, UseFormRegister } from "react-hook-form"
import CardGlobalComponent from "../../../modules/components/GlobalComponents/cardGlobalComponent/CardGlobal"
import FormGlobalComponent from "../../../modules/components/GlobalComponents/formGlobalComponent/formGlobalComponent"
import AdmLayout from "../../../modules/layouts/AdmLayout"

interface IFormValues {
  Nome: String
  MetaTripaCozida: Number
  MetaSerosa: number
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

export default function Unidades() {
  const { register, handleSubmit } = useForm<IFormValues>()

  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")
  const userId = userJson.id

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    axios.post("", data, userId)

  return (
    <AdmLayout>
      <CardGlobalComponent>
        <FormGlobalComponent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastro de Frigorificos</h1>
            <Input label="Nome" register={register} required />
            <Input label="MetaTripaCozida" register={register} required />
            <Input label="MetaSerosa" register={register} required />
            <button type="submit">Cadastrar</button>
          </form>
        </FormGlobalComponent>
      </CardGlobalComponent>
    </AdmLayout>
  )
}
