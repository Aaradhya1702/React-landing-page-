import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const cameraIcon = L.icon({
  iconUrl: "/camera.png", // path relative to `public`
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
});

const foodIcon = L.icon({
  iconUrl: "/food.png", // path relative to `public`
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
});

const gameIcon = L.icon({
  iconUrl: "/game.png", // path relative to `public`
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
});

const iconMap = {
  food: foodIcon,
  game: gameIcon,
  camera: cameraIcon,
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locations = [
  // Food spots (moved near camera)
  {
    position: [51.506, -0.089],
    type: "food",
    name: "Delicious Diner A",
  },
  {
    position: [51.508, -0.086],
    type: "food",
    name: "Delicious Diner B",
  },
  {
    position: [51.51, -0.084],
    type: "food",
    name: "Delicious Diner C",
  },
  {
    position: [51.512, -0.081],
    type: "food",
    name: "Delicious Diner D",
  },
  {
    position: [51.514, -0.078],
    type: "food",
    name: "Delicious Diner E",
  },
  {
    position: [51.508, -0.072],
    type: "food",
    name: "Delicious Diner F",
  },
  {
    position: [51.512, -0.068],
    type: "food",
    name: "Delicious Diner G",
  },
  {
    position: [51.514, -0.065],
    type: "food",
    name: "Delicious Diner H",
  },

  // Game zones (moved near camera)
  {
    position: [51.506, -0.091],
    type: "game",
    name: "Game Zone A",
  },
  {
    position: [51.507, -0.087],
    type: "game",
    name: "Game Zone B",
  },
  {
    position: [51.509, -0.083],
    type: "game",
    name: "Game Zone C",
  },
  {
    position: [51.51, -0.08],
    type: "game",
    name: "Game Zone D",
  },
  {
    position: [51.511, -0.076],
    type: "game",
    name: "Game Zone E",
  },
  {
    position: [51.512, -0.072],
    type: "game",
    name: "Game Zone F",
  },
  {
    position: [51.514, -0.07],
    type: "game",
    name: "Game Zone G",
  },
  {
    position: [51.516, -0.067],
    type: "game",
    name: "Game Zone H",
  },

  // Camera spots (same as before)
  {
    position: [51.505, -0.09],
    type: "camera",
    name: "Photo Spot A",
  },
  {
    position: [51.51, -0.085],
    type: "camera",
    name: "Photo Spot B",
  },
  {
    position: [51.515, -0.08],
    type: "camera",
    name: "Photo Spot C",
  },
  {
    position: [51.505, -0.07],
    type: "camera",
    name: "Photo Spot D",
  },
  {
    position: [51.51, -0.075],
    type: "camera",
    name: "Photo Spot E",
  },
  {
    position: [51.515, -0.06],
    type: "camera",
    name: "Photo Spot F",
  },
];

export default function MyMap() {
  return (
    <div>
      <h1 className="text-60  font-bold">Interactive Map</h1>
      <p className="mb-4">
        Get an Interactive, playful and visually appealing map that helps you
        navigate the noise{" "}
      </p>
      <div style={{ height: "500px", width: "100%" }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={loc.position} icon={iconMap[loc.type]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
