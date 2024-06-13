import ImageSection from "./components/ImageSection";
import backgroundImg from "./assets/background-lines-1.png";
import NavigationHeader from "./components/NavigationHeader";

/*
 * $targetEl: required
 * $triggerEl: optional
 * options: optional
 */

function App() {

  return (
    <>
      <NavigationHeader />
      <div >
        {/* Hero banner */}
        <ImageSection
          title="L & Y GROUP CARGO"
          content="Somos un integrador logístico experto en procesos de comercio exterior, enfocados en brindarle a nuestros clientes asesoría en la cadena logística internacional, proporcionando soluciones eficientes y de calidad, bajo la normatividad con la participación y el compromiso de todo nuestro personal altamente calificado. "
          image="src\assets\close-up-businessman-with-digital-tablet.webp"
          flipColumn={false} // Cambiar a true para invertir las columnas
          bgImage={backgroundImg} // Vacio para que sea aplique el color
          bgColor="f8fafc"
          addLink={false} // True para agregar Whatsapp - por agregar
        />

        {/* TRANSPORTE AÉREO */}
        <ImageSection
          title="TRANSPORTE AÉREO"
          content={
            <>
              <p>
                Para las mercancías que requieren un tránsito corto por cuestión
                de tiempo, manejo o su esencia, brindamos el servicio de
                importación y exportación de carga aérea. Manejamos todo tipo de
                carga:
              </p>
              <ul className="list-disc pl-5">
                <li>Carga general</li>
                <li>Mercancías peligrosas</li>
                <li>Manejo cargas especiales (extra dimensionadas)</li>
              </ul>
            </>
          }
          image="src\assets\airplane-sunset.webp"
          flipColumn={true} // Cambiar a true para invertir las columnas
          bgImage="" // Vacio para que sea aplique el color
          bgColor="f8fafc"
          addLink={false} // True para agregar Whatsapp - por agregar
        />
        {/* CARGA MARÍTIMA */}
        <ImageSection
          title="CARGA MARÍTIMA"
          content={
            <>
              <p>
                Para el manejo de cargas pesadas o de volumen grande, ofrecemos el servicio de importación y exportación marítima desde/hacia cualquier puerto en el mundo. Prestando servicios en todas las modalidades:
              </p>
              <ul className="list-disc pl-5">
                <li>Cargas LCL (Carga suelta o consolidada)</li>
                <li>Cargas combinadas (Marítimo-aéreo-Terrestre)</li>
                <li>Manejo proyectos especiales (Break Bulk)</li>
              </ul>
            </>
          }
          image="src\assets\aerial-view-cargo-ship-cargo-container-harbor.webp"
          flipColumn={false} // Cambiar a true para invertir las columnas
          bgImage="" // Vacio para que sea aplique el color
          bgColor="ffffff"
          addLink={false} // True para agregar Whatsapp - por agregar
        />

      </div>
    </>
  );
}

export default App;
