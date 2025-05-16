import React, { useState } from "react";
import "./Portfolio.css"; // Import the CSS file
import web1 from "/public/app1.webp";
// import web2 from "/public/app2.webp";
import web3 from "/public/app3.webp.png";

import web4 from "/public/app4.webp.png";


function Portfolio() {
  // Define an array of project data
  const projects = [

    {
      id: 4,
      imageUrl: web4,
      url: "https://apps.apple.com/in/app/tuco2/id6449526685",
    },
    {
      id: 3,
      imageUrl: web3,
      url: "https://apps.apple.com/in/app/bbz-sprachtestcenter/id1673687258",
    },
    {
      id: 2,
      imageUrl: web1,
      url: "https://apps.apple.com/in/app/chi-instabiz/id1198120162",
    },
    
    
    {
      id: 1,
      imageUrl: web1,
      url: "https://play.google.com/store/apps/details?id=com.religare&hl=en_IN",
    },
    {
    id: 0,
      imageUrl: web1,
      url: "https://play.google.com/store/apps/details?id=com.religare.healthinsurance&hl=en_IN",
    },
    
    // Add more projects as needed
  ];

  // State to manage hover effect for each project
  const [hoveredProject, setHoveredProject] = useState(null);

  // Event handlers
  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleClick = (url) => {
    // Navigate to the project URL
    window.open(url, "_blank");
  };

  return (
    <div className="bg-background portfolio text-foreground p-8 text-white h-full w-full ">
      <div className="h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full overflow-x-auto ">
        <h1 className="text-4xl font-extrabold mb-6">Portfolio</h1>
        {/* Project cards container with overflow hidden */}
        <div className="project-cards h-[95%] flex md:flex-row flex-col gap-6 p-2 items-center overflow-x-auto relative rounded-xl">
          {/* Map through projects array to render project cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`box project min-h-[40%] w-full md:h-[45%] md:min-w-[40%] bg-[#32323C] rounded-xl relative flex items-center justify-center ${
                hoveredProject === project.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(project.url)}
            >
              <img
                src={project.imageUrl}
                alt={`website${project.id}`}
                className={`h-[90%] w-[90%] rounded-xl transition-all duration-700 ${
                  hoveredProject === project.id ? "hovered-image" : ""
                }`}
              />
              {hoveredProject === project.id && (
                <div className="onclick absolute top-0 left-0 transition-all duration-1000">
                  <button
                    className="bg-[#2B2B2C] p-2 rounded-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(project.url);
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
