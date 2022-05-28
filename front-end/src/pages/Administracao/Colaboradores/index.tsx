import withRoot from "../../../modules/withRoot"
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Theme,
} from "@mui/material"
import { makeStyles, createStyles } from "@mui/styles"
import AdmLayout from "../../../modules/layouts/AdmLayout"
import { Select } from "@material-ui/core"
import React from "react"

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

function Colaboradores() {
  const classes = useStyles()

  return (
    <AdmLayout>
      <form className={classes.container} noValidate autoComplete="off">
        <CardHeader
          className={classes.header}
          title="Cadastro de Colaborador"
        />
        <CardContent>
          <div>
            <TextField
              fullWidth
              type="text"
              label="Nome do Colaborador"
              placeholder="Nome do Colaborador"
              margin="normal"
            />
            <TextField
              fullWidth
              type="Email"
              label="Email"
              placeholder="Email"
              margin="normal"
            />
            <TextField
              fullWidth
              type="PassWord"
              label="Senha"
              placeholder="Senha"
              margin="normal"
            />
            <TextField
              fullWidth
              type="Text"
              label="Função"
              placeholder="Função"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="secondary">
            Cadastrar
          </Button>
        </CardActions>
      </form>
    </AdmLayout>
  )
}

export default withRoot(Colaboradores)
