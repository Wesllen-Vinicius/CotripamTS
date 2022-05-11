import { ReactNode } from "react"
import CardGlobalComponent from "../../GlobalComponents/cardGlobalComponent/CardGlobal"
import NavbarHome from "../../navBar/Home"
import { Aside, Content, Div, Footer, Header } from "./style"

type layoutProps = {
  children: ReactNode
}

export default function HomeLayout({ children }: layoutProps) {
  return (
    <Div>
      <Header>
        <NavbarHome/>
      </Header>
      <Aside>
        <CardGlobalComponent>

        </CardGlobalComponent>
      </Aside>
      <Content>{children}</Content>
      <Footer>

      </Footer>
    </Div>
  )
}
