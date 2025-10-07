import React, { useState } from 'react';
import AuthPage from './pages/AuthPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import './styles/main.css';

function App() {
  // O estado 'user' armazena os dados do usuário logado. Se for nulo, mostra a tela de login.
  const [user, setUser] = useState(null);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <AuthPage onAuthSuccess={handleAuthSuccess} />
      ) : (
        <ProfilePage user={user} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;