import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from '../components/Theme'


export default function SignUp() {
    const classes = useStyles();

    const emailRef:any = useRef()
    const passwordRef:any = useRef()
    const passwordConfirmRef:any = useRef()

    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e :any) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.warn('Passwords do not match')
            return setError('As senhas não conferem') // Passwords do not match
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Falhou em criar uma conta') // Failed to create an account
        }

        setLoading(false)
    }

    return(
        //console.log(JSON.stringify(currentUser))
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {error && <div className="statusMessage">{error}</div>}

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Cadastro de Usuário {/* Sign up */}
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} /*noValidate*/ >
                    <TextField
                        inputRef={emailRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        inputRef={passwordRef}
                        inputProps={{ minLength: 6 }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        inputRef={passwordConfirmRef}
                        inputProps={{ minLength: 6 }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Confirmação da Senha"
                        type="password"
                        id="password-confirm"
                        autoComplete="current-password"
                    />
                    <Button
                        disabled ={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                    >
                        Cadastrar
                    </Button>
                </form>
                <div>
                    {/* Already have an account? Log In */}
                    Já tem uma conta?&nbsp;
                    <Link href="/login">Entrar</Link> 
                </div>
            </div>
        </Container>
    )
}