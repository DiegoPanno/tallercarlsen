import './NavMenu.css';
import React, { useState } from 'react';
import logo from './img/logocarlsen.png';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`conte-nav ${menuOpen ? 'mobile-menu-open' : 'desktop-menu-closed'}`}>
    <img className='img-logo-nav-hamb' src={logo} alt="Logo del taller Carlsen" />
  <div className='menu-icon' onClick={toggleMenu}>
    ☰
  </div>
  <ul className={menuOpen ? 'mobile-menu-open' : 'desktop-menu-closed'}>
    <li>Home</li>
    <li>Nosotros</li>
    <img className='img-logo-nav' src={logo} alt="Logo del taller Carlsen" />
    <li>Servicios</li>
    <li>Productos</li>
  </ul>
</nav>

  );
}

export default NavMenu;

