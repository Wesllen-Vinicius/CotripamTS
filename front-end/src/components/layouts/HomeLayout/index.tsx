import { ReactNode } from "react"
import NavbarHome from "../../navBar/Home"

import { Aside, Carousel, Content, Div, Footer, Header } from "./style"

type layoutProps = {
  children: ReactNode
}

export default function HomeLayout({ children }: layoutProps) {
  return (
    <Div>   
      <Header>
        <NavbarHome/>
      </Header>
      <Carousel>
      </Carousel>
      <Aside>
      </Aside>
      <Content>{children}</Content>
      <Footer>
      </Footer>
    </Div>
  )
}