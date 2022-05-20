import { ReactNode } from "react"
import NavbarHome from "../../components/navBar/Home"
import { Aside, CarouselDiv, Content, Div, Footer, Header } from "./style"

type layoutProps = {
  children: ReactNode
}

export default function HomeLayout({ children }: layoutProps) {
  return (
    <Div>   
      <Header>
        <NavbarHome/>
      </Header>
      <CarouselDiv>
        
      </CarouselDiv>
      <Aside>
      </Aside>
      <Content>{children}</Content>
      <Footer>
      </Footer>
    </Div>
  )
}