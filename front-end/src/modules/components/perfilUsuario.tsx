import withRoot from "../withRoot"
import {
  CardContent,
  CardHeader,
  TextField,
  Theme,
} from "@mui/material"
import { makeStyles, createStyles } from "@mui/styles"


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
    textAlign: "center",
    background: "rgb(34, 81, 130)",
    color: "#fff",
  },
  card: {
    marginTop: theme.spacing(10),
  },
})
)


 function CardPerfilUsuario() {
  
  const classes = useStyles()


  localStorage.getItem("@App:user")
  JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")

  return (
      <form className="card-3" noValidate autoComplete="off" >
        <CardHeader className={classes.header} title="Perfil Colaborador" />
        <CardContent 
        >
          <div>
            <TextField 
              fullWidth variant="filled" label="Nome" margin="normal" value="Francisco Brilhante" InputLabelProps={{ shrink: true }}
              />
            <TextField
              fullWidth variant="filled" label="Função" margin="normal" value="Encarregado de Setor" InputLabelProps={{ shrink: true }}
              />
            <TextField
              fullWidth variant="filled" label="Unidade" margin="normal" value="FRISACRE" InputLabelProps={{ shrink: true }}
              />
            <TextField
              fullWidth variant="filled" label="Media Serosa" margin="normal" value="95.00" InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth  variant="filled" label="Media Cozido" margin="normal" value="95.00" InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth variant="filled" label="Media Exportação" margin="normal" value="95.00" InputLabelProps={{ shrink: true }}
              />
          </div>
        </CardContent>
    </form>
  )
}

export default withRoot(CardPerfilUsuario)