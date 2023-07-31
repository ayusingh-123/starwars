import React from "react";
import "../styles/dropmenu.css";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
const Dropmenu = ({ toggle, action }) => {
  const dropdownItem = [
    {
      name: "View",
      icon: <AiOutlineEye />,
    },
    {
      name: "Download",
      icon: <AiOutlineDownload />,
    },
    {
      name: "Rename",
      icon: <AiOutlineDownload />,
    },
    {
      name: "Share Link",
      icon: <AiOutlineDownload />,
    },
    {
      name: "Move",
      icon: <AiOutlineDownload />,
    },
    {
      name: "Mark Private",
      icon: <AiOutlineDownload />,
    },
    {
      name: "Delete",
      icon: <AiOutlineDownload />,
    },
  ];
  return (
    <div>
      <div className="option" onClick={action}>
        <ul>
          {dropdownItem.map((item, index) => {
            return (
              <div className="list">
                <span>{item.icon}</span>
                <li>{item.name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropmenu;
