import { Route, Routes } from "react-router-dom"
import NotFoundPage from "../pages/404/NotFoundPage"
import Relatorios from "../pages/Admin/relatorios"
import Dashboard from "../pages/Dashboard"
import Abates from "../pages/Encarregado/Abate"
import Encarregados from "../pages/Encarregado/Abate"
import Produtos from "../pages/Encarregado/Produtos"
import TripaCozida from "../pages/Encarregado/TripaCozida"
import Home from "../pages/Home"
import Login from "../pages/Login"
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
      <Route path="/encarregado" element={<Encarregados />} />
      <Route
        path="/abate"
        element={
          <ProtectedLayout>
            <Abates />
          </ProtectedLayout>
        }
      />
      <Route
        path="/tripaCozida"
        element={
          <ProtectedLayout>
            <TripaCozida />
          </ProtectedLayout>
        }
      />
      <Route
        path="/produto"
        element={
          <ProtectedLayout>
            <Produtos />
          </ProtectedLayout>
        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}
export default Rotas
