import React from 'react'
import '../styles/ProfilePage.css'

export default function UserProfile({ user, onLogout }) {
    if (!user) return <div className="no-user">Nenhum usuário logado.</div>

    return (
        <div className="user-profile">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
