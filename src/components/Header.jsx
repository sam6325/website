import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">AESOP</div>
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/products">產品</Link></li>
        <li><Link to="/about">品牌理念</Link></li>
        <li><Link to="/contact">聯絡我們</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
