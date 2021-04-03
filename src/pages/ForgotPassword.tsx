import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import './SignUp.css'

export default function ForgotPassword() {
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
        <div>
            <h2>Redefinição de Senha</h2>
            {error && <div className="statusMessage">{error}</div>}
            {message && <div className="success">{message}</div>}

            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailRef} required />

                    <input disabled ={loading} type="submit" value="Redefinir senha"/>
                </form>
                <div>
                    <Link to="/login">Entrar</Link>
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