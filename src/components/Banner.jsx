import React from "react";

const Banner = () => {
  return (
    <div className=" pb-4  font-sans bg-black text-white">
      {/* Intro */}
      <div className="px-4 sm:px-8 lg:px-20 xl:px-28">
        <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-wrap">
          <span className="text-primary">#1WEB</span>
          DEVELOPMENT COMPANY
        </h1>
        <p className="text-xs py-4">
          Transformative builders of innovation. We shape technology into
          revolutionary web experiences, fueled by your unique vision.
        </p>
        <button className="bg-primary rounded-md py-1 px-12">LET'S TALK</button>
      </div>
      {/* Form */}
      <div className="bg-white p-5 py-6 rounded-xl text-black my-8 flex flex-cols justify-center items-center mx-4 sm:mx-8 lg:mx-20 xl:mx-28">
        <form className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-md text-center mx-auto">
            Let's Start a Project Together
          </h2>
          <div className="bg-primary text-primary h-0.5 w-48 my-4"></div>
          <input
            className="p-2 pl-0 w-48  pr-0 mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-2 pl-0  w-48 pr-0 mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 pl-0 w-48 pr-0 mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Number"
          />
          <input
            className="p-2 pl-0 w-48 pr-0 mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Describe Your Project Need."
          />
          <button className="text-white bg-primary rounded-md py-1.5 w-48 mt-5 mb-1">
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
