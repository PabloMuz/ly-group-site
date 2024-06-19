import MapSection from "../components/MapSection";
import FullSection from "../components/FullSection";
import backgroundImg from "../assets/background-lines-1.png";
import MountainBG from "../assets/MountainBG.jpg";

export default function Contact() {
  return (
    <div>
      <MapSection
        title="Contactenos"
        titleCenter={false}
        content={
          <>
            <ul className="list-none pl-0 ml-0">
              <li>
                <a href="mailto:gerencia@lygroupcargo.com">
                  gerencia@lygroupcargo.com
                </a>
              </li>
              <li>
                Celulares:{" "}
                <a
                  href="https://wa.me/573206555398"
                  rel="noopener"
                  target="_blank">
                  313 3360087{" "}
                </a>{" "}
                -{" "}
                <a
                  href="https://wa.me/573206555398"
                  rel="noopener"
                  target="_blank">
                  313 3360041{" "}
                </a>
              </li>
            </ul>
          </>
        }
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.524143264008!2d-74.11673757219182!3d4.678562802267009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b653c706ab5%3A0x4b93300b8321360e!2zQ2wgNTJBICM4MiwgQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1715822921971!5m2!1ses!2sco"
        bgImage={backgroundImg}
        heroBanner={true}
      />
      <FullSection
        title="Cuando necesites soluciones eficientes, piensa en nosotros. L&Y GROUP CARGO, tu socio confiable en logística.!"
        titleCenter={true}
        titleColor="12a19e"
        bgImage={MountainBG}
      />
    </div>
  );
}
