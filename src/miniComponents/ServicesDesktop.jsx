import React from "react";
import "../Stylings/servicesDesktop.css";

const ServicesDesktop = () => {
  return (
    <div className="flex">
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="content w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col">
            <h1>adsdsd</h1>
            <p>asdasd</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="content w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col">
            <h1>adsdsd</h1>
            <p>asdasd</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="content w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col">
            <h1>adsdsd</h1>
            <p>asdasd</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="wrapper flex justify-center items-center flex-grow w-1/4">
        <div className="image w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/3415148/pexels-photo-3415148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="content w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col">
            <h1>adsdsd</h1>
            <p>asdasd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDesktop;
