import { useState, useContext } from "react"
import AuthContext from "../../AuthProvider/userAuth"
import {
  CardBody,
  CardButton,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardIcon,
  CardInput,
  CardOptions,
  CardOptionsItem,
  CardOptionsNote,
  CardWrapper,
} from "./style"

export default function Login() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function SignIn() {
    await signIn({ email, password })
  }

  return (
    <>
      <CardWrapper>
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
      </CardWrapper>
    </>
  )
}
