import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import React, { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: "#f1f3f5",
  color: "black",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  },
})

type SignInData = {
  email: string
  password: string
}
type User = {
  email: string
  password: string
  nivelAcesso: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  signIn: ({ email, password }: SignInData) => Promise<void>
  Logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem("@App:user")
      const storagedToken = await localStorage.getItem("@App:token")

      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser))
      }
    }
    loadStoragedData()
  }, [])
  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post("/users/login", {
        email: email,
        password: password,
      })

      setUser(response.data.user)

      localStorage.setItem("@App:user", JSON.stringify(response.data.user))
      localStorage.setItem("@App:token", response.data.tokenUser)

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`

      Toast.fire({
        icon: "success",
        title: `Bem-Vindo ${response.data.user.email} !!`,
      })
      navigate("/Dashboard")
    } catch (error: any) {
      const message = error.response.data.message
      Toast.fire({
        icon: "error",
        title: message,
      })
    }
  }

  function Logout() {
    localStorage.clear()
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
