
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404/404";
import Relatorios from "../pages/Admin/relatorios";
import Dashboard from "../pages/Dashboard";
import Encarregados from "../pages/Encarregado";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { ProtectedLayout } from "./private";
import { PrivateLayout } from "./unauthorized";

const Rotas: React.FC = () => {
  return(
    <Routes>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<PrivateLayout><ProtectedLayout><Dashboard/></ProtectedLayout></PrivateLayout>}/>
        <Route path="/relatorio" element={<PrivateLayout><ProtectedLayout><Relatorios/></ProtectedLayout></PrivateLayout>}/>
        <Route path="/encarregado" element={<ProtectedLayout><Encarregados/></ProtectedLayout>}/>
        <Route path="/abate" element={<ProtectedLayout><Encarregados/></ProtectedLayout>}/>
        <Route path="/tripaCozida" element={<ProtectedLayout><Encarregados/></ProtectedLayout>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
  )
};
export default Rotas
