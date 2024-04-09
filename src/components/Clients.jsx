import React from "react";
import ClientSlider from "../Sliders/ClientSlider";

const Clients = () => {
  return (
    <div className="w-full h-full p-4">
      <div>
        <h1 className="py-4 text-3xl text-center font-bold">
          Our Clients Love Our Work!
        </h1>
      </div>
      <ClientSlider>
        {/* 1st Client */}
        <div>
          <div>
            <h2 className="font-bold text-xl py-2 pt-4">Cristina Soomro</h2>
            <span className="text-gray-400 font-semibold text-md">
              The Veteran App, Co-Founder
            </span>
            <p className="py-4 text-sm">
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
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
        {/* 2nd Client */}
        <div>
          <div>
            <h2 className="font-bold text-xl py-2 pt-4">Micheal Baroch</h2>
            <span className="text-gray-400 font-semibold text-md">
              Oz Leasing, Owner
            </span>
            <p className="py-4 text-sm">
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
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
        {/* 3rd Client */}
        <div>
          <div>
            <h2 className="font-bold text-xl py-2 pt-4"> Bob Lagari</h2>
            <span className="text-gray-400 font-semibold text-md">
              TalPool Holdings, Founder
            </span>
            <p className="py-4 text-sm">
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
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </ClientSlider>
    </div>
  );
};

export default Clients;
