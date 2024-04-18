import React from "react";
import ClientSlider from "../Sliders/ClientSlider";
import "../Stylings/client.css";

const Clients = () => {
  return (
    <div className="w-full h-auto p-4">
      <div>
        <h1 className="py-4 text-3xl text-center font-bold md:text-4xl md:pb-20 lg:text-5xl lg:text-gray-800">
          Our Clients Love Our Work!
        </h1>
      </div>
      <ClientSlider>
        {/* 1st Client */}
        <div className="md:flex md:gap-10">
          <div>
            <h2 className="font-bold text-xl py-2 pt-4 md:text-2xl lg:text-3xl lg:text-gray-800">
              Cristina Soomro
            </h2>
            <span className="text-gray-400 font-semibold text-md lg:text-lg">
              The Veteran App, Co-Founder
            </span>
            <p className="py-4 text-sm lg:text-lg">
              “Tekrevol has been amazing…it’s a very big project so they break
              it down into chunks and just perform. I can’t recommend them
              enough.”
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vZgyWfmw_Kw?si=pFMR4xlOWI1kwK2I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
        </div>
        {/* 2nd Client */}
        <div className="md:flex md:gap-10">
          <div>
            <h2 className="font-bold text-xl py-2 pt-4 md:text-2xl lg:text-3xl lg:text-gray-800">
              Micheal Baroch
            </h2>
            <span className="text-gray-400 font-semibold text-md lg:text-lg">
              Oz Leasing, Owner
            </span>
            <p className="py-4 text-sm lg:text-lg">
              “Tekrevol has been amazing…it’s a very big project so they break
              it down into chunks and just perform. I can’t recommend them
              enough.”
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Jw7s42Op2ao?si=2nhMY-DxrIZH43jq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
        </div>
        {/* 3rd Client */}
        <div className="md:flex md:gap-10">
          <div>
            <h2 className="font-bold text-xl py-2 pt-4 md:text-2xl lg:text-3xl lg:text-gray-800">
              {" "}
              Bob Lagari
            </h2>
            <span className="text-gray-400 font-semibold text-md lg:text-lg">
              TalPool Holdings, Founder
            </span>
            <p className="py-4 text-sm lg:text-lg">
              “Tekrevol has been amazing…it’s a very big project so they break
              it down into chunks and just perform. I can’t recommend them
              enough.”
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ppawFI1u6Po?si=e4u4niyEf-rwdZgZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
        </div>
      </ClientSlider>
    </div>
  );
};

export default Clients;
