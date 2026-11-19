import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logoNegro from './img/logocarlsennegra.png'

const Footer = () => {
  return (
    <footer className='footer-conte'>
      <div className='celeste'></div>
      <div className='blanco' style={{ flexWrap: 'wrap', gap: '16px', padding: '20px' }}>
        <img className='logo-footer-negro' src={logoNegro} alt="Logo de Taller Carlsen Integral en color negro" />
        
        <div className='domicilio-footer'>
          <FaLocationDot style={{ fontSize: 22 }} />
          <h4 className='h4-footer'>Av. Jacinto Peralta Ramos 2457, Mar del Plata</h4>
        </div>

        <div className='horario-footer'>
          <FaClock />
          <h4 className='h4-footer'>L a V 7 a 17 hs</h4>
        </div>

        <div className='domicilio-footer'>
          <FaPhoneAlt />
          <h4 className='h4-footer'>
            <a href="tel:+542234812240" style={{ color: 'inherit', textDecoration: 'none' }}>223 481-2240</a> /{' '}
            <a href="https://wa.me/5492235898416" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>223 589-8416</a>
          </h4>
        </div>



        <div className='redes-footer'>
          <a href="https://www.instagram.com/tallercarlsen_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Taller Carlsen" style={{ color: 'inherit' }}>
            <AiFillInstagram />
          </a>
          <a href="https://wa.me/5492235898416" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Taller Carlsen" style={{ color: 'inherit' }}>
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>

      {/* Franja legal y Política de Privacidad para cumplimiento de Google Ads */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#cccccc',
        fontSize: '12px',
        padding: '12px 20px',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        <p style={{ margin: '0 0 6px 0' }}>
          <strong>Carlsen Taller Integral</strong> — Mecánica integral, electricidad y electrónica automotor. Taller multimarca independiente: las marcas y logotipos exhibidos pertenecen a sus respectivos propietarios y se muestran únicamente con fines descriptivos de compatibilidad.
        </p>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Taller Carlsen. Todos los derechos reservados. |{' '}
          <Link to="/privacidad" style={{ color: '#4da6ff', textDecoration: 'underline' }}>
            Política de Privacidad y Aviso Legal
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
