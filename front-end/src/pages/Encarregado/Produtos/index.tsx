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

 function Produtos() {
  const classes = useStyles()
  return (
    <Layout>
      <CardGlobalComponent>
      <form  className={classes.container} noValidate autoComplete="off">
        <CardHeader className={classes.header} title="Insumos" />
        <CardContent>
          <div>
          <TextField
              fullWidth
              type="number"
              label="Sal Fino"
              placeholder="Sal Fino"
              margin="normal"
              />
            <TextField
              fullWidth
              type="number"
              label="Sal Grosso"
              placeholder="Sal Grosso"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Metabissulfito"
              placeholder="Condenados"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Peroxido"
              placeholder="Peroxido"
              margin="normal"
              />
              <TextField
              fullWidth
              type="number"
              label="Bombonas"
              placeholder="Bombonas"
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

export default withRoot(Produtos)