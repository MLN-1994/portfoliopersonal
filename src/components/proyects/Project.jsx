import React from "react";
import dataprojects from "./../../data/dataprojects.json";
import { BsGithub } from "react-icons/bs";

export default function Project() {
  return (
    <>
      <div className="my-32">
        <div className="flex justify-center text-5xl px-2 py-2 my-6 font-medium font-fontTitle">
          Mis proyectos
        </div>

        <div className="grid md:grid-cols-2 w-2/3 mx-auto gap-8 ">
          {dataprojects.map((project) => (
            <>
              <div className="space-y-2 flex-col flex">
                <div className="">
                  <img
                    className="w-full rounded-md border border-neutral-300 h-48 object-fill "
                    src={project.image}
                    alt=""
                  />
                </div>
                <div className="text-xl font-bold text-neutral-800">
                  {project.title}
                </div>
                <div className=" font-light text-neutral-600 flex-grow">
                  {project.information}
                </div>
               <div className="">
               <div className="w-2">
                  <a href={project.github} target="_blank" rel="noreferrer"> 
                  <BsGithub className="text-lg" />
                  </a>
                </div>
               </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
