import React, { useState } from "react";
import "../styles/toggleswitch.css";

const ToggleSwitch = ({ onChange }) => {
  const [isGrid, setIsGrid] = useState(false);

  const handleToggle = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
    onChange(!isGrid);
  };

  return (
    <label>
      <input type="checkbox" checked={!isGrid} onChange={handleToggle} />
      <div className="slider">
        <img
          className="icon1"
          src="https://img.icons8.com/ios-filled/50/000000/health-data.png"
          alt=""
        />
        <img
          className="icon2"
          src="https://img.icons8.com/hatch/64/list.png"
          alt=""
        />
      </div>
    </label>
  );
};

export default ToggleSwitch;
