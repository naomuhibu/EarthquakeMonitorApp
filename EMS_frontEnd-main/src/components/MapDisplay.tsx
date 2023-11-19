import Map from "../components/map";
import { useLoadScript } from "@react-google-maps/api";
import { useGeoNetData } from "../components/getQuakes";
// import map from "../components/map";

interface MapDisplayProps {
  handleSelection: (data) => void;
}

export default function MapDisplay({ handleSelection }: MapDisplayProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  const markerSelected = (location) => {
    handleSelection(location);
  };

  const quakes = useGeoNetData(); // Fetch the earthquake data

  // Pass the quakes data to the Map component
  if (!isLoaded) return <div>Loading...</div>;
  return <Map locations={quakes} selectedMarker={markerSelected} />;
}
