// src/pages/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../context/ToastContext'; // 引入 useToast

const Login = () => {
  const { login } = useAuth();
  const { showToast } = useToast(); // 使用 showToast
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || '/account';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // 假設 login 是一個 async 函數
      showToast('success', '登入成功！'); // 成功後顯示成功提示
      navigate(from, { replace: true });
    } catch (error) {
      showToast('error', '登入失敗，請檢查帳號或密碼！'); // 錯誤時顯示錯誤提示
    }
  };

  return (
    <div className="auth-page">
      <h1>會員登入</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="電子郵件"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default Login;
