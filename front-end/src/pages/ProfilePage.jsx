import React, { useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = ({ user, onLogout }) => {
    // Estado local para o feedback da UI ao copiar o link
    const [copySuccess, setCopySuccess] = useState('');

    // Lida com o clique no botão "Copiar", usando a API do navegador
    const handleCopyLink = () => {
        navigator.clipboard.writeText(user.referralLink).then(() => {
            setCopySuccess('Link copiado com sucesso!');
            setTimeout(() => setCopySuccess(''), 3000);
        }, () => {
            setCopySuccess('Falha ao copiar o link.');
        });
    };

    if (!user) {
        return (
            <div className="profile-body">
                <div className="profile-container">
                    <h2>Erro: Usuário não encontrado.</h2>
                    <button onClick={onLogout} className="logout-button">Voltar ao Login</button>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-body">
            <div className="profile-container">
                <div className="profile-header">
                    <h1>Olá, {user.name}!</h1>
                    <p>Este é o seu painel de indicações.</p>
                </div>

                <div className="score-card">
                    <h2>Sua Pontuação</h2>
                    <p className="points">{user.points}</p>
                </div>

                <div className="referral-card">
                    <h2>Seu Link de Indicação</h2>
                    <p>Compartilhe este link para ganhar pontos!</p>
                    <div className="referral-link-box">
                        <input type="text" value={user.referralLink} readOnly />
                        <button onClick={handleCopyLink}>Copiar</button>
                    </div>
                    {copySuccess && <p className="copy-success-message">{copySuccess}</p>}
                </div>

                <button onClick={onLogout} className="logout-button">
                    Sair (Logout)
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;