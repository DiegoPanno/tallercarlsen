import './NavMenu.css';
import React, { useState } from 'react';
import logo from './img/logocarlsen.png';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`conte-nav ${menuOpen ? 'mobile-menu-open' : 'desktop-menu-closed'}`}>
    <img className='img-logo-nav-hamb' src={logo} alt="Logo del taller Carlsen" />
  <div className='menu-icon' onClick={toggleMenu}>
  {menuOpen ? '✕' : '☰'}
  </div>
  <ul className={menuOpen ? 'mobile-menu-open' : 'desktop-menu-closed'}>
    <Link className='nav-li'to={'/'}>Home</Link>
    <Link className='nav-li' to={'/Nosotros'}>Nosotros</Link>
    <Link to={'/'} className='nav-li-img' >
    <img className='img-logo-nav' src={logo} alt="Logo del taller Carlsen" />
    </Link>
    <Link className='nav-li' to={'/servicios'}>Servicios</Link>
    <Link className='nav-li'to={'/'}>Productos</Link>
  </ul>
</nav>

  );
}

export default NavMenu;

