import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ListCoins from '../components/ListCoins';

import { useAuth } from './../contexts/AuthContext';

export default function Dashboard() {
    const [/*error*/, setError] = useState("")
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
            <ListCoins />
            <div>
                <div>Profile</div>
                <strong>Email: </strong> {currentUser.email}
                <Link href="/update-profile">Atualizar Perfil</Link>
            </div>

            <div>
                <Button variant="contained" color="secondary" onClick={handleLogout}>Sair <ExitToAppIcon /></Button> {/* Log Out */}
            </div>
        </div>
    )
}