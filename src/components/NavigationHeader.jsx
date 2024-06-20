import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import Logo from '../assets/logo.webp';


const NavigationHeader = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) };
    const content = <>
        <div className='lg:hidden block absolute top-[100px] w-full left-0 right-0 bg-[#f3f2f2] transition'>
            <ul className='text-center text-xl pb-10'>
                <li className='my-2 py-4 border-b-2 border-[#1e1f1f] hover:bg-[#12a19e] hover:rounded'>
                    <Link to="/" onClick={() => setClick(false)}>Inicio</Link>
                </li>
                <li className='my-2 py-4 border-b-2 border-[#1e1f1f] hover:bg-[#12a19e] hover:rounded'>
                    <Link to="/about" onClick={() => setClick(false)}>Nosotros</Link>
                </li>
                <li className='my-2 py-4 border-b-2 border-[#1e1f1f] hover:bg-[#12a19e] hover:rounded'>
                    <Link to="/contact" onClick={() => setClick(false)}>Contácto</Link>
                </li>
            </ul>
        </div>
    </>

    return (
        <div className='z-40 bg-[#fcfcfc] w-full h-[100px] shadow fixed -mt-1'>

            <div className=" flex justify-between px-10 py-2 ">
                <div className="mt-2">
                    <img src={Logo} className="w-[80px] h-[80px]" alt="Logo" />
                </div>
                <div className=' justify-end mt-8 lg:flex md:flex lg:flex-1 hidden text-3x1 font-bold'>
                    <div >
                        <ul className='flex gap-8 mr-16 text-[18px] '>
                            <Link to="/">
                                <li className='hover:text-[#12a19e] hover:border-b-2 border-[#12a19e]  transition  '>Inicio</li>
                            </Link>
                            <Link to="/about">
                                <li className='hover:text-[#12a19e] hover:border-b-2 border-[#12a19e]  transition '>Nosotros</li>
                            </Link>
                            <Link to="/contact">
                                <li className='hover:text-[#12a19e] hover:border-b-2 border-[#12a19e]  transition '>Contácto</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className='  block md:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes size={35} /> : <HiMenu size={35} />}
                </button>
            </div>


        </div>
    );
}
export default NavigationHeader;


