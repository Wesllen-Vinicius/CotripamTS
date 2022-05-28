import withRoot from "../../../modules/withRoot"
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Theme,
} from "@mui/material"
import { makeStyles, createStyles } from "@mui/styles"
import Layout from "../../../modules/layouts/EncarregadoLayout/index"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexWrap: "wrap",
      width: "auto",
      color: "#fff",
    },
    header: {
      height: 60,
      width: "auto",
      textAlign: "center",
      background: "rgb(34, 81, 130)",
      color: "#fff",
      margin: 0,
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
)

function Abates() {
  const classes = useStyles()
  return (
    <Layout>
      <form className={classes.container} noValidate autoComplete="off">
        <CardHeader className={classes.header} title="Abates Diarios" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              type="number"
              label="Abate"
              placeholder="Abate"
              margin="normal"
            />
            <TextField
              fullWidth
              type="number"
              label="Bois"
              placeholder="Bois"
              margin="normal"
            />
            <TextField
              fullWidth
              type="number"
              label="Condenados"
              placeholder="Condenados"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="secondary">
            Enviar
          </Button>
        </CardActions>
      </form>
    </Layout>
  )
}

export default withRoot(Abates)
