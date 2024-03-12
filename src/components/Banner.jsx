import React from "react";

const Banner = () => {
  return (
    <div className="px-4 pb-4 sm:px-8 lg:px-20 xl:px-28 font-sans bg-black text-white">
      {/* Intro */}
      <div>
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
      <div className="bg-white text-black my-8 flex flex-cols justify-center items-center">
        <form className="flex flex-col justify-center items-center">
          <h2>Let's Start a Project Together</h2>
          <div className="bg-primary h-1 my-1"></div>
          <input className="border" type="text" placeholder="Full Name" />
          <input className="border" type="text" placeholder="Full Name" />
          <input className="border" type="text" placeholder="Full Name" />
          <input className="border" type="text" placeholder="Full Name" />
          <button className="text-white bg-primary">Let's Talk</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
