import { ReactNode } from "react"
import CardGlobalComponent from "../../GlobalComponents/cardGlobalComponent/CardGlobal"
import NavbarHome from "../../navBar/Home"
import { Accordion } from "../../navBar/Home/accordion"
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
          <Accordion title={1} content={2}/>
          <Accordion title={3} content={4}/>
        </CardGlobalComponent>
      </Aside>
      <Content>{children}</Content>
      <Footer>
      </Footer>
    </Div>
  )
}
