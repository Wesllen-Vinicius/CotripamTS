import withRoot from "../../../modules/withRoot"
import { useReducer } from "react"
import {
  Button,
  Card,
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
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `${theme.spacing(0)} auto`,
      color: "#fff",
    },
    header: {
      height: 60,
      width: 400,
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
      <CardGlobalComponent>
      <form className={classes.container} noValidate autoComplete="off">
        <CardHeader className={classes.header} title="COTRIPAM" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="email"
              type="email"
              label="E-mail"
              placeholder="E-email"
              margin="normal"
              />
              <TextField 
              fullWidth variant="filled" label="Nome" margin="normal"
              />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
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

export default withRoot(Abates)