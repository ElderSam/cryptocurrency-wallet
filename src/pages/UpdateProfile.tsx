import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'

import './index.css'

export default function UpdateProfile() {
    const emailRef:any = useRef()
    const passwordRef:any = useRef()
    const passwordConfirmRef:any = useRef()

    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
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
                history.push('/')
            })
            .catch((err) => {
                console.warn(err)
                setError(`Falha em atualizar conta: ${err.message}`) // Failed to update account
            })
            .finally(() => {
                console.log('Data updated')
                alert('Dados atualizados com sucesso!')
                setLoading(false)
            })
    }

    return(
        //console.log(JSON.stringify(currentUser))
        <div>
            <h2>Atualizar Perfil</h2>
            {error && <div className="statusMessage">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    ref={passwordRef} 
                    placeholder="Deixe em branco para não mudar"
                    minLength={6}
                /> {/* Leave blank to keep the same */}

                <label htmlFor="password-confirm">Repita a Senha</label>
                <input
                    type="password"
                    id="password-confirm"
                    ref={passwordConfirmRef}
                    placeholder="Deixe em branco para não mudar"
                    minLength={6}
                /> {/* Leave blank to keep the same */}

                <input disabled ={loading} type="submit" value="Atualizar"/>
            </form>
            <div>
                <Link to="/">Cancelar</Link> 
            </div>
        </div>
    )
}