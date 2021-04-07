import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from '../components/Theme'
import CustomizedSnackbar from '../components/material-ui/CustomizedSnackbar';

export default function UpdateProfile() {
    const classes = useStyles();

    const emailRef:any = useRef()
    const passwordRef:any = useRef()
    const passwordConfirmRef:any = useRef()

    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [updated, setUpdated] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e :any) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.warn('Passwords do not match')
            return setError('As senhas não conferem') // Passwords do not match
        }

        const promises = [];
        setLoading(true)
        setError("")

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                setUpdated(true)
                setTimeout(() => history.push('/'), 2500) // redirects to home page after a while
            })
            .catch((err) => {
                console.warn(err)
                setError(`Falha em atualizar conta: ${err.message}`) // Failed to update account
            })
            .finally(() => {
                console.log('Data updated')
                setLoading(false)
            })
    }

    return(
        //console.log(JSON.stringify(currentUser))
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {error &&
                <CustomizedSnackbar
                    type="error"
                    message={error}
                />
            }

            {updated &&
                <CustomizedSnackbar
                    type="success"
                    message="Perfil atualizado com sucesso!"
                />
            }

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Atualizar Perfil
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} /*noValidate*/ >
                    <TextField
                        inputRef={emailRef}
                        defaultValue={currentUser.email}
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
                        placeholder="Deixe em branco para não mudar" // Leave blank to keep the same
                        inputProps={{ minLength: 6 }}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        inputRef={passwordConfirmRef}
                        placeholder="Deixe em branco para não mudar" // Leave blank to keep the same
                        inputProps={{ minLength: 6 }}
                        variant="outlined"
                        margin="normal"
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
                        Atualizar
                    </Button>
                </form>
                <div>
                    <Link href="/">Cancelar</Link> 
                </div>
            </div>
        </Container>
    )
}