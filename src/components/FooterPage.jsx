import Logo from '../assets/logo.webp';

export default function FooterPage() {
    return (
        <footer className="w-full ">
            <div className="flex justify-center items-center">
                <div className="w-full text-center my-10">
                
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