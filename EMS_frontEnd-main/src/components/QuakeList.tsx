interface Quake {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}

interface QuakeListProps {
  quakes: Quake[];
  onSelectQuake: (quake: Quake) => void;
}

import { useState } from "react";

const QuakeList: React.FC<QuakeListProps> = ({ quakes, onSelectQuake}) => {
  // Hook
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  const handleClick = (index: number, quake: Quake) => {
    setSelectedIndex(index);
    onSelectQuake(quake);
  };

  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <>
      {/* <FontAwesomeIcon icon="fa-solid fa-bell" /> */}
      <button className="" onClick={toggleComponentVisibility}>
        {isComponentVisible ? "Hide" : "Show"} List
      </button>
      {isComponentVisible && (
        <div
          className="col-md-3 vh-100 mt-5 bg-light rounded shadow"
          style={{ position: "fixed", top: 0, left: 0, overflowY: "auto" }}
        >
          <h1>Quakes List</h1>
          {quakes.length === 0 && <p>No quakes to display</p>}
          <ul className="list-group">
            {quakes.map((quake, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "alert alert-primary" // Active
                    : hoverIndex === index
                    ? "alert alert-dark"
                    : "alert alert-warning"
                }
                onMouseEnter={() => {
                  setHoverIndex(index);
                }}
                onMouseLeave={() => {
                  setHoverIndex(-1);
                }}
                onClick={() => {
                  handleClick(index, quake);
                }}
                key={index}
              >
                {quake.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default QuakeList;