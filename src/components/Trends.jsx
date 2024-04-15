import React from "react";
import "../Stylings/trends.css";

const Trends = () => {
  return (
    <div className="gradient px-4 py-8 md:flex md:items-center lg:px-20">
      <div>
        <h2 className="font-semibold text-lg md:text-xl">DIGITAL TRENDS</h2>
        <div className="hidden md:block bg-primary w-72 h-0.5 my-2"></div>
        <h1 className="text-2xl text-gray-800 font-bold py-5 md:text-3xl md:py-8 lg:text-4xl">
          Web Design <span className="text-primary">Trends & 2024 </span>
          Insights To Know
        </h1>
        <button className="bg-primary text-white px-5 py-2 mb-8 mt-2 text-sm rounded md:text-lg md:px-12">
          DOWNLOAD NOW!
        </button>
      </div>
      <div>
        <img
          src="https://www.tekrevol.com/static/ebook-73b3c06360160e9d40567d3ba9acf105.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Trends;
