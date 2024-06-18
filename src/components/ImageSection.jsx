const HeroBanner = ({ title, titleCenter, content, image, bgImage, bgColor, flipColumn }) => {
  const columnDirection = flipColumn ? "md:flex-row-reverse" : "md:flex-row";
  const titleAlignment = titleCenter ? "text-center" : "text-left";
  const imgStyles =
    "object-cover object-center w-full h-full md:h-auto rounded-lg shadow-2xl";

  // Determinar el color o imagen de fondo
  const bgStyles = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "",
        opacity: 1,
        marginTop: "2px",
      }
    : {
        backgroundImage: `none`,
        backgroundColor: `#${bgColor}`,
        opacity: 1,
      };

  // Obtener el nombre del archivo de la imagen para usarlo como alt text
  const altText = image ? getImageAltText(image) : "Hero Image";

  function getImageAltText(imageUrl) {
    const startIndex = imageUrl.lastIndexOf("/") + 12;
    const endIndex = imageUrl.lastIndexOf(".");
    return imageUrl.substring(startIndex, endIndex);
  }

  return (
    <div className="py-20" style={{ ...bgStyles }}>
      <div className={`container mx-auto md:flex-row flex flex-col items-center justify-center gap-8 px-6 ${columnDirection}`}>
        <div className="flex flex-col w-full md:w-6/12 mb-8 md:mb-0 md:mr-6">
          <div className="max-w-lg">
            <h2 className={`text-4xl font-bold mb-4 ${titleAlignment}`}>{title}</h2>
            <p className="text-lg mb-8">{content}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-6/12">
          <img src={image} alt={altText} className={imgStyles} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
