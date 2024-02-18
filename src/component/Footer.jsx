import facebook from "../resources/icons/Facebook.svg"
import instagram from "../resources/icons/Instagram.svg"
import twitter from "../resources/icons/Twitter.svg"
import youtube from "../resources/icons/Youtube.svg"
import copyright from "../resources/icons/Copyright.svg"

const Footer = (props) => {
    return (
        <div className='bg-[#1D1D1D]/90 p-8 text-white md:px-16 lg:px-28 md:py-10 lg:py-12'>
            <div className="md:flex md:items-center md:justify-between md:pb-8 lg:w-[90%] mx-auto">
                <div className="md:w-fit">
                    <p className='text-base font-semibold pb-1.5 leading-4 md:pb-2.5 lg:text-xl lg:leading-5 lg:pb-3.5'>Product</p>
                    <p className='pb-5 leading-3 text-[0.625rem] font-normal md:pb-7 lg:text-xs lg:leading-4 lg:pb-9'>E-Voting</p>
                    <p className='text-base font-semibold pb-1.5 leading-4 md:pb-2.5 lg:text-xl lg:leading-5 lg:pb-3.5'>Company</p>
                    <p className='pb-10 leading-3 text-[0.625rem] font-normal md:pb-0 lg:text-xs lg:leading-4'>About us</p>
                </div>
                <div className="pb-7 flex w-[45%] items-center justify-between md:w-[30%] lg:w-[28%] md:pb-0">
                    <img src={facebook} alt="Facebook Logo "  className="md:w-[5%] lg:w-[5%]"/>
                    <img src={youtube} alt="Youtube logo" className="md:w-[9%] lg:w-[8%]"/>
                    <img src={instagram} alt="instagram Logo" className="md:w-[8%] lg:w-[7%]"/>
                    <img src={twitter} alt=" Twitter Logo" className="md:w-[9%] lg:w-[8%]"/>
                </div>
            </div>
            <div className="flex items-center pb-5 md:justify-center md:pb-0">
                <img src={copyright} alt="" />
                <p className="pl-1 leading-3 text-[0.625rem] font-light text-center lg:text-xs lg:leading-4"> 2023 Suddenverse.io</p>
            </div>
        </div>
    );
}

export default Footer;