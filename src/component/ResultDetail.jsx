import React from 'react';
import apc from '../resources/icons/APC.svg';


// const ResultDetail = (props) => {
//     return (
//         <div>
            
//         </div>
//     );
// }

const ResultDetailCard = ({end_date, start_date, mwin_percent, total_vote, ename, candidates}) => {
    return (
        <div className='p-5 mb-5 min-[320px]:w-[90%] min-[320px]:px-4 w-[90%] mx-auto bg-[#1D1D1D]/90 px-8 py-6 rounded-md min-[480px]:w-[80%] min-[480px]:p-8 sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] sm:py-12 sm:px-10  min-w-[320px]'>
            <CardHeader end_date={end_date} start_date={start_date} mwin_percent={mwin_percent} total_vote={total_vote} ename={ename} />
            <p className='text-[0.625rem]  font-normal leading-3 w-fit lg:text-xs pt-1 pb-2.5'>Candidates Votes</p>
            <div className='lg:flex flex flex-wrap items-center justify-center'>
                {candidates.map((candidate, index) => (
                    <CandidateCard key={index} win_percent={candidate.win_percent} vote={candidate.vote} party={candidate.party}/>
                ))}
            </div>
        </div>
    );
}

const CardHeader = ({end_date, start_date, mwin_percent, total_vote, ename}) => {
    return (
        <div className=''>
            <div className='flex pb-5 items-center justify-between sm:pb-7'>
                <p className='text-[0.625rem] font-semibold leading-3 w-fit lg:text-xs'>{ename}</p>
                <p className='text-[0.625rem] font-semibold leading-3 w-fit lg:text-xs'>Finished</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[0.6875rem] font-normal leading-3 mb-1.5 mt-1 sm:mb-2.5'>Total Votes</p>
                    <p className='text-xl font-bold tracking-widest lg:text-3xl'>{total_vote}</p>
                </div>
                <div>
                    <p className='text-[0.6875rem] font-normal leading-3 mb-1.5 mt-1 sm:mb-2.5'>Win Percent</p>
                    <p className='text-xl font-bold tracking-widest lg:text-3xl'>{mwin_percent}</p>
                </div>
                <div>
                     <img src={apc} alt="APC Flag" className='mr-2 sm:w-[95%] sm:mr-4'/>
                    <p className='text-[0.5rem] font-semibold leading-[0.6875rem] text-center mr-2 pt-1'>APC</p>
                </div>
            </div>
            <div>
                <p className='text-[0.625rem]  font-normal leading-3 w-fit lg:text-xs pb-1.5'>Date Started: {start_date} </p>
                <p className='text-[0.625rem] font-normal leading-3 w-fit lg:text-xs pb-1.5'>Date Ended: {end_date} </p>
            </div>
            <div className="w-full border border-b-0 mb-2.5 md:mb-3.5"></div>
        </div>
    );
}

const CandidateCard = ({win_percent, vote, party}) => {
    return (
        <div className='p-5 mb-5 w-full bg-gradient-to-r from-[#1687C9] to-[#000000] rounded-lg mx-auto sm:w-[90%] md:w-[85%] lg:w-[60%] xl:w-[45%] lg:mb-8 sm:mx-auto sm:p-10 cursor-pointer'>
            <div className='pb-3.5 items-center justify-between sm:pb-7'>
                <p className='text-[1rem] font-bold leading-3 w-fit lg:text-[1.125rem]'>{party}</p>
            </div>
            <div className='flex justify-between pb-7'>
                <div>
                    <p className='text-[0.6875rem] font-normal leading-3 mb-2 mt-1 sm:mb-2.5'>Votes</p>
                    <p className='text-xl font-bold tracking-widest lg:text-2xl'>{vote}</p>
                </div>
                <div>
                    <p className='text-[0.6875rem] font-normal leading-3 mb-2.5 mt-1 sm:mb-2.5'>Win Percent</p>
                    <p className='text-xl font-bold tracking-widest lg:text-2xl'>{win_percent}</p>
                </div>
                <div>
                     <img src={apc} alt="APC Flag" className='mr-2 sm:w-[95%]'/>
                </div>
            </div>
        </div>
    );
}
export default ResultDetailCard;