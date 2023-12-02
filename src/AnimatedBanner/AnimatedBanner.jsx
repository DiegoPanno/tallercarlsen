import React from "react";
import "./AnimatedBanner.css"; // Asegúrate de tener un archivo CSS asociado
import coche from './img/coche.png'
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
    <div className="animated">
      {/* Contenido del banner (puedes cargar las imágenes aquí más tarde) */}
     <img className="coche1" src={coche} alt="" />
     <img className="coche" src={bmw} alt="" />
     <img className="coche" src={mb} alt="" />
     <img className="coche" src={ford} alt="" />
     <img className="coche" src={chevrolet} alt="" />
     <img className="coche" src={renault} alt="" />
     <img className="coche" src={fiat} alt="" />
     <img className="coche" src={alfa} alt="" />
     <img className="coche" src={jeep} alt="" />
     <img className="coche" src={vw} alt="" />
     <img className="coche" src={audi} alt="" />
     <img className="coche" src={chery} alt="" />
      {/* Agrega más imágenes según sea necesario */}
    </div>
  );
};

export default AnimatedBanner;
