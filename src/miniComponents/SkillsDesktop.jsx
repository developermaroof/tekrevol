import React, { useState } from "react";

const SkillsDesktop = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showDatabases, setShowDatabases] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showOperatingSystems, setShowOperatingSystems] = useState(false);

  const toggleVisibility = (list) => {
    switch (list) {
      case "frontend":
        setShowFrontend(!showFrontend);
        break;
      case "backend":
        setShowBackend(!showBackend);
        break;
      case "databases":
        setShowDatabases(!showDatabases);
        break;
      case "tools":
        setShowTools(!showTools);
        break;
      case "operatingSystems":
        setShowOperatingSystems(!showOperatingSystems);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-center items-center w-full gap-10">
        <div className="w-1/2">
          <h1 className="font-bold text-skillsHeading text-3xl">
            Tech-stack for Our Website Development Firm
          </h1>
        </div>
        <div className="w-1/2">
          <p className="py-6 text-xs text-gray-600">
            As an experienced website development firm, we understand the
            significance of the latest technologies to give a competitive edge
            to clients in the market. We deploy evolving technologies to build
            innovative web solutions ensuring rich feature-based
            functionalities.
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        <h2
          className="font-bold text-lg text-skillsHeading cursor-pointer"
          onClick={() => toggleVisibility("frontend")}
        >
          Front-end
        </h2>
        {showFrontend && (
          <ul className="px-4 text-sm list-disc my-2">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Angular</li>
          </ul>
        )}
      </div>
      <div className="flex flex-row">
        <h2
          className="font-bold text-lg text-skillsHeading cursor-pointer"
          onClick={() => toggleVisibility("backend")}
        >
          Back-end
        </h2>
        {showBackend && (
          <ul className="px-4 text-sm list-disc my-2">
            <li>PHP (Laravel)</li>
            <li>Java</li>
            <li>Ruby</li>
            <li>C#</li>
            <li>Angular</li>
          </ul>
        )}
      </div>
      <div className="flex flex-row">
        <h2
          className="font-bold text-lg text-skillsHeading cursor-pointer"
          onClick={() => toggleVisibility("databases")}
        >
          Databases
        </h2>
        {showDatabases && (
          <ul className="px-4 text-sm list-disc my-2">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Oracle Database</li>
          </ul>
        )}
      </div>
      <div className="flex flex-row">
        <h2
          className="font-bold text-lg text-skillsHeading cursor-pointer"
          onClick={() => toggleVisibility("tools")}
        >
          Tools
        </h2>
        {showTools && (
          <ul className="px-4 text-sm list-disc my-2">
            <li>Sublime Tex</li>
            <li>Visual Studio Code</li>
            <li>Atom</li>
            <li>CodePen</li>
          </ul>
        )}
      </div>
      <div className="flex flex-row">
        <h2
          className="font-bold text-lg text-skillsHeading cursor-pointer"
          onClick={() => toggleVisibility("operatingSystems")}
        >
          Operating Systems
        </h2>
        {showOperatingSystems && (
          <ul className="px-4 text-sm list-disc my-2 mb-6">
            <li>Microsoft Windows</li>
            <li>macOS</li>
            <li>Linux</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SkillsDesktop;
