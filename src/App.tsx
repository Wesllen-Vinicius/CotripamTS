import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { AuthProvider } from "./AuthProvider/userAuth"
import NavbarEnc from "./components/navBar/navbarEnc"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Rotas />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
