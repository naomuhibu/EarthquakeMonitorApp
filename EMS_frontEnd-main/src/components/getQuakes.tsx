import { useState, useEffect } from "react";
import axios from 'axios';

interface Location {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}
export const useEarthquakeData = (): Location[] => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/earthquakes/');
        const data = response.data;
        const mappedLocations: Location[] = data.features.map(
          (item: any) => ({
            lat: item.geometry.coordinates[1],
            lng: item.geometry.coordinates[0],
            mmi: item.properties.mmi,
            name: item.properties.location_name,
          })
        );
        setLocations(mappedLocations);
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
      }
    };

    fetchEarthquakeData();
  }, []);

  return locations;
};