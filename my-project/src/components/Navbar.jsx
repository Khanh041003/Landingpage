// src/components/Navbar.js
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/about">Giới Thiệu</Link></li>
        <li><Link to="/services">Dịch Vụ</Link></li>
        <li><Link to="/contact">Liên Hệ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
