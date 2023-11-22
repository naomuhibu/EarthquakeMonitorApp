import "./App.css"; // Import CSS file
import QuakeList from "./components/QuakeList";
import QuakeView from "./components/QuakeView";
import MapDisplay from "./components/MapDisplay";
//import Header from "./components/Header";
import { useEarthquakeData } from "./components/getQuakes"; // Changed from useGeoNetData to useEarthquakeData

import { useState } from "react";

function App() {
  const [data, setData] = useState(null); // [activeQuake, setActiveQuake]
  const quakes = useEarthquakeData(); // Fetch quake data with the custom hook

  // TODO: Display Quake Data in popup
  const handleSelection = (newData: any) => {
    console.log("quake data: ", newData);
    setData(newData); // setActiveQuake
  };

  const quakeViewClear = () => {
    setData(null); // setActiveQuake
  };

  return (
    <>
      <div className="container-fluid">
        {/* Display Header */}
        <div className="row">
          {/* <Header /> removed as this feature requires a working database to update */}
        </div>
        {/* Side Panel */}
        <div className="row">
          {/* View Quakes on left side of screen */}
          <QuakeList quakes={quakes} onSelectQuake={handleSelection} />
        </div>
        {/* View Quake Data in centre of screen when selected */}
        {data !== null && (
          <QuakeView vquake={data} onSelectView={quakeViewClear} />
        )}
      </div>

      {/* Display map as BG */}
      <div className="Background z-n1">
        <MapDisplay handleSelection={handleSelection} />
      </div>
    </>
  );
}

export default App;