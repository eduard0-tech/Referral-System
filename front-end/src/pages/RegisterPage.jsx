// src/pages/RegisterPage.jsx

import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/RegisterPage.css';

const RegisterPage = ({ onRegister }) => {
    return (
        // O container principal agora é o 'split-screen-container'
        <div className="split-screen-container">

            {/* PAINEL ESQUERDO: A parte colorida com a mensagem de boas-vindas */}
            <div className="branding-panel">
                <div className="branding-content">
                    <h2>Bem-vindo ao Vortex</h2>
                    <p>Conecte-se, indique e ganhe pontos. A inovação começa aqui.</p>
                </div>
            </div>

            {/* PAINEL DIREITO: Onde o formulário vive */}
            <div className="form-panel">
                {/* O RegisterForm continua o mesmo, apenas o passamos para o painel direito */}
                <RegisterForm onRegister={onRegister} />
            </div>

        </div>
    );
};

export default RegisterPage;