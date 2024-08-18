import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mark from "../assets/marker.png";

const myIcon = new L.Icon({
  iconUrl: mark,
  iconRetinaUrl: mark,
  popupAnchor:  [-0, -0],
  iconSize: [25,41],     
});

function Map() {

    const position = [53.5993, 19.567815]
    const googleMapLink = "https://g.co/kgs/h4cJxsJ";
  

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon} >
          <Popup>
            <a target="_blank" href={googleMapLink}>
              Kazimierza Jagiellończyka 22,
              <br />
              14-200 Iława.
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map;