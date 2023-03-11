import React, { useEffect, useState } from "react";
import dataprojects from "../../data/dataprojects.json";

const Project = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
    
    <div
      className="relative h-60"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-center text-center items-center">
        <p className="text-2xl font-semibold opacity-50" >{project.title}</p>
        </div>
      
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center ${hover ? "opacity-100" : "opacity-0"} transition duration-500`}>
        <div className="text-white font-semibold text-center p-4">
          
          <p>{project.information}</p>
          <div className="m-6">
          <a href={project.link} className="text-red-500 hover:text-red-700">{project.link}</a>
          <br />
          <a href={project.github} className="text-red-500 hover:text-red-700">{project.github}</a>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default function MyProyects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(dataprojects);
  }, []);

  return (
    <>
    <div className=" flex justify-center ">
      <p className="text-3xl px-2 py-2 my-6 font-medium font-fontTitle">Mis Proyectos</p>
    </div>
    <div className="p-10 grid gap-2 ">
      {projects.map((project) => (
        <div key={project.id}>
          <Project project={project} />
        </div>
      ))}
    </div>
    </>
  );
}



