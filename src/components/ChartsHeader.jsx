import React from "react";

const ChartsHeader = ({ category }) => (
  <div className=" w-full bg-main-dark-bg ">
    <div>
      {/* <p className="text-lg text-center text-gray-400 w-full">Chart</p> */}
      <p className="text-3xl text-center font-extrabold p-3 tracking-tight  bg-main-dark-bg text-gray-200">
        {category}
      </p>
    </div>
  </div>
);

export default ChartsHeader;
