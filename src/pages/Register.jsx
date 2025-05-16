// src/pages/Register.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    register(email, password);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <h1>會員註冊</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="電子郵件"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">註冊</button>
      </form>
    </div>
  );
};

export default Register;
