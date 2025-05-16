// src/components/Toast.jsx
import React, { useEffect } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Toast = ({ type = 'success', message = '', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // 自動關閉時間

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-icon">
        {type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
      </span>
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;
