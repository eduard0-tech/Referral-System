import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm.jsx';
import '../styles/AuthPage.css';

const AuthPage = ({ onAuthSuccess }) => {
    // Controla a exibição do painel de registro. 'false' = Login, 'true' = Cadastro.
    const [isRegisterView, setIsRegisterView] = useState(false);

    return (
        <div className="auth-body">
            {/* A classe 'show-register' ativa a animação de transição via CSS */}
            <div className={`auth-card ${isRegisterView ? 'show-register' : ''}`}>

                <div className="form-container login-container">
                    <LoginForm
                        onLogin={onAuthSuccess}
                        onSwitch={() => setIsRegisterView(true)}
                    />
                </div>

                <div className="form-container register-container">
                    <RegisterForm
                        onRegister={onAuthSuccess}
                        onSwitch={() => setIsRegisterView(false)}
                    />
                </div>

            </div>
        </div>
    );
};

export default AuthPage;