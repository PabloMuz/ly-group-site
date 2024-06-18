import ImageSection from "../components/ImageSection";
import FullSection from "../components/FullSection";
import backgroundImg from "../assets/background-lines-1.png";
import closeUpBusinessmanImg from "../assets/close-up-businessman-with-digital-tablet.webp";
import airplaneSunsetImg from "../assets/airplane-sunset.webp";
import aerialViewCargoShipImg from "../assets/aerial-view-cargo-ship-cargo-container-harbor.webp";
import scaniaImg from "../assets/scania.webp";
import aduanaImg from "../assets/aduana.webp";
import MountainBG from "../assets/MountainBG.jpg"

const styles = {
  backgroundColor: "f8fafc",
  whiteColor: "ffffff",
  primaryColor: "12a19e"
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
    bgColor: styles.backgroundColor,
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
    bgImage: "",
    bgColor: styles.whiteColor,
    addLink: false,
  },
  {
    title: "CARGA TERRESTRE",
    content: (
      <>
        <p>
        Ofrecemos el servicio para exportación e importación terrestre traspasando frontera con el país de Ecuador, por el sur de nuestro territorio (Ipiales) llegando a la ciudad de Tulcán. Igualmente, el transporte de carga nacional desde y hacia cualquier puerto o aeropuerto del país
        </p>
      </>
    ),
    image: scaniaImg,
    flipColumn: true,
    bgImage: "",
    bgColor: styles.backgroundColor,
    addLink: false,
  },
  {
    title: "AGENCIAMIENTO ADUANERO",
    content: (
      <>
        <p>
        Coordinación de agenciamiento aduanero a través de agencia de aduana nivel 1, es decir, la nacionalización de sus mercancías está en manos de personas idóneas y expertas en tema aduanero, que están siempre actualizados en la normatividad aduanera para una correcta operación y declaración ante la DIAN.
        </p>
      </>
    ),
    image: aduanaImg,
    flipColumn: false,
    bgImage: "",
    bgColor: styles.whiteColor,
    addLink: false,
  }
];

const sectionFull = [
  {
    title: "Siempre que piense en logística recuerde… L&Y GROUP CARGO, Más que un aliado logístico!",
    titleCenter: true,
    content: "",
titleColor: styles.primaryColor, 
    bgImage: MountainBG,
  }
];

export default function Home() {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <ImageSection key={index} {...section} />
      ))};

      {sectionFull.map((section, index) => (
        <FullSection key={index} {...section}/>
      ))};
    </div>
  );
}