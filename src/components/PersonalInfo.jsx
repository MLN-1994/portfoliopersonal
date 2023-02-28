import React from "react";

export default function PersonalInfo() {
  return (
    <>
      <div className="flex justify-center text-3xl px-2 py-2 my-4">
        <p>Sobre mi</p>
      </div>

      <div className="flex justify-center my-6 mx-4">
        <div className="   p-4   h-64 overflow-auto backdrop-filter  drop-shadow-4xl text-black  opacity-70 rounded  hover:opacity-100 shadow-xl">
          <p className="p-4  whitespace-pre-line font-semibold">
            Soy un desarrollador frontend junior de 28 años apasionado por crear
            interfaces de usuario atractivas y funcionales. Me encanta aprender
            nuevas tecnologías y experimentar con diseños innovadores para
            mejorar la experiencia del usuario. Mi experiencia incluye el
            desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y
            frameworks como React. Además, tengo habilidades en la resolución de
            problemas, trabajo en equipo y comunicación efectiva. Siempre estoy
            buscando oportunidades para crecer y mejorar mis habilidades en el
            campo del desarrollo frontend. Otros de mis pasatiempos son jugar al
            ajedrez y tocar la guitarra.
          </p>
        </div>
      </div>
    </>
  );
}
