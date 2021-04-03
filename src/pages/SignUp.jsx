import React, { useRef } from 'react';
import './SignUp.css';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return(
        <div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={() => alert('submited')}>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" ref={passwordRef} required />

                <label htmlFor="password-confirm">Repita a Senha</label>
                <input type="password" id="password-confirm" ref={passwordConfirmRef} required />

                <input type="submit" value="Cadastrar"/>
            </form>
            <div>
                Already have an account? Log In
            </div>
        </div>
    )
}