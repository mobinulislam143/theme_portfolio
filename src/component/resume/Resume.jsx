import React, { useEffect, useState } from "react";
import { HiMiniBriefcase } from "react-icons/hi2";
import { AiFillBank } from "react-icons/ai";
import './resume.css'
import { BsCreditCard2Front } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { TbLanguageHiragana } from "react-icons/tb";
import { Reorder } from "framer-motion";


const Resume = () => {

  const languages = [
    { name: 'Bangla', level: 10 },
    { name: 'English', level: 7 },
    { name: 'Hindi/Urdu', level: 8 },
  ];

 const eduData = [
  {
    passingyear: "2020",
    institute: "Eidgah Adarsha Shiksha Niketon",
    result: "4.39",
    degree: "SSC"
  },
  {
    passingyear: "Last Semister",
    institute: "Cox'sBazar Polytechnic Institute",
    result: "pending",
    degree: "Diploma in Computer Engineering"
  }
 ]
 const expData = [
  {
    duration: "01/07/2024-30/9/2024",
    company: "Universe Soft Tech",
    position: "Mern Stack Developer",
    desc: "Responsible for developing and maintaining web applications using the MERN stack, collaborating with cross-functional teams to deliver high-quality products."
  },
  {
    duration: "2023 - 20224",
    company: "Ostad Ltd",
    position: "Full Stack Developer (MERN)",
    desc: "Completed Full Stack Development course specializing in MERN stack technologies, focusing on building scalable web applications."
  }
 ]
 const frontSkillData = [
  {
    skillName: "Html, Css",
    percentage: "100",
  },
  {
    skillName: "Javascript",
    percentage: "70",
  },
  {
    skillName: "React",
    percentage: "90",
  },
  {
    skillName: "Redux",
    percentage: "80",
  },
  {
    skillName: "Zustand",
    percentage: "100",
  },
  {
    skillName: "RTK",
    percentage: "100",
  },
  {
    skillName: "Next.js",
    percentage: "80",
  },
 
 ]
 const backendSkillData = [
  {
    skillName: "Node.js",
    percentage: "90",
  },
  {
    skillName: "Express.js",
    percentage: "80",
  },
  {
    skillName: "Rest Api",
    percentage: "90",
  },
  {
    skillName: "MongoDB",
    percentage: "80",
  },
  {
    skillName: "Git, Github",
    percentage: "100",
  },
  {
    skillName: "Vercel / Netlify / AWS",
    percentage: "80",
  },
  {
    skillName: "Python",
    percentage: "60",
  },
 
 ]

  const [loading, setLoading] = useState(true); // Initial state set to true for loading

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // After fetching data, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="h-[600px] card bg-bg_primary shadow-lg rounded-md  overflow-y-auto overflow-x-hidden">


      <div className="p-5">
        <h1 className="text-bg_secondary text-xl font-bold"><span className="text-white">R</span>esume</h1>
      </div>
      <hr />


      <div className="grid lg:grid-cols-2 grid-cols-1 pt-5 items-start p-5">


        <div className="border-r px-1 pb-2 ">
          <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
            <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
              <AiFillBank className="text-4xl text-bg_secondary" />
            </div> EDUCATION</p><hr />


          {!eduData || eduData.length === 0 ? (<p>Sorry, I can't find any education level</p>) : (
            eduData.map((item, index) => (
              <div key={index} data-aos="fade-right" className="col border-b py-4">
                <div className="inline-block px-2 text-sm mt-2 bg-transparent border border-bg_secondary rounded-none text-bg_secondary">{item.passingyear}</div>

                <h2 className="text-text_color_light py-3 text-lg font-semibold">{item.institute}</h2>
                <p className="text-text_color_dark text-sm ">Result: {item.result}</p>
                <p className="text-text_color_dark text-sm">{item.degree}</p>
              </div>

            ))

          )}



        </div>


        <div className="border-r border-b px-1 pb-2 ">

          <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
            <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
              <HiMiniBriefcase className="text-4xl text-bg_secondary" />
            </div>EXPERIENCE</p><hr />


          {!expData || expData.length === 0 ? (<p>Sorry, I can't find any experience level</p>) : (
            expData.map((item, index) => (
              <div key={index} className="col  py-4" data-aos="fade-left">
                <div className="inline-block px-2 text-sm mt-2 bg-transparent border border-bg_secondary rounded-none text-bg_secondary">{item.duration}</div>

                <h2 className="text-text_color_light py-3 text-lg font-semibold">{item.company}</h2>
                <p className="text-text_color_dark text-sm ">Position: {item.position}</p>
                <p className="text-text_color_dark text-sm">{item.desc}</p>
              </div>

            ))

          )}

        </div>



      </div>

      <div className="p-5">
        <h1 className="text-bg_secondary text-xl font-bold">My <span>Skills</span></h1>
      </div>
      <hr />
      <div className="my-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-5 items-start p-5">

          <div className="border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <BsCreditCard2Front className="text-4xl text-bg_secondary" />
              </div> Frontend</p><hr />


            <div className="grid grid-cols-2 items-start border-b py-4">

              {loading ? (
                // Show skeletons while loading
                <div className="grid grid-cols-2 gap-4"> {/* Use grid layout for two columns */}
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="text-center"> {/* Remove margins */}
                      <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-text_color_dark"></div>
                      <p className="text-xs text-text_color_dark">Loading...</p>
                    </div>
                  ))}
                </div>
              ) : (
                frontSkillData && frontSkillData.length > 0 ? (
                  frontSkillData.map((skill, index) => (
                    <div key={index} data-aos="fade-up" className="text-center mx-auto  p-2">
                      <div
                        className="radial-progress text-bg_secondary"
                        style={{ "--value": skill.percentage }}
                        role="progressbar"
                      >
                        {skill.percentage}%
                      </div>
                      <p className="text-lg text-text_color_dark">{skill.skillName}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center col-span-2">No skills available.</p>
                )
              )}

            </div>

          </div>
          <div className="px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <LuBrainCircuit className="text-4xl text-bg_secondary" />
              </div> Knowledge</p><hr />
            <div className="col border-b py-4">
              <div className="flex flex-col space-y-6">
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />Responsive and mobile-ready
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />GraphCMS Development
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />Full-stack web app
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />API Integration
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />Authentication
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />Database Integration
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />W3C validated coding
                </p>
                <p className="flex items-center gap-2 text-text_color_dark">
                  <FaCheck className="text-bg_secondary" />MERN or T3 stack
                </p>
              </div>
            </div>

          </div>


          <div className="border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <FaServer className="text-4xl text-bg_secondary" />
              </div> Backend</p><hr />
            <div className="col border-b py-4">

              {loading ? (
                // Show skeletons while loading
                <div className="flex flex-col space-y-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="skeleton mb-4 bg-text_color_dark h-4 w-full"></div>
                  ))}
                </div>

              ) : (
                <Reorder.Group 
      axis="y" 
      values={backendSkillData} 
      onReorder={(newOrder) => console.log(newOrder)}
    >
      {backendSkillData && backendSkillData.length > 0 ? (
        backendSkillData.map((skill, index) => (
          <Reorder.Item key={skill.skillName} value={skill} id={skill.skillName}>
            <div className="pb-3" data-aos="fade-up">
              <div className="flex justify-between mb-1 cursor-pointer">
                <span className="text-base font-medium text-text_color_light dark:text-white">
                  {skill.skillName}
                </span>
                <span className="text-sm font-medium text-text_color_dark dark:text-white">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-bg_secondary h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }} // Note the corrected template literal
                ></div>
              </div>
            </div>
          </Reorder.Item>
        ))
      ) : (
        <p className="text-center col-span-2">No skills available.</p>
      )}
    </Reorder.Group>
              )}



            </div>
          </div>
          <div className="border-r px-1 pb-2 ">
            <p className="text-xl flex items-center gap-2 text-text_color_light pb-3">
              <div className="border-2 w-16 h-16 border-bg_secondary p-3 rounded-full">
                <TbLanguageHiragana className="text-4xl text-bg_secondary" />
              </div> Language</p><hr />
            {languages.map((language, index) => (
              <div key={index} className="flex items-center mb-2 mt-4">
                <span className="text-white mr-4">{language.name}</span>
                <div className="flex">
                  {[...Array(10)].map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-3 w-3 rounded-full mx-0.5 ${idx < language.level ? 'bg-yellow-500' : 'bg-gray-600'
                        }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      <div className="p-5">
        <h1 className="text-text_color_light text-xl font-bold">Quote</h1>
      </div>
      <hr />

      <div className=" py-4" data-aos="fade-up">
        <p className="text-center text-text_color_dark" >“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”</p>
      </div>

    </div>
  );
};

export default Resume;
