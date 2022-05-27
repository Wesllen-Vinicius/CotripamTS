import withRoot from "../../withRoot"
import { useReducer } from "react"
import {
  CardContent,
  CardHeader,
  TextField,
  Theme,
} from "@mui/material"
import { makeStyles, createStyles } from "@mui/styles"
import CardGlobalComponent from "../GlobalComponents/cardGlobalComponent/CardGlobal"


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

type State = {
email: string
password: string
isButtonDisabled: boolean
helperText: string
isError: boolean
}

const initialState: State = {
email: "",
password: "",
isButtonDisabled: true,
helperText: "",
isError: false,
}

type Action =
| { type: "setEmail"; payload: string }
| { type: "setPassword"; payload: string }
| { type: "setIsButtonDisabled"; payload: boolean }
| { type: "loginSuccess"; payload: string }
| { type: "loginFailed"; payload: string }
| { type: "setIsError"; payload: boolean }

const reducer = (state: State, action: Action): State => {
switch (action.type) {
  case "setEmail":
    return {
      ...state,
      email: action.payload,
    }
  case "setPassword":
    return {
      ...state,
      password: action.payload,
    }
  case "setIsButtonDisabled":
    return {
      ...state,
      isButtonDisabled: action.payload,
    }
  case "loginSuccess":
    return {
      ...state,
      helperText: action.payload,
      isError: false,
    }
  case "loginFailed":
    return {
      ...state,
      helperText: action.payload,
      isError: true,
    }
  case "setIsError":
    return {
      ...state,
      isError: action.payload,
    }
}
}

 function CardPerfilUsuario() {
  
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)


  localStorage.getItem("@App:user")
  const userJson = JSON.parse(window.localStorage.getItem("@App:user") || "{}")
  window.localStorage.getItem("@App:user")

  return (
    <CardGlobalComponent >
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
    </CardGlobalComponent>
  )
}

export default withRoot(CardPerfilUsuario)