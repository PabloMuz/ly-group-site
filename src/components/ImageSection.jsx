const ImageSection = ({ title, titleCenter, content, image, bgImage, bgColor, flipColumn, heroBanner }) => {
  const columnDirection = flipColumn ? "md:flex-row-reverse" : "md:flex-row";
  const titleAlignment = titleCenter ? "text-center" : "text-left";
  const heroSpacingTop = heroBanner ? "pt-40 pb-20" : "py-20";
  const imgStyles = "object-cover object-center w-full h-full md:h-auto rounded-lg shadow-2xl";

  const bgStyles = bgImage
    ? { backgroundImage: `url(${bgImage})`, marginTop: "2px" }
    : { backgroundColor: `#${bgColor}` };

  const altText = image ? image.substring(image.lastIndexOf("/") + 1, image.lastIndexOf(".")) : "Hero Image";

  return (
    <div className={heroSpacingTop} style={bgStyles}>
      <div className={`container mx-auto md:flex flex-col items-center justify-center gap-8 px-8 xl:px-20 ${columnDirection}`}>
        <div className="flex flex-col w-full md:w-6/12 mb-8 md:mb-0 md:mr-6">
          <div className="max-w-lg">
            <h2 className={`text-4xl font-bold mb-4 ${titleAlignment}`}>{title}</h2>
            <div className="text-lg mb-8">{content}</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-6/12">
          <img src={image} alt={altText} className={imgStyles} />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
