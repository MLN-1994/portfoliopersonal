import React, { useEffect, useState } from "react";
import dataprojects from "../data/dataprojects.json";

export default function MyProyects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(dataprojects);
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <div className="backdrop-filter bg-neutral-50 drop-shadow-2xl  opacity-70 rounded  hover:opacity-100 shadow-xl w-42 h-42   items-center p-4 transition ease-in 800">
            <p>{project.title}</p>
            <p>{project.information}</p>
            <a href={project.link}>{project.link}</a>
            <a>{project.github}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
