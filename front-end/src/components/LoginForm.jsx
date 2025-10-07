import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin, onSwitch }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Envia os dados de login para a API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, formData);
            onLogin(response.data); // Envia os dados do usuário para o App.jsx
        } catch (err) {
            setError(err.response?.data?.message || 'Erro no servidor. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Senha" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            {error && <p className="error-message">{error}</p>}
            <a href="#" className="form-link">Esqueceu sua senha?</a>
            <button type="submit">Login</button>
            <p className="form-toggle-text">
                Não tem uma conta?{' '}
                <span onClick={onSwitch} className="form-link switch-link">
                    Cadastre-se
                </span>
            </p>
        </form>
    );
};

export default LoginForm;