import React, { useState, useEffect } from "react";
import "../styles/slidebar.css";

function Slidebar({ dong }) {
  return (
    <div className="resource-sidebar">
      <div className="t1">Details</div>
      <div className="t2">
        {dong.map((item) => (
          <div className="t2">
            <img src="" alt="" />
            <span>Title</span>
            <div className="tour">{item.title}</div>
            <span>Opening Crawl</span>
            <div className="tour">{item.opening_crawl}</div>
            <span>Director</span>
            <div className="tour">{item.director}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slidebar;
