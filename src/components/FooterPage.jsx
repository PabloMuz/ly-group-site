import Logo from '../assets/logo.webp';

export default function FooterPage() {
    //Todo: crear footer con el logo y el texto de contacto(gerencia@lygroupcargo.com , Celulares: 313 3360087 - 313 3360041, calle 52a #82a - 62 Oficina 501,Bogota Colombia) debe estar justificado en el centro uno debjo del ottro
    return (
        <footer className="w-full ">
            <div className="flex justify-center items-center">
                <div className="w-full text-center my-10">
                    {/* todo: centrar imagen */}

                    <img 
                        src={Logo}
                        alt="logo" 
                        width={150}
                        className="mx-auto"
                        />

                    <p className="text-sm text-gray-500 text-center m-1">
                        Correo: Gerencia@lygroupcargo.com
                    </p>
                    <p className="text-sm text-gray-500 text-center m-1">
                        Celular: 313 3360087 - 313 3360041
                    </p>
                    <p className="text-sm text-gray-500 text-center m-1">
                        Calle 52a #82a - 62 Oficina 501
                    </p>

                    <p className="text-sm text-gray-500 text-center mt-1">
                        Bogotá, Colombia.
                    </p>
                </div>
            </div>
        </footer>
    );
}