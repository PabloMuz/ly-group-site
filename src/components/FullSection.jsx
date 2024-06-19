const FullBanner = ({ title, titleCenter, titleColor, content, bgImage }) => {
  const titleAlignment = titleCenter ? "text-center" : "text-left";
  const bgStyles = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {};
  const textColor = { color: `#${titleColor}`, lineHeight: "50px"};

  return (
    <div className="py-20" style={bgStyles}>
      <div className="container mx-auto flex flex-col items-center w-full px-8 xl:px-20 py-10">
        <h2 className={`text-4xl font-bold mb-4 ${titleAlignment}`} style={textColor}>{title}</h2>
        <div className="text-lg mb-8">{content}</div>
      </div>
    </div>
  );
};

export default FullBanner;
