import React from "react";
import "./Servicios.css";
import logoBosch from "./img/bosch.png";
import vtv from "./img/logovtv.png";
import freno from './img/freno.png'
import turbo from './img/turbo.png'
import turboalimentador from './img/turboalimentador.png'
import motor from './img/motor.png'
import alternador from './img/alternador.png'
import electricidad from './img/electricidad.png'
import bateria from './img/bateria.png'
import distribucion from './img/distribucion.png'
import amortiguacion from './img/amortiguacion.png'
import advertencia from './img/advertencia.png'
import suspencion from './img/suspencion.png'
import polea from './img/poleas.png'
import bateriaTablero from './img/bateriatablero.png'
import { FaComputer } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import { MdCarCrash } from "react-icons/md";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import AnimatedBannerIzq from "../AnimatedBanner/AnimatedBannerIzq";



const Servicios = () => {
  return (
    <section className="conte-section">
      <div className="conte-servicio">
        <div className="conte-diag">
          <div className="icono-servicio">
            <FaComputer style={{ fontSize: 50 }} />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Diagnóstico</h2>
            <h2 className="h2-diag">Computarizado</h2>
          </div>
          <img className="img-diag" src={logoBosch} alt="Logo de Bosch" />
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
            <GiMechanicGarage style={{ fontSize: 50 }} />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Mecánica</h2>
            <h2 className="h2-diag">Integral</h2>
            <img className="img-vtv" src={motor} alt="Imagen de motor" />
          </div>
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
            <MdCarCrash style={{ fontSize: 50 }} />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Pre-vtv</h2>
            <h2 className="h2-diag">Chequeo</h2>
            <img className="img-vtv" src={vtv} alt="Logo de vtv" />
          </div>
        </div>
      </div>


      <AnimatedBanner />


      <div className="conte-servicio">
        <div className="conte-diag">
          <div className="icono-servicio">
            <img style={{ height: 50 }} src={freno} alt="Logo de frenos" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Sistema</h2>
            <h2 className="h2-diag"> de Frenos</h2>
          </div>
          <img className="img-diag" src={advertencia} alt="Advertencia de frenos" />
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
          <img style={{ height: 50 }} src={amortiguacion} alt="Logo de un amortiguador" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Amortiguación</h2>
            <h2 className="h2-diag">Suspención</h2>
          </div>
          <img className="amort" src={suspencion} alt="Piezas de suspención" />
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
          <img style={{ height: 50 }} src={distribucion} alt="Logo de engranajes de distribución" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Sistema de</h2>
            <h2 className="h2-diag">Distribución</h2>
            <img className="img-vtv" src={polea} alt="Sistema de polea de distribución" />
          </div>
        </div>
      </div>

      <AnimatedBannerIzq />


      <div className="conte-servicio">
        <div className="conte-diag">
          <div className="icono-servicio">
            <img style={{ height: 50 }} src={bateria} alt="Logo de batería" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Baterías</h2>
            
          </div>
          <img className="img-diag" src={bateriaTablero} alt="Advertencia de batería" />
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
          <img style={{ height: 50 }} src={electricidad} alt="Logo rayo eléctrico" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Electricidad </h2>
            
          </div>
          <img style={{ height: 110 }} src={alternador} alt="Piezas de electrica, alternador" />
        </div>
        <div className="conte-diag">
          <div className="icono-servicio">
          <img style={{ height: 50 }} src={turbo} alt="Logo de turbo" />
          </div>
          <div className="conte-h2-servicio">
            <h2 className="h2-diag">Turbo</h2>
            <img className="img-turbo" src={turboalimentador} alt="Turbo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
