// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

// 創建 AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 初始化 user 狀態，這裡的 user 可以包含 email, name, address 等資訊
  const [user, setUser] = useState(null);

  // 模擬登入功能
  const login = (email, password) => {
    // 模擬登入成功，這裡可以添加更多用戶資訊
    setUser({ email, name: 'John Doe', address: '1234 Street, City' });
  };

  // 模擬登出功能
  const logout = () => {
    setUser(null); // 清除 user 資料，登出
  };

  // 模擬註冊功能
  const register = (email, password) => {
    // 模擬註冊成功，這裡可以新增更多資料
    setUser({ email, name: 'John Doe', address: '1234 Street, City' });
  };

  // 更新用戶資料
  const updateUser = (updatedData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData,
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定義 hook，簡化使用 AuthContext 的過程
export const useAuth = () => useContext(AuthContext);
