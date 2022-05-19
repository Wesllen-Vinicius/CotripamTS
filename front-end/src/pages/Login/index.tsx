import { useState, useContext } from "react"
import AuthContext from "../../AuthProvider/userAuth"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


export default function Login() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function SignIn() {
    await signIn({ email, password })
  }

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      </CardContent>
      <CardActions>
      <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>


      {/* <CardWrapper>
        <CardHeader>
          <CardHeading>Acesso Restrito</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              required
            />
            <CardIcon className="fa fa-eye" />
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>
              Entre com suas Credenciais de acesso
            </CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google" />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-twitter" />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook" />
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton onClick={SignIn} type="button">
              Logar
            </CardButton>
          </CardFieldset>

          <CardFieldset></CardFieldset>
        </CardBody>
      </CardWrapper> */}
    </>
  )
}
