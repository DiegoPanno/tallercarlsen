import "./ServiciosPage.css";
import BtnWhatsApp from '../../BtnWhatsApp/BtnWhatsApp'
import { FaComputer } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import electricidad from '../img/electricidad.png'
import bateria from '../img/bateria.png'
import amortiguacion from '../img/amortiguacion.png'
import vtvnegro from "../img/logovtvnegro.png";
import turbo from '../img/turbo.png'
import freno from '../img/freno.png'
import aceite from '../img/aceite.png'

const ServiciosPage = () => {
  return (
    <section className="conte-servicios-page">
      
      <h1 className="h1-servicio-page">En esto nos especializamos</h1>
      <div className="conte-serv">
        <div className="conte-serv-uno">
          <div className="conte-integral">
            <div className="icon-servicio-page">
              {" "}
              <FaComputer style={{ fontSize: 50 }} />{" "}
            </div>
            <h3 className="h3-serv-page">Diagnóstico <br /> computarizado</h3>
            <p className="parrafo-servicio"> Se utiliza un scanner Bosh para podes detectar cualquier falla en el vehículo.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
              <GiMechanicGarage  style={{ fontSize: 50 }}/>
            </div>
            <h3 className="h3-serv-page">Mecánica <br /> integral</h3>
            <p className="parrafo-servicio">Reparación de motor, reparación de tapa de cilindros, mecánica en general.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={electricidad} alt="Logo rayo eléctrico" />
            </div>
            <h3 className="h3-serv-page">Electricidad <br /> del automotor</h3>
            <p className="parrafo-servicio">Motores de arranque, alternadores, reparación de cableado electrónico</p>
          </div>
        </div>
        <div className="conte-serv-dos">
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={bateria} alt="Logo de batería" />
            </div>
            <h3 className="h3-serv-page">Venta de baterías</h3>
            <p className="parrafo-servicio">Contamos con la batería apropiada para tu vehículo.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={amortiguacion} alt="Logo de un amortiguador" />
            </div>
            <h3 className="h3-serv-page">Tren delantero</h3>
            <p className="parrafo-servicio">Amortiguación, suspensión. Reparación de tren delantero.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50}}  src={vtvnegro} alt="Logo de vtv" />
            </div>
            <h3 className="h3-serv-page">Pre  vtv</h3>
            <p className="parrafo-servicio">Aseguramos que tu vehículo cumpla los estándares requeridos.</p>
          </div>
        </div>
        <div className="conte-serv-dos">
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={freno} alt="Logo de frenos" />
            </div>
            <h3 className="h3-serv-page">Sistema de frenos</h3>
            <p className="parrafo-servicio">Tu seguridad es primordial. Ofrecemos servicios completos de frenos para un rendimiento óptimo.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={turbo} alt="Logo de turbo" />
            </div>
            <h3 className="h3-serv-page">Turbo</h3>
            <p className="parrafo-servicio">Reemplazo <br /> de turbos nuevos <br /> y reparados.</p>
          </div>
          <div className="conte-integral">
            <div className="icon-servicio-page">
            <img style={{ height: 50 }} src={aceite} alt="Logo de turbo" />
            </div>
            <h3 className="h3-serv-page">Cambio de lubricantes <br /> y filtros</h3>
            <p className="parrafo-servicio">Atendemos automóviles nacionales e importados.</p>
          </div>
          
        </div>
      </div>
      <BtnWhatsApp />
    </section>
  );
};

export default ServiciosPage;
