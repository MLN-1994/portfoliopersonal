import React, { useEffect, useState } from "react";
import dataSkills from "../../data/dataSkills.json";



function Skills() {
  

  const [datos, setDatos] = useState([]);

  console.log(datos);

  useEffect(() => {
    setDatos(dataSkills);
  }, []);

  return (
    <>
      <div className="my-32">
        <div className="flex justify-center text-5xl px-2 py-2 my-6 font-medium font-fontTitle">
          Mis herramientas
        </div>

        <div className="grid w-2/3 mx-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-2 item-center    ">
          {datos.map((dato, index) => (
            <div
              className=" border border-neutral-200 shadow-md hover:shadow-lg hover:border-neutral-300  bg-white   rounded-md   w-42 h-42  flex justify-center  py-12 items-center p-4 transition duration-150"
              key={index}
            >
              <div className="space-y-4 ">
                <div className="flex justify-center">
                  <div className="">
                  <img className="w-16  " src={dato.image} alt="" />
                  </div>
                </div>
                

                <div className="flex justify-center">
                  <p className="text-black  font-bold opacity-90">
                    {dato.name}
                  </p>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
