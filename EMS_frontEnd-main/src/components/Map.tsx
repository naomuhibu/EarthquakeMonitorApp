import React, { useMemo, useCallback, useRef, useState } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";

interface Location {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}

interface MapProps {
  locations: Location[];
  selectedMarker: (location: Location) => void;
  selectedQuake: Location | null;
}

const Map: React.FC<MapProps> = ({ locations, selectedMarker, selectedQuake}) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const center = useMemo<google.maps.LatLngLiteral>(() => ({ lat: -43, lng: 171 }), []);
  const [showBuffer, setShowBuffer] = useState(true);

  const options = useMemo<google.maps.MapOptions>(
    () => ({
      mapId: "emsystem-405610",
      disableDefaultUI: true,
      clickableIcons: false,
      apiKey: "AIzaSyAQhHv-aqe0Yb4k_5omd5vOEDhSALzfsXk",
    }),
    []
  );

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  

  const bufferRadius = 100000; // in meters

  const markerClick = (location: Location) => {
    // Call the selectedMarker function
    selectedMarker(location);
    // Zoom to the clicked marker location with a buffer
    mapRef.current?.panTo({ lat: location.lat, lng: location.lng });
    const bounds = new google.maps.LatLngBounds();
    bounds.extend({ lat: location.lat + 0.01, lng: location.lng + 0.01 });
    bounds.extend({ lat: location.lat - 0.01, lng: location.lng - 0.01 });
    mapRef.current?.fitBounds(bounds);
    setShowBuffer(false);
  };
  

  return (
    <>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options as google.maps.MapOptions}
          onLoad={onLoad}
        >
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => markerClick(location)}
            />
          ))}
         {selectedQuake && (
            <Marker
              position={{ lat: selectedQuake.lat, lng: selectedQuake.lng }}
              icon={{ 
                url: "/path/to/selected-marker-icon.png",
                scaledSize: new google.maps.Size(50, 50)
              }}
            />
          )}
          {/* Draw buffer on the map */}
          {showBuffer && (
            <Circle
              center={center}
              radius={bufferRadius}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
              }}
            />
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;
