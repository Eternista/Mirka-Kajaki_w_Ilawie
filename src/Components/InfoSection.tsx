import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { memo } from 'react';

export const InfoSection = () => {
    const position = [51.505, -0.09];

    return (
        <section className="infosection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 map">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="col-12 col-md-6 context">
                        <h1>Nagłówek</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium necessitatibus cupiditate nemo odio vitae perspiciatis, accusamus molestias exercitationem nobis dignissimos.</p>
                        <ul className="socials" aria-label="Social media links">
                            <li className="socials_single" aria-label="Social media link 1"></li>
                            <li className="socials_single" aria-label="Social media link 2"></li>
                            <li className="socials_single" aria-label="Social media link 3"></li>
                            <li className="socials_single" aria-label="Social media link 4"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(InfoSection);