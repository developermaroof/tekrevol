import React from "react";

const SkillsMobile = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="font-bold text-skillsHeading text-2xl">
        Tech-stack for Our Website Development Firm
      </h1>
      <p className="py-6 text-sm text-gray-700">
        As an experienced website development firm, we understand the
        significance of the latest technologies to give a competitive edge to
        clients in the market. We deploy evolving technologies to build
        innovative web solutions ensuring rich feature-based functionalities.
      </p>
      <h2 className="font-bold text-lg text-skillsHeading">Front-end</h2>
      <ul className="px-4 text-sm list-disc my-2">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>jQuery</li>
        <li>Angular</li>
      </ul>
      <h2 className="font-bold text-lg text-skillsHeading">Back-end</h2>
      <ul className="px-4 text-sm list-disc my-2">
        <li>PHP (Laravel)</li>
        <li>Java</li>
        <li>Ruby</li>
        <li>C#</li>
        <li>Angular</li>
      </ul>
      <h2 className="font-bold text-lg text-skillsHeading">Databases</h2>
      <ul className="px-4 text-sm list-disc my-2">
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Oracle Database</li>
      </ul>
      <h2 className="font-bold text-lg text-skillsHeading">Tools</h2>
      <ul className="px-4 text-sm list-disc my-2">
        <li>Sublime Tex</li>
        <li>Visual Studio Code</li>
        <li>Atom</li>
        <li>CodePen</li>
      </ul>
      <h2 className="font-bold text-lg text-skillsHeading">
        Operating Systems
      </h2>
      <ul className="px-4 text-sm list-disc my-2 mb-6">
        <li>Microsoft Windows</li>
        <li>macOS</li>
        <li>Linux</li>
      </ul>
    </div>
  );
};

export default SkillsMobile;
