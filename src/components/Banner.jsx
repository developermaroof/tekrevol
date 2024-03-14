import React from "react";

const Banner = () => {
  return (
    // Banner
    <div className="pb-4 font-sans bg-black text-white sm:flex sm:flex-row">
      {/* Intro */}
      <div className="px-4 sm:px-8 lg:px-20 xl:px-28  sm:justify-center  sm:flex sm:flex-col ">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl flex flex-wrap">
          <span className="text-primary">#1WEB </span>
          DEVELOPMENT COMPANY
        </h1>
        <p className="text-xs sm:text-sm py-4">
          Transformative builders of innovation. We shape technology into
          revolutionary web experiences, fueled by your unique vision.
        </p>
        <button className="bg-primary rounded-md py-1 px-8  sm:py-2 sm:w-44">
          LET'S TALK
        </button>
      </div>

      {/* Form */}
      <div className="px-4 flex justify-center items-center ">
        <div className="bg-white w-64 md:w-80 px-10 py-6 rounded-xl text-black my-8 mx-4 sm:mx-8 lg:mx-20 xl:mx-28 flex justify-center items-center">
          <form className="flex flex-col justify-center items-center">
            <h2 className="font-semibold text-md text-center mx-auto mb-4">
              Let's Start a Project Together
            </h2>
            <div className="bg-primary rounded text-primary h-0.5 w-44 sm:w-44 lg:w-48 mt-1 mb-4 mx-auto"></div>
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs text-left"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs text-left"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs text-left"
              type="text"
              placeholder="Number"
            />
            <input
              className="p-2 pl-0 w-full mb-2 border-b border-gray-500 sm:border-b-1.5 sm:border-orange-500 text-xs text-left"
              type="text"
              placeholder="Describe Your Project Need."
            />
            <button className="text-white bg-primary rounded-md py-1.5 w-full mt-5 mb-1">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
