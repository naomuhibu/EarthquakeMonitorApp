import Map from "../components/Map";
import { useLoadScript, Libraries } from "@react-google-maps/api";
import { useEarthquakeData } from "../components/getQuakes";
import { useState } from "react";

// Define libraries as a constant outside of the component
const libraries: Libraries = ["places"];

interface MapDisplayProps {
  handleSelection: (data: any) => void;
}

export default function MapDisplay({ handleSelection }: MapDisplayProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAQhHv-aqe0Yb4k_5omd5vOEDhSALzfsXk",
    libraries: libraries, // Use the constant libraries here
  });

  const [selectedLocation, setSelectedLocation] = useState(null);


  const markerSelected = (location: any) => {
    setSelectedLocation(location);
    handleSelection(location);
  };

  const quakes = useEarthquakeData(); // Fetch the earthquake data

  // Google Maps API is not loaded
  if (!isLoaded) {
    if (loadError) {
      return <div>Error loading Google Maps API</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
  // Display Map component if Google Maps API is loaded
  return <Map locations={quakes} selectedMarker={markerSelected} selectedQuake={selectedLocation} />;
}
