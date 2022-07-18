import L from "leaflet";
import icon from "../../assets/icon-location.svg";

const LocationIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { LocationIcon };
