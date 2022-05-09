import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import CardGlobalComponent from "../../GlobalComponents/cardGlobalComponent/CardGlobal"
import FormGlobalComponent from "../../GlobalComponents/formGlobalComponent/formGlobalComponent"

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

const Input = ({ label, register, required }: InputProps) => (
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
    <CardGlobalComponent>
      <FormGlobalComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Formulario Abate</h1>
          <Input label="abate" register={register} required />
          <Input label="bois" register={register} required />
          <Input label="vacas" register={register} required />
          <Input label="total" register={register} required />
          <Input label="condenados" register={register} required />
          <button type="submit">Enviar</button>
        </form>
      </FormGlobalComponent>
    </CardGlobalComponent>
  )
}
