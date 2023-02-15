import React, { useEffect, useState } from 'react';
import dataSkills from '../data/dataSkills.json';

function Skills() {
  const [datos, setDatos] = useState([]);
console.log(datos)
  useEffect(() => {
    setDatos(dataSkills);
  }, []);

  return (
    <div className='grid grid-cols-6'>
      {datos.map((dato, index) => (
        <div key={index}>
          <p>{dato.name}</p>
          <p>{dato.image}</p>
          <p>{dato.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;