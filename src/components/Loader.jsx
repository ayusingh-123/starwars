import React from "react";
import "../styles/loading.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loading-container">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
