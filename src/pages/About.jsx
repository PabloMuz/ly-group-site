import ImageSection from "../components/ImageSection";
import backgroundImg from "../assets/background-lines-1.png";
import heroContact from "../assets/diverse-businesspeople-having-meeting.jpg";
import misionImg from "../assets/aerial-view-cargo-ship-cargo-container-harbor-2.webp";
import visionImg from "../assets/man-with-binoculars.webp";

const styles = {
  backgroundColor: "f8fafc",
  whiteColor: "ffffff",
};

const sectionsData = [
  {
    title: "NOSOTROS",
    titleCenter: true,
    content: "",
    image: heroContact,
    flipColumn: false,
    bgImage: backgroundImg,
    bgColor: styles.backgroundColor,
    addLink: false,
  },
  {
    title: "MISIÓN",
    content: (
      <>
        <p>
          Generar negocios confiables y seguros en toda la cadena logística
          nacional e internacional, colmando las expectativas de nuestros
          clientes con acompañamiento y asesoría continua, desde el inicio de la
          operación hasta la entrega final; a cargo de un equipo profesional e
          idóneo en temas de comercio exterior; buscando siempre optimizar los
          tiempos y costos de cada una de las operaciones.
        </p>
      </>
    ),
    image: misionImg,
    flipColumn: true,
    bgImage: "",
    bgColor: styles.backgroundColor,
    addLink: false,
  },
  {
    title: "VISIÓN",
    content: (
      <>
        <p>
          Para el año 2023 ser reconocidos como un operador logístico confiable,
          seguro y profesional en el ámbito de comercio exterior; contando con
          alianzas estratégicas a nivel nacional e internacional, logrando así,
          brindar una logística integral con las mejores alternativas,
          ajustándonos siempre a la los criterios y necesidades de nuestros
          clientes.
        </p>
      </>
    ),
    image: visionImg,
    flipColumn: false,
    bgImage: "",
    bgColor: styles.whiteColor,
    addLink: false,
  },
];

export default function Contact() {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <ImageSection key={index} {...section} />
      ))}
    </div>
  );
}
