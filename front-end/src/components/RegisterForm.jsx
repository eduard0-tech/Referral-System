import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegister, onSwitch }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [referralCode, setReferralCode] = useState(null);

    // Efeito para capturar um código de indicação da URL ao carregar a página.
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const refCode = urlParams.get('ref');
        if (refCode) {
            setReferralCode(refCode);
        }
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Formato de e-mail inválido.';
        }
        if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
            newErrors.password = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Valida os campos e envia os dados de cadastro para a API
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const payload = { ...formData, referralCode };
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, payload);
            onRegister(response.data); // Envia os dados do usuário para o App.jsx
        } catch (error) {
            setErrors({ form: error.response?.data?.message || 'Erro no servidor.' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crie sua Conta</h2>
            <div className="form-group">
                <input type="text" placeholder="Nome" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
                <input type="password" placeholder="Senha" name="password" value={formData.password} onChange={handleChange} required />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            {errors.form && <span className="error-message">{errors.form}</span>}
            <button type="submit">Cadastrar</button>
            <p className="form-toggle-text">
                Já tem uma conta?{' '}
                <span onClick={onSwitch} className="form-link switch-link">
                    Faça Login
                </span>
            </p>
        </form>
    );
};

export default RegisterForm;