import React from "react";

const Section1 = () => {
  return (
    <div className="part1">
      <div className="part1-content">
        <h1>MAKE YOUR RIDE AT LOW COST</h1>
        <p>Book your ride now, where you can travel at a low cost and also feel secure.This is the place where you can travel with someone who is going on your way this also reduce your cost of ride. </p>
        <div className="part1-btn">
            <button className="btn-1">Book your ride now</button>
            <button className="btn-2">Install app</button>
        </div>
        <div className="part1-avail">
            <p>Also avaliable on</p>
            <div className="part1-source">
                <img src="./Media/playstore.png" alt="" />
                <img src="./Media/appstore.png" alt="" />
            </div>
        </div>
      </div>
      <div className="part1-image"> 
      <img src="./Media/taxi.png" alt="" /></div>
    </div>
  );
};

export default Section1;
