import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import CardGlobalComponent from "../../GlobalComponents/cardGlobalComponent/CardGlobal"
import FormGlobalComponent from "../../GlobalComponents/formGlobalComponent/formGlobalComponent"

interface IFormValues {
  corte_630: Number
  corte_470: Number
  corte_320: Number
  corte_170: Number
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

  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")
  const userId = userJson.id

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    axios.post("http://localhost:4500/abates/cadastro", data, userId)

  return (
    <CardGlobalComponent>
      <FormGlobalComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Formulario Produtos</h1>
          <Input label="corte_630" register={register} required />
          <Input label="corte_470" register={register} required />
          <Input label="corte_320" register={register} required />
          <Input label="corte_170" register={register} required />
          <button type="submit">Enviar</button>
        </form>
      </FormGlobalComponent>
    </CardGlobalComponent>
  )
}
