import { ReactNode } from "react"
import CardPerfilUsuario from "../../components/perfilUsuario"
import HistoricoAbate from "../../components/Historico/abate"
import AppBarEncarregado from "./AppBarEncarregado"
import { createStyles, makeStyles } from "@mui/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { Theme } from "@mui/material/styles"
type layoutProps = {
  children: ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: "auto",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
)

export default function EncarregadoLayout({ children }: layoutProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <AppBarEncarregado />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <CardPerfilUsuario />
          </Paper>
        </Grid>
        <Grid item xs>
          
            {children}
          
        </Grid>
        <Grid item xs>

            <HistoricoAbate />
          
        </Grid>
      </Grid>
    </div>
  )
}
