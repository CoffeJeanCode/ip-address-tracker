import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRecoilState } from "recoil";
import { IPInfoAtom } from "../Header";
import { LocationIcon } from "../Icons/LocationIcon";

const MapView = () => {
  const [ipInfo] = useRecoilState(IPInfoAtom);

  if (!ipInfo) return <div />;

  const position = [ipInfo.location.lat, ipInfo.location.lng];

  return (
    <MapContainer
      key={JSON.stringify(position)}
      style={{ width: "100%", minHeight: "calc(100vh - 15rem)", zIndex: "-1" }}
      center={position}
      zoom={12}
    >
      <Marker position={position} icon={LocationIcon} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapView;
