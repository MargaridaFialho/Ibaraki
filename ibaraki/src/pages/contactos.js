import { Row, Col } from 'react-bootstrap';
import L from 'leaflet';
import Weather from '../components/Weather';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import FullpageLayout from '../components/FullpageLayout';

import sushi3 from '../imgs/sushi3.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contactos = () => {
  return (
    <>
      <FullpageLayout
        imageUrl={sushi3}
        pageTitle={"CONTACTOS"}
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="d-flex align-items-center">
            <div>
              <h4 className='middle-text white' style={{ marginBottom: '20px' }}>Enquanto desfruta dos nossos pratos excepcionais, aprecie a vista deslumbrante do NOSSO Alentejo.</h4>
              <p>R. da Condessa de Valença 5, 7050-164 Montemor-o-Novo <br/> ibarakisite@gmail.com <br/> 961304741</p>
              <Weather />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <MapContainer center={[38.6431252,-8.2163639]} zoom={15} style={{ height: "60vh", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[38.6431252,-8.2163639]}>
                <Popup>
                  Ibaraki <br/>
                  R. da Condessa de Valença 5, 7050-164 Montemor-o-Novo
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </FullpageLayout>
    </>
  );
};
  
 export default Contactos;