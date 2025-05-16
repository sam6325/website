// src/context/ToastContext.jsx
import React, { createContext, useCallback, useContext, useState } from 'react';
import Toast from '../components/Toast';
import { v4 as uuidv4 } from 'uuid';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((type, message) => {
    const id = uuidv4();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 3000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
