'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/** Near Durga Puri Chowk, Shahdara (OpenStreetMap / Nominatim reference) */
const OFFICE_LAT = 28.68941;
const OFFICE_LNG = 77.29153;

const fixDefaultMarkerIcon = () => {
  const proto = L.Icon.Default.prototype as unknown as { _getIconUrl?: string };
  delete proto._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

fixDefaultMarkerIcon();

const OFFICE_POPUP_LINES = [
  'Winsun Lifesciences Pvt. Ltd.',
  '1449/136, Basement',
  'Durga Puri chowk, Shahdara',
  'Delhi - 110032',
] as const;

export default function ContactMap() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <MapContainer
        center={[OFFICE_LAT, OFFICE_LNG]}
        zoom={16}
        scrollWheelZoom={false}
        className="z-0 h-[400px] w-full"
        aria-label="Map of registered office location"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[OFFICE_LAT, OFFICE_LNG]}>
          <Popup>
            {OFFICE_POPUP_LINES.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
