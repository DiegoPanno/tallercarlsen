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
import citroen from './img/citroen.jpg'
import honda from './img/honda.png'
import hyundai from './img/hyundai.jpg'
import kia from './img/kia.jpg'
import mazda from './img/mazda.jpg'
import mini from './img/mini.jpeg'
import mitsubishi from './img/mitsubishi.jpg'
import nissan from './img/nissan.jpg'
import peugeot from './img/peugeot.jpg'
import suzuki from './img/suzuki.jpg'
import toyota from './img/toyota.jpg'




const AnimatedBanner = () => {
  return (
    <div className="animated">
      {/* Contenido del banner (puedes cargar las imágenes aquí más tarde) */}
     <img className="coche1" src={coche} alt="Imagen de vehículo" />
     <img className="coche" src={bmw} alt="Logo Bmw" />
     <img className="coche" src={mb} alt="Logo Mercedes Benz" />
     <img className="coche" src={ford} alt="Logo Ford" />
     <img className="coche" src={chevrolet} alt="Logo Chevrolet" />
     <img className="coche" src={renault} alt="Logo Renault" />
     <img className="coche" src={fiat} alt="Logo Fiat" />
     <img className="coche" src={alfa} alt="Logo Alfa Romeo" />
     <img className="coche" src={jeep} alt="Logo Jeep" />
     <img className="coche" src={vw} alt="Logo Vw" />
     <img className="coche" src={audi} alt="Logo Audi" />
     <img className="coche" src={chery} alt="Logo Chery" />
     <img className="coche" src={citroen} alt="Logo Citroen" />
     <img className="coche" src={honda} alt="Logo Honda" />
     <img className="coche" src={hyundai} alt="Logo Hyundai" />
     <img className="coche" src={kia} alt="Logo Kia" />
     <img className="coche" src={mazda} alt="Logo Mazda" />
     <img className="coche" src={mini} alt="Logo Mini" />
     <img className="coche" src={mitsubishi} alt="Logo Mitsubishi" />
     <img className="coche" src={nissan} alt="Logo Nissan" />
     <img className="coche" src={peugeot} alt="Logo Peugeot" />
     <img className="coche" src={suzuki} alt="Logo Suzuki" />
     <img className="coche" src={toyota} alt="Logo Toyota" />
      {/* Agrega más imágenes según sea necesario */}
    </div>
  );
};

export default AnimatedBanner;
