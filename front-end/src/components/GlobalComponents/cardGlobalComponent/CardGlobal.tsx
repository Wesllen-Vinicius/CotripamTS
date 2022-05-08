import { ReactNode } from "react";
import { CardComponent } from "./style";

type CardProps = {
  children: ReactNode
}

export default function CardGlobalComponent({ children }: CardProps) {
 return <CardComponent>{children}</CardComponent> 
}
