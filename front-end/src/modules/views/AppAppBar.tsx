import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import AppBar from "../components/AppBar"
import Toolbar from "../components/Toolbar"

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
}

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
          >
            {"COTRIPAM"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="login"
              sx={rightLink}
            >
              {"Acesso Restrito"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default AppAppBar
