import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16 min-h-screen flex flex-col">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="flex-1 w-full">
        <p className="text-gray-700 font-medium">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* Cards Wrapper */}
      <div className="card-wrapper flex flex-1 flex-col sm:flex-row sm:gap-5 mt-5">
        {/* Experience */}
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2 flex-1 flex flex-col justify-between"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative flex-1 flex items-center">
              {/* Design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* Experience Content */}
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg flex-1">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  NSS (National Service Scheme)
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2024 - Present
                </span>
                <p className="text-[.9rem] text-justify break-words text-gray-500">
                  As a Frontend Developer for the NSS website, I built and optimized the user interface using React, ensuring a responsive and seamless experience. I collaborated with the team to integrate APIs, maintained site features, and enhanced performance.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Education */}
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2 flex-1 flex flex-col justify-between"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative flex-1 flex items-center">
              {/* Design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* Education Content */}
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg flex-1">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Pune Institute of Computer Technology
                  <br />
                  <br />
                  Aggregate CGPA 4 Sem: <b>8.405</b>
                </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  HSC Percentage&nbsp;&nbsp;&nbsp;:&nbsp; 90.67% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - March 2022
                  <br />
                  SSC Percentage&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;94.40% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - March 2020
                  <br />
                  MHT CET&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;99.21%ile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - September 2022
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Academic Achievements */}
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2 flex-1 flex flex-col justify-between"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Academic Achievements
            </legend>
            <div className="relative flex-1 flex items-center">
              {/* Design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* Achievements Content */}
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg flex-1">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Notable Achievements
                </h1>
                <p className="text-[.9rem] text-justify text-gray-500">
                  Selected for the <b>National Smart India Hackathon</b> (intracollege), developing innovative solutions to real-world problems.
                  <br />
                  <b>Certified in Full Stack Development</b>, proficient in the MERN stack, ReactJS, and project management.
                  <br />
                  <b>Led NSS Volunteers</b>, collaborated with NGOs, and organized design projects and events.
                  <br />
                  <b>PICT EDC</b> On-Ground Lead at Ideathon, organizing and coordinating events.
                  <br />
                  Active <b>PICT IEEE</b> member, contributing to workshops and competitions.
                  <br></br>
                  State level basketball player
    
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
