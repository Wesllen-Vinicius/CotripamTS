import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import CardGlobalComponent from "../../GlobalComponents/cardGlobalComponent/CardGlobal"
import FormGlobalComponent from "../../GlobalComponents/formGlobalComponent/formGlobalComponent"

interface IFormValues {
  sal_fino: Number
  sal_grosso: Number
  metabissulfito: Number
  peroxido: Number
  bombonas: Number
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

export default function FormProduto() {
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
          <Input label="sal_fino" register={register} required />
          <Input label="sal_grosso" register={register} required />
          <Input label="metabissulfito" register={register} required />
          <Input label="peroxido" register={register} required />
          <Input label="bombonas" register={register} required />
        <button type="submit" > Enviar </button>
        </form>
      </FormGlobalComponent>
    </CardGlobalComponent>
  )
}
