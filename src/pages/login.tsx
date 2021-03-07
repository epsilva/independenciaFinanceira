import React, { useState } from 'react'
import { Container } from '../styles/pages/Login'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import Mail from '@material-ui/icons/Mail'
import Lock from '@material-ui/icons/Lock'
import Google from '../assets/Google.svg'
import Facebook from '../assets/Facebook.svg'
import { useAuth } from '../../lib/auth'
import CircularProgress from '@material-ui/core/CircularProgress'
import { toast } from 'react-toastify'

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    errors,
    getValues,
    control
  } = useForm()
  const {
    signInWithEmailPassword,
    createWithEmailAndPassword,
    loading
  } = useAuth()
  const [createUser, setCreateUser] = useState(false)

  const onSubmit = data => {
    if (createUser) {
      if (data.senha === data.senhaRepetida) {
        createWithEmailAndPassword(data.email, data.senha)
      } else {
        toast.error('Senha inválida!')
      }
    } else {
      signInWithEmailPassword(data.email, data.senha)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div style={{ width: '70%' }}></div>
        <div className="card-login" style={{ width: '30%' }}>
          <Controller
            name="email"
            control={control}
            render={() => (
              <TextField
                error={errors.email !== undefined}
                id="standard-basic"
                size="small"
                fullWidth
                label="E-mail"
                placeholder="E-mail"
                inputRef={register({
                  required: 'Campo obrigatório'
                })}
                InputProps={{
                  name: 'email',
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          <br />
          <Controller
            name="senha"
            control={control}
            render={() => (
              <TextField
                error={errors.senha !== undefined}
                id="standard-basic"
                size="small"
                fullWidth
                type="password"
                label="Senha"
                placeholder="Senha"
                inputRef={register({
                  required: 'Campo obrigatório'
                })}
                InputProps={{
                  name: 'senha',
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          {createUser && (
            <>
              <br />
              <Controller
                name="senhaRepetida"
                control={control}
                render={() => (
                  <TextField
                    error={errors.senhaRepetida !== undefined}
                    id="standard-basic"
                    size="small"
                    fullWidth
                    type="password"
                    label="Confirme a senha"
                    placeholder="Confirme a senha"
                    inputRef={register({
                      required: 'Campo obrigatório'
                    })}
                    InputProps={{
                      name: 'senhaRepetida',
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </>
          )}
          <br />
          <div className="cotainer-button">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: '8px' }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={25} />
              ) : !createUser ? (
                'Entrar'
              ) : (
                'Cadastrar'
              )}
            </Button>
            {!createUser && (
              <>
                <br />
                <Button
                  variant="contained"
                  style={{ marginRight: '8px' }}
                  className="social-login-button"
                  disabled={loading}
                >
                  <Google className="google" />
                </Button>
                <br />
                <Button
                  variant="contained"
                  style={{ marginRight: '8px' }}
                  className="social-login-button"
                  disabled={loading}
                >
                  <Facebook className="facebook" />
                </Button>
              </>
            )}
            <br />
            <Button
              type="button"
              style={{ marginRight: '8px' }}
              disabled={loading}
              onClick={() => setCreateUser(!createUser)}
            >
              {!createUser ? (
                <span>Ainda não tem cadastro? Click aqui!</span>
              ) : (
                <span>Já tenho uma conta!</span>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </form>
  )
}

export default Login
