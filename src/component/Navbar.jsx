import { useEffect, useState } from "react";
import menubar from "../resources/icons/menubar.svg"
import Connect from "./Connect"
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [winscreens, setScreens] = useState(window.screen.width);
    console.log(window.screen.width);

    useEffect(() => {
        window.onresize = () => {
        setScreens(window.screen.width);
        };
    }, []);


    const handlemenu = () => {
        const menu = document.querySelector('.menu');
         if (menu.style.display === "block") {
             menu.style.display = "none";
             
            } else {      
             menu.style.display = "block";
            
            }
    }

    return (
        <div className="px-5 pt-6 pb-3.5 md:px-16 lg:px-24 md:pt-7 md:pb-4 flex bg-[#1D1D1D]/90 items-center justify-between min-w-80">
            <div className="md:w-[27%] lg:w-[37%]">
                <h1 className="text-white font-['Libre_Baskerville'] text-base md:text-2xl md:font-extrabold font-bold">E-Voting</h1>
            </div>
            <div className="flex hidden md:flex items-center justify-between md:w-[35%] lg:w-[30%]">
                <Link to='/'><p className="text-white text-sm font-['Libre_Baskerville'] font-normal">Home</p></Link>
                <Link to='/election'><p className="text-white text-sm font-['Libre_Baskerville'] font-normal">Elections</p></Link>
                <Link to='/result'><p className="text-white text-sm font-['Libre_Baskerville'] font-normal">Results</p></Link>
            </div>
            <div className="flex items-center justify-between w-fit">
                <div onClick={handlemenu} className="mr-6 md:hidden">
                    <img src={menubar} alt="Menu SVG" />
                </div>

                <Connect />
               
                <div className={` menu hidden md:hidden bg-[#1D1D1D]/90 absolute right-0 top-[62px] w-fit px-3 py-3.5 rounded-b-md ${winscreens >= 740 && "!hidden"}`}>
                    <Link to='/'><div onClick={handlemenu} className=" px-[4rem] py-1.5 mb-2.5 bg-[#D9D9D9]/10 rounded-lg cursor-pointer">
                        <p className="text-white text-[0.5rem] font-normal text-center">Home</p>
                    </div></Link>
                    <Link to='/election'><div onClick={handlemenu} className="px-[4rem] py-1.5 mb-2.5 bg-[#D9D9D9]/10 rounded-lg cursor-pointer">
                        <p className="text-white text-[0.5rem] font-normal text-center">Elections</p>
                    </div></Link>
                    <Link to='/result'><div onClick={handlemenu} className=" px-[4rem] py-1.5 mb-2.5 bg-[#D9D9D9]/10 rounded-lg cursor-pointer">
                        <p className="text-white text-[0.5rem] font-normal text-center">Results</p>
                    </div></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;