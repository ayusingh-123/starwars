import React, { useState } from "react";
import "../styles/films.css";
import List from "../pages/List";
import Filmgrid from "../pages/Filmgrid";
import ToggleSwitch from "./ToggleSwitch";
function Species() {
  const val = "species";
  const [isGridMode, setIsGridMode] = useState(true);

  const handleViewChange = (isGrid) => {
    setIsGridMode(!isGrid);
  };
  return (
    <div className="Main">
      <div className="Up">
        <div className="grid-item">Species</div>
        <div className="grid-item2">
          <div>
            <ToggleSwitch onChange={handleViewChange} />
          </div>
        </div>
      </div>

      <div className="Down">
        {isGridMode ? <List value={val} /> : <Filmgrid value={val} />}
      </div>
    </div>
  );
}

export default Species;
