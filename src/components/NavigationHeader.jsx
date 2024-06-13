import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';


const NavigationHeader = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) };
    const content = <>
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#f3f2f2] transition'>
            <ul className='text-center text-xl p-20'>
                <Link  to="/home">
                    <li className='my-4 py-4 border-b-2 border-[#12a19e] hover:bg-slate-900 hover:rounded'>Inicio</li>
                </Link>
                <Link to="/about">
                    <li className='my-4 py-4 border-b-2 border-[#12a19e] hover:bg-slate-900 hover:rounded'>Nosotros</li>
                </Link>
                <Link to="/contact">
                    <li className='my-4 py-4 border-b-2 border-[#12a19e] hover:bg-slate-900 hover:rounded'>Contácto</li>
                </Link>
            </ul>
        </div>
    </>

    return (
        <div className='z-40 bg-[#fcfcfc] w-full h-[100px] shadow   '>

            <div className=" flex justify-between  px-20 ">
                <div className="mt-2">
                    <img src="src/assets/logo.png" className="w-[80px] h-[80px]" alt="Logo" />
                </div>
                <div className=' justify-end mt-8 lg:flex md:flex lg:flex-1 hidden text-3x1 font-bold'>
                    <div >
                        <ul className='flex gap-8 mr-16 text-[18px] '>
                            <Link to="/home">
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


