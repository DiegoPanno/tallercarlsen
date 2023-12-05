import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import logoNegro from './img/logocarlsennegra.png'
import { FaClock } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer-conte'>
      
      <div className='celeste'></div>
      <div className='blanco'>
        <img className='logo-footer-negro' src={logoNegro} alt="Logo de taller Carlsen en color negro" />
        <div className='domicilio-footer'>
        <FaLocationDot style={{fontSize: 25}} />
        <h4 className='h4-footer'>Jacinto Peralta Ramos 2457, Mar del Plata </h4>
        </div>
        <div className='horario-footer'>
        <FaClock />
        <h4 className='h4-footer'>L a V 7 a 17 hs</h4>
        </div>
        <div className='redes-footer'>
        <AiFillInstagram />
        <IoLogoWhatsapp />
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
