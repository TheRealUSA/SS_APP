import React from 'react';

function Inicio() {
  return (
    <div className="bg-cover bg-center h-screen z-1" style={{ backgroundImage: 'url("/Img/inicioFoto.jpg")' }}>
       <div className="bg-[#700E11] h-16"></div>
      <div className="flex flex-col justify-center items-center mt-20 text-white text-center">
        <h1 className="text-5xl mb-5 font-bold tracking-widest">
          ¡Afinemos tus Oportunidades!
        </h1>
        <h1 className='text-5xl mb-20 font-normal tracking-widest'>
        Conectando Músicos y Escenarios
        </h1>
        <p className="text-3xl mt-4 tracking-widest">
        "Simplificamos la búsqueda y contratación de 
        </p>
        <p className="text-3xl tracking-widest mb-5">
        músicos para eventos y colaboraciones"
        </p>
        <button className="bg-[#D1C6AE] hover:bg-zinc-100 text-black font-bold py-2 px-4 mt-6 rounded-full">
          Explorar ahora
        </button>
      </div>
    </div>
  );
}

export default Inicio;
