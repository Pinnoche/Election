
import apc from '../resources/icons/APC.svg';

const Cards = ({win_percent,election_name, onClick}) => {
    return (
        <div onClick={onClick} className='p-5 mb-5 w-full bg-gradient-to-r from-[#1687C9] to-[#000000] rounded-lg min-[480px]:w-[80%] sm:w-[80%] md:w-[70%] lg:w-[46%] xl:w-[45%] lg:mb-8 sm:mx-auto sm:p-10 cursor-pointer'>
            <div className='flex pb-5 items-center justify-between sm:pb-7'>
                <p className='text-[0.625rem] font-semibold leading-3 w-fit lg:text-xs'>{election_name}</p>
                <p className='text-[0.625rem] font-semibold leading-3 w-fit lg:text-xs'>Finished</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[0.6875rem] font-normal leading-3 mb-1.5 mt-1 sm:mb-2.5'>Win Percent</p>
                    <p className='text-2xl font-bold tracking-widest lg:text-3xl'>{win_percent}</p>
                </div>
                <div>
                    <img src={apc} alt="APC Flag" className='mr-2 sm:w-[95%] sm:mr-4'/>
                    <p className='text-[0.5rem] font-semibold leading-[0.6875rem] text-center mr-2 pt-1'>APC</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;