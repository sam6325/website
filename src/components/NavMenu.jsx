import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">首頁</Link></li>
        <li><Link to="/products">產品</Link></li>
        <li><Link to="/about">關於我們</Link></li>
        <li><Link to="/contact">聯絡我們</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
