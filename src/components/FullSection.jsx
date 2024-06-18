const FullBanner = ({ title, titleCenter, titleColor, content, bgImage }) => {
  const titleAlignment = titleCenter ? "text-center" : "text-left";
  // Determinar el color o imagen de fondo
  const bgStyles = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "",
        opacity: 1,
        marginTop: "2px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: `none`,
      };

      const textColor = {color: `#${titleColor}`};


  return (
    <div className="py-20" style={{ ...bgStyles }}>
      <div className="container mx-auto flex-col flex items-center w-full px-2 py-10 ">
            <h2 className={`text-4xl font-bold mb-4 ${titleAlignment}`} style={{ ...textColor }}>{title}</h2>
            <div className="text-lg mb-8">{content}</div>
      </div>
    </div>
  );
};

export default FullBanner;
