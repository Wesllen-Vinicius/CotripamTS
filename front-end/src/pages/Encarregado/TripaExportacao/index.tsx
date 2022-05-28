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
import CardGlobalComponent from "../../../modules/components/GlobalComponents/cardGlobalComponent/CardGlobal"

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

 function TripaExportacao() {
  const classes = useStyles()
  return (
    <Layout>
      <form  className={classes.container} noValidate autoComplete="off">
        <CardHeader className={classes.header} title="Tripa Exportação" />
        <CardContent>
          <div>
          <TextField
              fullWidth
              type="number"
              label="Tripa Reta"
              placeholder="Tripa Reta"
              margin="normal"
              />
            <TextField
              fullWidth
              type="number"
              label="Tripa Torta 1 Corte"
              placeholder="Tripa Torta 1 Corte"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Tripa Torta 2 Corte"
              placeholder="Tripa Torta 2 Corte"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Culatra"
              placeholder="Culatra"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Fundo"
              placeholder="Fundo"
              margin="normal"
              />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            >
            Enviar
          </Button>
        </CardActions>
    </form>
    </Layout>
  )
}

export default withRoot(TripaExportacao)