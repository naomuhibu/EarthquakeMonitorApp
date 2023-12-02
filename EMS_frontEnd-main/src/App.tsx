import {useState } from "react";
import "./App.css"; // Import CSS file
import QuakeList from "./components/QuakeList";
import QuakeView from "./components/QuakeView";
import MapDisplay from "./components/MapDisplay";
//import Header from "./components/Header";
import { useEarthquakeData } from "./components/getQuakes"; // Changed from useGeoNetData to useEarthquakeData

function App() {
  const [data, setData] = useState(null); // [activeQuake, setActiveQuake]
  const quakes = useEarthquakeData(); // Fetch quake data with the custom hook
  const [quakeViewVisible, setQuakeViewVisible] = useState(true); // QuakeView


  // Display Quake Data in popup
  const handleSelection = (newData: any) => {
    if (newData && newData.lat !== undefined && newData.lng !== undefined) {
      console.log("quake data: ", newData);
      setData(newData);
      setQuakeViewVisible(true);
    } else {
      console.error("Invalid quake data:", newData);
    }
  }; 

  const quakeViewClear = () => {
    setData(null); // setActiveQuake
    setQuakeViewVisible(false); 
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
          <QuakeList quakes={quakes} onSelectQuake={handleSelection}/>
        </div>
        {/* View Quake Data in centre of screen when selected */}
          <QuakeView vquake={data} onSelectView={quakeViewClear} onMarkerSelect={handleSelection} isVisible={quakeViewVisible} /> 
      </div>

      {/* Display map as BG */}
      <div className="Background z-n1">
        <MapDisplay handleSelection={handleSelection}/>
      </div>
    </>
  );
}

export default App;