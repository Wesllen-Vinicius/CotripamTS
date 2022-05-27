import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Theme,
} from "@mui/material"
import React, { useReducer, useEffect, useContext, useState } from "react"
import { makeStyles, createStyles } from "@mui/styles"
import AuthContext from "../../AuthProvider/userAuth"
import withRoot from "../../modules/withRoot"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
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

function Login() {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      })
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      })
    }
  }, [state.email, state.password])

  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignIn = async () => {
    await signIn({ email, password })
    if (email === "" && password === "") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      })
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect email or password",
      })
    }
  }

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    })
  }

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    })
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || SignIn()
    }
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="COTRIPAM" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="E-mail"
              placeholder="E-email"
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={SignIn}
            disabled={state.isButtonDisabled}
          >
            Logar
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

export default withRoot(Login)
