import React from 'react';

const HeroBanner = ({ title, content, image, bgImage, bgColor, flipColumn }) => {
  const columnDirection = flipColumn ? 'md:flex-row-reverse' : 'md:flex-row';
  const imgStyles = 'object-cover object-center w-full h-full md:h-auto';

  // Determinar el color de fondo y la opacidad
  const fondoEstilos = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundColor: '',
    opacity: 1, // Cambiado a 0.6 para la opacidad
  } : {
    backgroundImage: `none`, // Cambiado para limpiar el background image cuando no hay bgImage
    backgroundColor: `#${bgColor}`,
    opacity: 1,
  };

  return (
    <div className="py-20" style={{ ...fondoEstilos }}>
      <div className={`container mx-auto md:flex-row flex flex-col items-center justify-center gap-8 px-6 ${columnDirection}`}>
        <div className="flex flex-col w-full md:w-6/12 mb-8 md:mb-0 md:mr-6">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-8">{content}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-6/12">
          <img src={image} alt="Hero" className={imgStyles} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
