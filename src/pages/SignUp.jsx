import React, { useRef, useState } from 'react'

import { useAuth } from '../contexts/AuthContext'

import './SignUp.css'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('As senhas não conferem') // Passwords do not match
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Falhou em criar uma conta') // Failed to create an account
        }

        setLoading(false)
    }
    return(
        //console.log(JSON.stringify(currentUser))
        <div>
            <h2>Cadastro de Usuário</h2>
            {error && <div className="statusMessage">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" ref={passwordRef} required />

                <label htmlFor="password-confirm">Repita a Senha</label>
                <input type="password" id="password-confirm" ref={passwordConfirmRef} required />

                <input disabled ={loading} type="submit" value="Cadastrar"/>
            </form>
            <div>
                Já tem uma conta? Entrar {/* Already have an account? Log In */}
            </div>
        </div>
    )
}