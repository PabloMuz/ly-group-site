import React from 'react';
import whatsapp from '../assets/whatsApp_icon.webp';

const MapSection = ({ title, titleCenter, content, content2, mapEmbedUrl, bgImage, bgColor, flipColumn, heroBanner }) => {
  const columnDirection = flipColumn ? "md:flex-row-reverse" : "md:flex-row";
  const titleAlignment = titleCenter ? "text-center" : "text-left";
  const heroSpacingTop = heroBanner ? "pt-40 pb-20" : "py-20";

  const bgStyles = bgImage ? { backgroundImage: `url(${bgImage})` } : { backgroundColor: `#${bgColor}` };

  return (
    <div className={heroSpacingTop} style={bgStyles}>
      <div className={`container mx-auto md:flex flex-col items-center justify-center gap-8 px-8 xl:px-20 ${columnDirection}`}>
        <div className="flex flex-col w-full md:w-6/12 mb-8 md:mb-0 md:mr-6">
          <div className="max-w-lg">
            <h2 className={`flex items-center justify-center text-4xl font-bold mb-4 ${titleAlignment}`}>{title}</h2>
  
            <h3 className={`text-2xl font-bold mb-4 ${titleAlignment}`}>Importaciones</h3>
            <div className="text-lg mb-8">{content}</div>

            <h3 className={`text-2xl font-bold mb-4 ${titleAlignment}`}>Exportaciones</h3>
            <div className="text-lg mb-8">{content2}</div>

          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-6/12">
          <div className="w-full h-96">
            <div className="flex space-x-1">
              <p className={`text-lg font-bold  ${titleAlignment}`}>Dirección: </p>
              <p className="text-lg "> Calle 52A No. 82A-62 OF 501 Bogotá D.C. </p>
            </div>
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg shadow-2xl"
              loading="lazy"
              allowFullScreen
              src={mapEmbedUrl}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
