import ImageSection from "../components/ImageSection";
import FullSection from "../components/FullSection";
import backgroundImg from "../assets/background-lines-1.png";
import heroContact from "../assets/diverse-businesspeople-having-meeting.jpg";
import misionImg from "../assets/aerial-view-cargo-ship-cargo-container-harbor-2.webp";
import visionImg from "../assets/man-with-binoculars.webp";
import MountainBG from "../assets/MountainBG.jpg";

const styles = {
  backgroundColor: "f8fafc",
  whiteColor: "ffffff",
  primaryColor: "12a19e",
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

const sectionFull = [
  {
    title: "VALORES DE LA COMPAÑÍA",
    titleCenter: false,
    content: (
      <>
        <p>
          Consideramos que nuestra razón de ser se basa en valores y principios
          fundamentales para el desarrollo de nuestra misión y visión:
        </p>
        <ul className="list-disc pl-5">
          <li>Responsabilidad</li>
          <li>Transparencia</li>
          <li>Honestidad</li>
          <li>Integridad</li>
          <li>Servicio al Cliente</li>
          <li>Seguridad y calidad</li>
          <li>Confiabilidad</li>
        </ul>
      </>
    ),
    titleColor: "",
    bgImage: backgroundImg,
  },
  {
    title:
      "Siempre que piense en logística recuerde… L&Y GROUP CARGO, Más que un aliado logístico!",
    titleCenter: true,
    content: "",
    titleColor: styles.primaryColor,
    bgImage: MountainBG,
  },
];

export default function Contact() {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <ImageSection key={index} {...section} />
      ))}
      {sectionFull.map((section, index) => (
        <FullSection key={index} {...section} />
      ))}
      ;
    </div>
  );
}
