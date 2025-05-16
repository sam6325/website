import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast'; // 引入 Toast 組件
import '../styles/account.css';

const Account = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarError, setAvatarError] = useState('');
  const [avatarInfo, setAvatarInfo] = useState('');
  const [toast, setToast] = useState(null); // Toast 狀態

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    setFormData({
      name: user.name || '',
      email: user.email || '',
      address: user.address || '',
      password: '',
      avatar: user.avatar || null,
    });

    if (user.avatar) {
      setAvatarPreview(user.avatar);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 2 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      setAvatarError('僅支援 JPG、JPEG 或 PNG 格式');
      return;
    }

    if (file.size > maxSize) {
      setAvatarError('圖片大小不可超過 2MB');
      return;
    }

    setAvatarError('');
    setAvatarInfo(`${file.name}（${(file.size / 1024).toFixed(1)} KB）`);

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setFormData(prev => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveAvatar = () => {
    setAvatarPreview(null);
    setFormData(prev => ({ ...prev, avatar: null }));
    setAvatarInfo('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password && formData.password.length < 6) {
      setToast({ type: 'error', message: '密碼長度需至少 6 個字元' });
      return;
    }

    const updatedData = {
      name: formData.name,
      address: formData.address,
      avatar: formData.avatar,
      ...(formData.password && { password: formData.password }),
    };

    updateUser(updatedData);
    setToast({ type: 'success', message: '資料已成功更新！' });
  };

  return (
    <div className="account-container">
      <h2 className="account-title">會員資料編輯</h2>

      <form className="account-form" onSubmit={handleSubmit}>
        {/* 頭像整合區 */}
        <div className="avatar-wrapper" onClick={handleAvatarClick}>
          {avatarPreview ? (
            <>
              <img src={avatarPreview} alt="預覽頭像" className="avatar-img" />
              <button
                type="button"
                className="remove-avatar"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveAvatar();
                }}
              >
                ✕
              </button>
            </>
          ) : (
            <div className="avatar-placeholder">
              <span>點我上傳頭像</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>

        {avatarError && <p className="avatar-error">{avatarError}</p>}
        {avatarInfo && <p className="avatar-info">{avatarInfo}</p>}

        {/* 其他欄位 */}
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="請輸入您的姓名"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">電子郵件</label>
          <input type="email" id="email" name="email" value={formData.email} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="address">地址</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="請輸入您的地址"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">變更密碼（可選填）</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="請輸入新密碼（至少 6 字元）"
          />
        </div>

        <button type="submit" className="submit-btn">儲存變更</button>
      </form>

      {/* Toast 通知 */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Account;
