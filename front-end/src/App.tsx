import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { AuthProvider } from "./AuthProvider/userAuth"

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
