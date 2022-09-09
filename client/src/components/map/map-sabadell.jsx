import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/index.css'


const MapViewSabadell = () => {

    const position = [41.5287017, 2.1061721]

    return (
        <MapContainer
            center={position}
            zoom={15}
        >
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    ADM Servicios Financieros
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapViewSabadell;