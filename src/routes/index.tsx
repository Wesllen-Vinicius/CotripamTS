import { Route, Routes } from "react-router-dom"
import NavbarEnc from "../components/navBar/navbarEnc"
import NotFoundPage from "../pages/404/NotFoundPage"
import Relatorios from "../pages/Admin/relatorios"
import Dashboard from "../pages/Dashboard"
import Encarregados from "../pages/Encarregado"
import Home from "../pages/Home"
import Login from "../pages/Login"
import TripaCozida from "../pages/TripaCozida"
import { ProtectedLayout } from "./private"
import { PrivateLayout } from "./unauthorized"

const Rotas: React.FC = () => {
  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateLayout>
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          </PrivateLayout>
        }
      />
      <Route
        path="/relatorio"
        element={
          <PrivateLayout>
            <ProtectedLayout>
              <Relatorios />
            </ProtectedLayout>
          </PrivateLayout>
        }
      />
      <Route
        path="/encarregado"
        element={

          <Encarregados />

        }
      />
      <Route
        path="/abate"
        element={

          <Encarregados />

        }
      />
      <Route
        path="/tripaCozida"
        element={

          <TripaCozida />

        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}
export default Rotas
