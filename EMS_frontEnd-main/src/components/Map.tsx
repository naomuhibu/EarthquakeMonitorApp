import { useMemo, useCallback, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

interface Location {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}

interface MapProps {
  locations: Location[];
  selectedMarker: (location: Location) => void;
}

export default function Map({ locations, selectedMarker }: MapProps) {
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: -43, lng: 171 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "c36e4e976628b519",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const markerClick = (location: Location) => {
    selectedMarker(location);
  };

  return (
    <>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={{ lat: location.lat, lng: location.lng }}
              // Optional: Add a label or tooltip to display the MMI and name
              // label={location.name}
              onClick={() => {
                markerClick(location);
              }}
            />
          ))}
        </GoogleMap>
        <h1>hello world</h1>
      </div>
    </>
  );
}
