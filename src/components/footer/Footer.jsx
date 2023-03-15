import React from "react";


function Footer() {
  return (
    <footer className="bg-gray-800 py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 text-center">
            <p className="text-white">&copy; {new Date().getFullYear()} Mariano Langge. Todos los derechos reservados.</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
           
            <p className="text-white">marianolangge@gmail.com</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <p className="text-white">Teléfono: +549-2314610301</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
