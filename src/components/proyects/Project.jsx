import React from "react";
import dataprojects from "../../data/dataprojects.json";

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
              <div className="space-y-2">
                <div className="">
                  <img
                    className="w-full rounded-md h-48 object-cover"
                    src={project.image}
                    alt=""
                  />
                </div>
                <div className="text-xl font-bold text-neutral-800">
                  {project.title}
                </div>
                <div className=" font-light text-neutral-600">
                  {project.information}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
