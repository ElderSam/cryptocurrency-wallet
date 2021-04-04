import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import './index.css'

export default function Login() {
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
        <div>
            <h2>Log In</h2>
            {error && <div className="statusMessage">{error}</div>}

            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailRef} required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" ref={passwordRef} required minLength={6} />

                    <input disabled ={loading} type="submit" value="Entrar"/>
                </form>
                <div>
                    <Link to="/forgot-password">Esqueceu sua senha?</Link>
                </div>
            </div>

            <div>
                {/* Do you need an account? Log In */}
                Precisa de uma conta?&nbsp;
                <Link to="/signup">Cadastrar</Link>
            </div>
        </div>
    )
}