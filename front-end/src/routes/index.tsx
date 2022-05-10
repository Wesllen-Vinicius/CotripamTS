import { Route, Routes } from "react-router-dom"
import NotFoundPage from "../pages/404/NotFoundPage"
import Colaboradores from "../pages/Administracao/Colaboradores"
import Relatorios from "../pages/Administracao/Relatorios"
import Dashboard from "../pages/Administracao/Relatorios"
import Unidades from "../pages/Administracao/Unidades"
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
        path="/unidades"
        element={
          <PrivateLayout>
            <ProtectedLayout>
              <Unidades />
            </ProtectedLayout>
          </PrivateLayout>
        }
      />
      <Route
        path="/colaboradores"
        element={
          <PrivateLayout>
            <ProtectedLayout>
              <Colaboradores />
            </ProtectedLayout>
          </PrivateLayout>
        }
      />
      <Route
        path="/Relatorios"
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
