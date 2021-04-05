import React, { useRef, useState } from 'react'

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

export default function ForgotPassword() {
    const classes = useStyles()

    const emailRef:any = useRef()

    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e :any) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Verifique a sua Caixa de Entrada para mais instruções') // Check your inbox for further instructions
        } catch {
            setError('Falha em redefinir a senha')
            console.warn('Failed to Reset Password')
        }

        setLoading(false)
    }

    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            {error && <div className="statusMessage">{error}</div>}
            {message && <div className="success">{message}</div>}

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Redefinição de Senha
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
                    <Button
                        disabled ={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                    >
                        Redefinir senha
                    </Button>
                </form>
                <div>
                    <Link href="/login">Entrar</Link>
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