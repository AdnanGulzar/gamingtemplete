import React from "react";
import "./gaming.css"
import GamingCard from "../gamingcard/GamingCard";
const GamingLibrary = () => {
  return (
    <div className="popular ">
      <h2>
        Your Gaming <span>Library</span>
      </h2>
      <div className="gamecont">
      <GamingCard/>
      <GamingCard/>
      <GamingCard/>
      <GamingCard/>
       
        <button>View Your Library</button>
      </div>
    </div>
  );
};

export default GamingLibrary;
