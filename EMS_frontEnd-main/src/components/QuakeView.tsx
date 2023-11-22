import React from "react";
import { Circle } from "@react-google-maps/api";

interface QuakeViewProps {
  vquake: {
    lat: number;
    lng: number;
    mmi: number;
    name: string;
  };
  onSelectView: () => void;
}

const QuakeView: React.FC<QuakeViewProps> = ({ vquake, onSelectView }) => {
  const bufferCenter: google.maps.LatLngLiteral = { lat: vquake.lat, lng: vquake.lng };
  const bufferRadius = 500; // in meters

  const handleClick = () => {
    onSelectView();
  };

  return (
    <>
      <div
        className="card rounded position-absolute start-50 translate-middle d-flex align-items-center justify-content-center"
        style={{ width: "18rem", top: "70vh" }}
        onClick={handleClick}
      >
        <div className="card-body">
          <h3 className="card-title">Quake Information</h3>
          {/* View quake data */}
          <table>
            <tbody>
              <tr>
                <th>Latitude</th>
                <td>{vquake.lat}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{vquake.lng}</td>
              </tr>
              <tr>
                <th>MMI</th>
                <td>{vquake.mmi}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{vquake.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Draw buffer on the map */}
      <Circle
        center={bufferCenter}
        radius={bufferRadius}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        }}
      />
    </>
  );
};

export default QuakeView;
