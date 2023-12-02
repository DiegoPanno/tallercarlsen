import React from "react";
import "./AnimatedBannerIzq.css"; // Asegúrate de tener un archivo CSS asociado
import cocheDorado from './img/autodorado.png'
import alfa from './img/alfaromeo.jpg'
import audi from './img/audi.png'
import bmw from './img/bmw.svg.png'
import chery from './img/chery.png'
import chevrolet from './img/chevrolet.png'
import fiat from './img/fiat.png'
import ford from './img/ford.png'
import jeep from './img/jeep.png'
import mb from './img/mb.png'
import renault from './img/renault.jpg'
import vw from './img/vw.png'


const AnimatedBanner = () => {
  return (
    <div className="animated-banner-dos">
      {/* Contenido del banner (puedes cargar las imágenes aquí más tarde) */}
     <img className="coches" src={bmw} alt="Logo BMW" />
     <img className="coches" src={mb} alt="" />
     <img className="coches" src={ford} alt="" />
     <img className="coches" src={chevrolet} alt="" />
     <img className="coches" src={renault} alt="" />
     <img className="coches" src={fiat} alt="" />
     <img className="coches" src={alfa} alt="" />
     <img className="coches" src={jeep} alt="" />
     <img className="coches" src={vw} alt="" />
     <img className="coches" src={audi} alt="" />
     <img className="coches" src={chery} alt="" />
     <img className="coche2" src={cocheDorado} alt="Coche dorado" />
      {/* Agrega más imágenes según sea necesario */}
    </div>
  );
};

export default AnimatedBanner;