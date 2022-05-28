import { AppBar, Button, Toolbar } from "@mui/material"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { useContext } from "react"
import AuthContext from "../../../AuthProvider/userAuth"

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
}

function AppBarAdm() {
  const { Logout } = useContext(AuthContext)

  function handleLogout() {
    Logout()
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="white"
            sx={{ fontSize: 30 }}
          >
            {"COTRIPAM"}
          </Link>
          <Box>
            <Link
              color="inherit"
              variant="h2"
              underline="none"
              href="colaboradores"
              sx={rightLink}
            >
              {"Colaboradores"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="relatorios"
              sx={rightLink}
            >
              {"Relatorios"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="unidades"
              sx={rightLink}
            >
              {"Cadastro de Unidades"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="produto"
              sx={rightLink}
            >
              {"Produtos"}
            </Link>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              {"Sair do Sistema"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default AppBarAdm
