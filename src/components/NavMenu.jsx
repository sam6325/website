import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // 參考下拉選單區塊

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // 🔽 點擊外部時關閉選單
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/products">產品</Link></li>
        <li><Link to="/about">關於我們</Link></li>
        <li><Link to="/contact">聯絡我們</Link></li>

        {user ? (
          <li className="user-menu" ref={dropdownRef}>
            <button onClick={toggleMenu} className="user-menu-btn">
              會員中心
            </button>
            {menuOpen && (
              <div className="user-menu-dropdown">
                <ul>
                  <li>
                    <Link to="/account" onClick={() => setMenuOpen(false)}>
                      我的帳戶
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="nav-link-button">登出</button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><Link to="/login">登入</Link></li>
            <li><Link to="/register">註冊</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavMenu;
