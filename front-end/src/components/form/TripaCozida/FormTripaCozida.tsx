import axios from "axios"
import { useForm, SubmitHandler, UseFormRegister, Path } from "react-hook-form"
import CardGlobalComponent from "../../GlobalComponents/CardGlobalComponent/CardGlobal"
import FormGlobalComponent from "../../GlobalComponents/FormGlobalComponent/formGlobalComponent"

interface IFormValues {
  mocoto: Number
  culatra: Number
  abomaso: Number
  fundo: Number
  tripa_grossa: Number
  tripa_fina: Number
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

export default function FormTripaCozida() {
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
          <Input label="mocoto" register={register} required />
          <Input label="culatra" register={register} required />
          <Input label="abomaso" register={register} required />
          <Input label="fundo" register={register} required />
          <Input label="tripa_grossa" register={register} required />
          <Input label="tripa_fina" register={register} required />
          <button type="submit">Enviar</button>
        </form>
      </FormGlobalComponent>
    </CardGlobalComponent>
  )
}
