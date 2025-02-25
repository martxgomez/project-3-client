import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = ({ location }) => {
  const [locationCoords, setLocationCoords] = useState(null);

  useEffect(() => {
    if (location) {
      fetchCoordinates(location);
    }
  }, [location]);

  const fetchCoordinates = (location) => {
    axios
      .get(
        `https://nominatim.openstreetmap.org/search?city=${location}&format=json`
      )
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLocationCoords({ lat: parseFloat(lat), lng: parseFloat(lon) });
        } else {
          console.error(
            "No se encontraron resultados para la ubicación proporcionada."
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener coordenadas:", error);
      });
  };
  console.log(`Buscando coordenadas para: ${location}`)

  if (!locationCoords) {
    return <p>Cargando mapa...</p>;
  }

  return (
    <MapContainer
      center={locationCoords}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={locationCoords}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
