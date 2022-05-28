import React, { ReactNode } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import AppBarEncarregado from "./AppBarEncarregado"
import withRoot from "../../withRoot"
import CardPerfilUsuario from "../../components/CardPerfilUsuario"
import { Box } from "@mui/material"
import HistoricoAbate from "../../components/Historico/abate"

type layoutProps = {
  children: ReactNode
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(1.5),
    width: "auto",
    height: '100vh',
  },
  card: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
  },
}))

function EncarregadoLayout({ children }: layoutProps) {
  const classes = useStyles()
  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <AppBarEncarregado />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box  boxShadow={3}>
            <CardPerfilUsuario />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box   boxShadow={3}>
            {children}
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box boxShadow={3}>
            <HistoricoAbate />
            </Box>       
        </Grid>
      </Grid>
    </Container>
  )
}
export default withRoot(EncarregadoLayout)
