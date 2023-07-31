import React, { useState } from "react";
import "../styles/films.css";
import Filmgrid from "../pages/Filmgrid";
import List from "../pages/List";
import Filmtoggle from "./Filmtoggle";

function Films() {
  const val = "films";
  const [isGridMode, setIsGridMode] = useState(true);

  const handleViewChange = (isGrid) => {
    setIsGridMode(isGrid);
  };
  return (
    <div className="Main">
      <div className="Up">
        <div className="grid-item">Films</div>
        <div className="grid-item2">
          <div>
            <Filmtoggle onChange={handleViewChange} />
          </div>
        </div>
      </div>

      <div className="Down">
        {isGridMode ? <Filmgrid value={val} /> : <List value={val} />}
      </div>
    </div>
  );
}

export default Films;
