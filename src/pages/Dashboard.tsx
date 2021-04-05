import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useAuth } from './../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        console.log('Log Out')
        setError('')

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Falha ao sair") // Failed to log out
        }
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <div>


                <div>Profile</div>
                <strong>Email: </strong> {currentUser.email}
                <Link to="/update-profile">Atualizar Perfil</Link>
            </div>

            <div>
                <Button variant="contained" color="secondary" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}