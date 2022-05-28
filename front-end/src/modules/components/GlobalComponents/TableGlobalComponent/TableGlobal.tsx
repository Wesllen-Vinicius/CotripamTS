import { ReactNode } from "react"
import { StyledTable } from "./style"

type CardProps = {
  children: ReactNode
}

export default function TableGlobalComponent({ children }: CardProps) {
  return <StyledTable>{children}</StyledTable>
}
