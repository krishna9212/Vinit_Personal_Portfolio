import React from "react";
import ResumePDF from "./../assets/Vinit-5_years_flutter.pdf";

function Resume() {
  return (
    <div className="bg-background text-foreground overflow-hidden  p-8 text-white h-full w-full">
      <div className="h-[10%] md:h-[5%] w-full text-transparent overflow-hidden">
        .
      </div>
      <div className="main-content md:h-[90%] overflow- h-[95%] w-full flex flex-col-reverse gap-32 md:gap-20 ">
        <div className="btn w-full  h-[80%] flex items-center justify-center p-4">
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#2B2B2C] p-4 px-10 rounded-xl text-white transition-all duration-500 active:bg-[#333334]">
              Click
            </button>
          </a>
        </div>
        <div className="text-content h-[20%]">
          <h1 className="text-4xl font-extrabold mb-6">Resume</h1>
          <p className="text-lg font-light leading-7 tracking-wide">
            Learn More About Me... Curious about my skills and projects?
            <br /> Check out my resume for a detailed look at what I can do.
            <br /> Click the button below to view and download my resume in PDF
            format.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
