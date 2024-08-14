import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {

    const position = [53.599211, 19.567815]
    const googleMapLink = "https://www.google.pl/maps/place/Kazimierza+Jagiellończyka+22,+14-200+Iława/@53.5994459,19.5655481,17z/data=!3m1!4b1!4m6!3m5!1s0x471d419d01f40ff5:0x3c12fd3c32089def!8m2!3d53.5994427!4d19.5681284!16s%2Fg%2F11gy7y0gqx?entry=ttu"
  

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a href={googleMapLink}>
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