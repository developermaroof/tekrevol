import React from "react";

const Banner = () => {
  return (
    // Banner
    <div class="pb-4 font-sans bg-black text-white">
      {/* Intro */}
      <div class="px-4 sm:px-8 lg:px-20 xl:px-28">
        <h1 class="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-wrap">
          <span class="text-primary">#1WEB </span>
          DEVELOPMENT COMPANY
        </h1>
        <p class="text-xs py-4">
          Transformative builders of innovation. We shape technology into
          revolutionary web experiences, fueled by your unique vision.
        </p>
        <button class="bg-primary rounded-md py-1 px-8 sm:px-12">
          LET'S TALK
        </button>
      </div>

      {/* Form */}
      <div class="bg-white p-5 py-6 rounded-xl text-black my-8 mx-4 sm:mx-8 lg:mx-20 xl:mx-28">
        <form class="flex flex-col justify-center items-center">
          <h2 class="font-semibold text-md text-center mx-auto mb-4">
            Let's Start a Project Together
          </h2>
          <div class="bg-primary text-primary h-0.5 w-44 sm:w-32 lg:w-48 my-2 mx-auto"></div>
          <input
            class="p-2 pl-0 w-full mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Full Name"
          />
          <input
            class="p-2 pl-0 w-full mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Email"
          />
          <input
            class="p-2 pl-0 w-full mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Number"
          />
          <input
            class="p-2 pl-0 w-full mb-2 border-b border-gray-500 text-xs text-left"
            type="text"
            placeholder="Describe Your Project Need."
          />
          <button class="text-white bg-primary rounded-md py-1.5 w-full mt-5 mb-1">
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
