
import ImageSection from "../components/ImageSection";
import backgroundImg from "../assets/background-lines-1.png";
import closeUpBusinessmanImg from "../assets/close-up-businessman-with-digital-tablet.webp";
import airplaneSunsetImg from "../assets/airplane-sunset.webp";
import aerialViewCargoShipImg from "../assets/aerial-view-cargo-ship-cargo-container-harbor.webp";

const styles = {
  backgroundColor: "#f8fafc",
  whiteColor: "#ffffff",
};

const sectionsData = [
  {
    title: "L & Y GROUP CARGO",
    content: (
      <p>
        Somos un integrador logístico experto en procesos de comercio exterior,
        enfocados en brindarle a nuestros clientes asesoría en la cadena
        logística internacional, proporcionando soluciones eficientes y de
        calidad, bajo la normatividad con la participación y el compromiso de
        todo nuestro personal altamente calificado.
      </p>
    ),
    image: closeUpBusinessmanImg,
    flipColumn: false,
    bgImage: backgroundImg,
    bgColor: styles.backgroundColor,
    addLink: false,
  },
  {
    title: "TRANSPORTE AÉREO",
    content: (
      <>
        <p>
          Para las mercancías que requieren un tránsito corto por cuestión de
          tiempo, manejo o su esencia, brindamos el servicio de importación y
          exportación de carga aérea. Manejamos todo tipo de carga:
        </p>
        <ul className="list-disc pl-5">
          <li>Carga general</li>
          <li>Mercancías peligrosas</li>
          <li>Manejo cargas especiales (extra dimensionadas)</li>
        </ul>
      </>
    ),
    image: airplaneSunsetImg,
    flipColumn: true,
    bgImage:"",
    bgColor: "f8fafc",
    addLink: false,
  },
  {
    title: "CARGA MARÍTIMA",
    content: (
      <>
        <p>
          Para el manejo de cargas pesadas o de volumen grande, ofrecemos el
          servicio de importación y exportación marítima desde/hacia cualquier
          puerto en el mundo. Prestando servicios en todas las modalidades:
        </p>
        <ul className="list-disc pl-5">
          <li>Cargas LCL (Carga suelta o consolidada)</li>
          <li>Cargas combinadas (Marítimo-aéreo-Terrestre)</li>
          <li>Manejo proyectos especiales (Break Bulk)</li>
        </ul>
      </>
    ),
    image: aerialViewCargoShipImg,
    flipColumn: false,
    bgImage: backgroundImg,
    bgColor: styles.whiteColor,
    addLink: false,
  },
];

export default function Home() {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <ImageSection key={index} {...section} />
      ))}
    </div>
  );
}