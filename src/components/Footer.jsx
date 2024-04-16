import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="text-white p-4 md:flex md:p-8 md:gap-10 md:items-center lg:px-20">
        {/*  */}
        <div className="md:flex md:flex-col">
          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">MIA</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            400 NW 26th St, Miami, FL 33127
          </p>

          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">DC</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            740 15th St NW 8th Floor, Washington, DC 20005
          </p>

          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">NYC</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            510 5th Ave 3rd Floor, New York,NY 10036
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">HOU</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            4201 Main St Suite # 200-122, Houston, TX 77002
          </p>

          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">SF</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            45 Tehama St, San Francisco, CA 94105
          </p>

          <h1 className="font-bold text-2xl py-3 md:mt-6 md:text-3xl">CHI</h1>
          <p className="text-sm pb-4 md:text-xs md:py-4 md:text-sm">
            222 W Merchandise Mart Plaza Floor 12, Suite 1212 Chicago, IL 60654
          </p>
        </div>
        {/*  */}
        <div className="mt-8 p-2">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
            Let's Start a Project Together
          </h1>

          <div className="bg-primary w-48 h-0.5 my-4"></div>
          <p className="text-sm md:text-md lg:text-lg">
            Let’s discuss your project and find out how we can help you scale!
          </p>
          <form className="mt-4 flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
            />
            <input
              type="number"
              placeholder="Number"
              className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="border-b border-white outline-none placeholder-gray-900 text-sm py-2 w-full bg-transparent md:mt-4 md:text-md lg:text-lg"
              rows="4"
            ></textarea>
            <button className="rounded bg-primary p-2 mt-6 text-center items-center justify-center lg:text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="text-white p-4 flex text-center justify-center items-center">
        <p className="text-xs md:text-sm lg:text-lg">
          COPYRIGHT 2024 TEKREVOL ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
