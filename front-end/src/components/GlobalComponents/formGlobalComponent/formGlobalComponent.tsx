import { ReactNode } from "react"
import { FormComponent } from "./style"

type CardProps = {
  children: ReactNode
}

export default function FormGlobalComponent({ children }: CardProps) {
  return <FormComponent>{children}</FormComponent>
}
