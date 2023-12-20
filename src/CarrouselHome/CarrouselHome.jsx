import './CarrouselHome.css';
import { Carousel } from 'antd';
import uno from './img/tarjetasunogrande.jpg';
import dos from './img/caruunogrande.jpg';
import tres from './img/integraunogrande.jpg';
import unoChico from './img/tarjetasunochico.jpg';
import dosChico from './img/caruunochico.jpg';
import tresChico from './img/integraunochico.jpg';



const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  backgroundColor: '#2e3033',
};

function CarouselHome() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className='conte-carrousel'>
          <img style={imageStyle} src={uno} alt="Todas las tarjetas de crédito" className="img-grande" />
          <img style={imageStyle} src={unoChico} alt="Todas las tarjetas de crédito" className="img-chico" />
        </h3>
      </div>
      <div>
        <h3 className='conte-carrousel'>
          <img style={imageStyle} src={dos} alt="Chequeo de VTV" className="img-grande" />
          <img style={imageStyle} src={dosChico} alt="Chequeo de VTV" className="img-chico" />
        </h3>
      </div>
      <div>
        <h3 className='conte-carrousel'>
          <img style={imageStyle} src={tres} alt="Servicio integral a flota" className="img-grande" />
          <img style={imageStyle} src={tresChico} alt="Servicio integral a flota" className="img-chico" />
        </h3>
      </div>
    </Carousel>
  );
}

export default CarouselHome;
