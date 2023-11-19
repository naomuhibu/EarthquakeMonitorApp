import { useState, useEffect } from "react";

interface Location {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}

export const useGeoNetData = (): Location[] => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchGeoNetData = async () => {
      try {
        const response = await fetch(
          "https://api.geonet.org.nz/intensity/strong/processed/2020p666015"
        );
        const data = await response.json();
        const mappedLocations: Location[] = data.features.map(
          (feature: any) => ({
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
            mmi: feature.properties.mmi,
            name: feature.properties.name,
          })
        );
        setLocations(mappedLocations);
        // console.log(mappedLocations);
      } catch (error) {
        console.error("Error fetching GeoNet data:", error);
      }
    };

    fetchGeoNetData();
  }, []);

  return locations;
};
