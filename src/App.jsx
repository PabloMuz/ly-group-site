import { useState } from 'react'
import viteLogo from '/vite.svg'
import ImageSection from './components/ImageSection'
import backgroundImg from './assets/background-lines-1.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* Home - por ahora aqui */}
    <div className=''>

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
            Para las mercancías que requieren un tránsito corto por cuestión de tiempo, manejo o su esencia, brindamos el servicio de importación y exportación de carga aérea. Manejamos todo tipo de carga:
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
      </div>
    </>
  )
}

export default App
