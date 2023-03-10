import React, { useEffect, useState } from "react";
import dataSkills from "../data/dataSkills.json";

import Modal from "./Modal";

function Skills() {
  const [activeModalIndex, setActiveModalIndex] = useState(-1);

  function handleOpenModal(index) {
    setActiveModalIndex(index);
  }

  function handleCloseModal() {
    setActiveModalIndex(-1);
  }

  const [datos, setDatos] = useState([]);

  console.log(datos);

  useEffect(() => {
    setDatos(dataSkills);
  }, []);

  return (
    <>
      <div className="flex justify-center text-3xl px-2 py-2 my-6 font-semibold font-fontTitle">Mis herramientas</div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  xl:grid-cols-7 gap-2 item-center p-2 mx-16 z-25 ">
        {datos.map((dato, index) => (
          <div
            className=" backdrop-filter bg-neutral-50 drop-shadow-2xl  opacity-70 rounded  hover:opacity-100 shadow-xl w-42 h-42  flex justify-center items-center p-4 transition ease-in 800"
            key={index}
          >
            <div className=" ">
              <img className="w-16 mb-4 " src={dato.image} alt="" />

              <div className="flex justify-center">
                <p className="text-black absolute bottom-0 font-bold opacity-90">
                  {dato.name}
                </p>
              </div>

              <div className=" absolute bottom-1 left-1">
                <button
                  className="bg-gray-600 text-white font-bold hover:bg-gray-800 transition ease-in 800 rounded-full h-8 w-8 "
                  onClick={() => handleOpenModal(index)}
                >
                  +
                </button>
                <Modal className=""
                  isOpen={activeModalIndex === index}
                  onClose={handleCloseModal}
                >
                  <p className="text-black font-semibold">{dato.description}</p>
                </Modal>
              </div>
              
            </div>
            
          </div>
          
        ))}
      </div>
      
    </>
  );
}

export default Skills;
