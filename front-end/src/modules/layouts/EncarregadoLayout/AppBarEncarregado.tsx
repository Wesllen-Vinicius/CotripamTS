import { AppBar, Toolbar } from "@mui/material"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
}

function AppBarEncarregado() {
  return (
    <div>
      <AppBar  position="fixed" >
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
              variant="h6"
              underline="none"
              href="abate"
              sx={rightLink}
            >
              {"Abates"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="tripaCozida"
              sx={rightLink}
            >
              {"Tripa Cozida"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="tripaExportacao"
              sx={rightLink}
            >
              {"Tripa Exportação"}
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
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href=""
              sx={rightLink}
            >
              {"Sair do Sistema"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default AppBarEncarregado
