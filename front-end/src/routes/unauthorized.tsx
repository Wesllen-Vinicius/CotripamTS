import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../AuthProvider/userAuth"

export const PrivateLayout = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.nivelAcesso) {
      navigate("/encarregado")
    }
  }, [user, navigate])
  return children
}
