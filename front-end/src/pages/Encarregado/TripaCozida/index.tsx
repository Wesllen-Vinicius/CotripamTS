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

 function TripaCozida() {
  const classes = useStyles()
  return (
    <Layout>
      <CardGlobalComponent>
      <form  className={classes.container} noValidate autoComplete="off">
        <CardHeader className={classes.header} title="Tripa Cozida" />
        <CardContent>
          <div>
          <TextField
              fullWidth
              type="number"
              label="Mocoto"
              placeholder="Mocoto"
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
              label="Abomaso"
              placeholder="Abomaso"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Fundo"
              placeholder="Fundo"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Tripa Grossa"
              placeholder="Tripa Grossa"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Tripa Fina"
              placeholder="Tripa Fina"
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
            </CardGlobalComponent>
    </Layout>
  )
}

export default withRoot(TripaCozida)