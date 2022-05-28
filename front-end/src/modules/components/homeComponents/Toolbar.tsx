import { styled } from "@mui/material/styles"
import MuiToolbar from "@mui/material/Toolbar"

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  background: "#008000",
  height: 64,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}))

export default Toolbar
