import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from '../components/Theme';

import { useAuth } from '../contexts/AuthContext'

export default function Login() {
    const classes = useStyles();

    const emailRef:any = useRef()
    const passwordRef:any = useRef()

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e :any) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/") // go to Dashboard page
        } catch {
            setError('Falhou em Entrar')
            console.warn('Failed to Log In')
        }

        setLoading(false)
    }

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {error && <div className="statusMessage">{error}</div>}

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login{/* Sign in */}
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

                    <Button
                        disabled ={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                    >
                        Entrar
                    </Button>
                </form>
                <div>
                    <Link href="/forgot-password">Esqueceu sua senha?</Link>
                    <div>
                        {/* Do you need an account? Log In */}
                        Precisa de uma conta?&nbsp;
                        <Link href="/signup">Cadastrar</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}