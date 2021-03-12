import { Container, FormContainer, FormLogoContainer, Form } from "./styles";
import headerLogo from "../../assets/mp_academy_logo.svg";
import Button from "../../components/Button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

export interface Credentials {
  email: string
  password: string
}

function Login() {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' })
  const history = useHistory()
  const {login, auth} = useAuth()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
   login(credentials)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement> ) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if(auth.loggedIn){
      history.push('/')
    }
  }, [auth.loggedIn, history])

  return (
    <Container>
      <FormContainer>
        <FormLogoContainer>
          <img src={headerLogo} alt='MP Academy' />
        </FormLogoContainer>
        <Form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email' >E-mail</label>
            <input id='email' type='email' name='email' placeholder='Informe seu Email' onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='password' >Senha</label>
            <input id='password' type='password' name='password' placeholder='Informe sua Senha' onChange={handleChange} />
          </div>
          <div className='button'>
            <Button type='submit' block variant='secondary' loading={auth.isLoading} >ACESSAR</Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login