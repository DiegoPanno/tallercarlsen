import React, { useState, useEffect } from 'react';
import './Home.css';
import imgFondo from '../assets/interiordetaller.jpg';

import imgDesaparece from '../assets/imgDesaparece.jpg';
import NavMenu from '../NavMenu/NavMenu';
import { IoLogoWhatsapp } from "react-icons/io";
import { openWhatsAppChat } from '../OpenWhatsApp/openWhatsAppChat'
import Servicios from '../Servicios/Servicios';
import BtnWhatsApp from '../BtnWhatsApp/BtnWhatsApp';


const Home = () => {
  const [scroll, setScroll] = useState(0);
  const threshold = 200; // Ajusta este valor según sea necesario

  useEffect(() => {
    // Ajustar el scroll al inicio de la carga de la página
    window.scrollTo(0, window.innerHeight * 0.01); // Ajusta el valor según tus necesidades

    // Manejar el evento de scroll
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.max(0, 9 - scroll / threshold);

  return (
    <>
      <div className='conte-home'>
        <nav className="menu menu-fijo">
          <NavMenu />
        </nav>
        <div className="img-desaparece-container">
          <img
            className="img-desaparece"
            src={imgDesaparece}
            alt="Cortina que se desplaza hacia arriba"
            style={{ transform: `translate(-50%, -${scroll}px)`, opacity }}
          />
        </div>
        
        <div>

        <img
         className="img-fondo" 
         src={imgFondo}
          alt="Interior de taller Carlsen" 
          />
          
        </div>
        
      </div>
      <BtnWhatsApp />
    <Servicios />
    </>
  );
};

export default Home;



