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
    <div className="animated-banner-dos">
      {/* Contenido del banner (puedes cargar las imágenes aquí más tarde) */}
      <img className="coches" src={citroen} alt="Logo Citroen" />
     <img className="coches" src={honda} alt="Logo Honda" />
     <img className="coches" src={hyundai} alt="Logo Hyundai" />
     <img className="coches" src={kia} alt="Logo Kia" />
     <img className="coches" src={mazda} alt="Logo Mazda" />
     <img className="coches" src={mini} alt="Logo Mini" />
     <img className="coches" src={mitsubishi} alt="Logo Mitsubishi" />
     <img className="coches" src={nissan} alt="Logo Nissan" />
     <img className="coches" src={peugeot} alt="Logo Peugeot" />
     <img className="coches" src={suzuki} alt="Logo Suzuki" />
     <img className="coches" src={toyota} alt="Logo Toyota" />
     <img className="coches" src={bmw} alt="Logo Bmw" />
     <img className="coches" src={mb} alt="Logo Mercedes Benz" />
     <img className="coches" src={ford} alt="Logo Ford" />
     <img className="coches" src={chevrolet} alt="Logo Chevrolet" />
     <img className="coches" src={renault} alt="Logo Renault" />
     <img className="coches" src={fiat} alt="Logo Fiat" />
     <img className="coches" src={alfa} alt="Logo Alfa Romeo" />
     <img className="coches" src={jeep} alt="Logo Jeep" />
     <img className="coches" src={vw} alt="Logo Vw" />
     <img className="coches" src={audi} alt="Logo Audi" />
     <img className="coches" src={chery} alt="Logo Chery" />
     <img className="coche2" src={cocheDorado} alt="Coche dorado" />
      {/* Agrega más imágenes según sea necesario */}
    </div>
  );
};

export default AnimatedBanner;