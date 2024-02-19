import React from "react";
import datas from "../component/Data/Electiondata.json";
import regs from "../component/Data/RegNumber.json";
import details from "../component/Data/Votelogo.json";
import clear from "../resources/icons/Clear.svg";
import apc from "../resources/icons/APC.svg";
import { useState } from "react";

const Election = (props) => {

  
    
  
  const [regForm, setregForm] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
  };
  



  return (
    <main className="py-5 px-5 md:py-10 md:px-36 min-h-[60vh]">
      <div className="relative bg-[#F5F5F5] max-[320px]:w-full w-[85%] md:w-[80%] sm:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto h-[10rem] rounded-md mb-10 text-[#FF0303] hidden">
        <h3 className="absolute left-12 top-[10%] font-bold tracking-wide">
          Attention!!!
        </h3>
        <p className="absolute left-12 top-[40%]">
          Your RegID is invalid!
        </p>
        <p className="absolute left-12 bottom-[10%]">Please use Correct RegID...</p>
        <div>
          <img
            src={clear}
            alt="clear sign"
            className="md:w-[1rem] absolute top-[10%] right-[2rem]"
          />
        </div>
      </div>
      <div className={`${regForm === true ? "hidden" : "block"}`}>
          {datas.map((data, id) => (
              <ElectionDetail onClick={() => setregForm(true)} key={id} setregForm={setregForm} election={data.election} vote_count={data.vote_count}/>
          ))}

          <div className="relative bg-gradient-to-r from-[#FDD603] h-[12.625rem] w-full sm:w-[80%] md:w-[80%] lg:w-[50%] h-[12.625rem] lg:h-[16rem] mb-6 hidden rounded-md">
            <h1 className="absolute top-4 left-12 font-bold">
              2023 Presidential Election
            </h1>
            <p className="absolute top-16 left-12 font-light text-sm">
              Start Time Countdown
            </p>
            <p className="absolute top-4 right-12 font-bold">Upcoming</p>
          </div>
      </div>
      

      {regForm && (
        <FormValidate setregForm={setregForm} />
      )}  
      
    </main>
  );
};



const ElectionDetail = ({ election, vote_count, onClick, setregForm}) => {

  return (
      <div>
          <div
            className={`relative bg-gradient-to-r from-[#FDD603] max-[320px]:w-full w-[85%] sm:w-[80%] md:w-[80%] lg:w-[50%] h-[12.625rem] lg:h-[16rem]  mx-auto mb-6 rounded-md
            `}
          >
            <h1 className="absolute top-4 left-6 lg:left-12 md:left-8 font-bold">{election}</h1>

            <div>
              <p className="absolute top-10  lg:top-12 left-6 lg:left-12 md:left-8 font-light text-sm">
                Total Votes
              </p>
              <h1 className="absolute top-16 lg:top-[5.5rem] left-6 lg:left-12 md:left-8 font-bold tracking-widest text-3xl">
                {vote_count}
              </h1>
            </div>
            <div>
              <p className="absolute top-32 lg:top-36 left-6 lg:left-12 md:left-8 font-light text-sm">
                End Time Countdown
              </p>
            </div>
            <button
              onClick={onClick}
              className="absolute text-white cursor-pointer bottom-2 py-1 md:py-2 left-6 lg:left-12 md:left-8 w-[80%] bg-gradient-to-l from-blue-950 to-blue-400 rounded-md "
            >
              Cast a vote
            </button>
      </div>
      
     </div> 
    );
}


const FormValidate = ({setregForm}) => {

  const [reg, setReg] = useState("");
  const [vote, setVote] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
            <div
                  className={`bg-[#F5F5F5] w-full sm:w-[70%] p-5 md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto rounded-md m-5 ${
                    vote === true ? "hidden" : "block"
                  }`}
                >
              <h1 className="text-lg font-bold w-full text-center pb-6 lg:pb-8">
                Input your registration ID
              </h1>
              <form
                onSubmit={handleSubmit}
                className="font-bold "
              >
                <label className="pr-2 ">Reg ID:</label>
                <input
                  type="text"
                  value={reg}
                  required
                  onChange={(e) => setReg(e.target.value)}
                  className="py-2 max-[410px]:w-[70%] w-[80%] outline-0 rounded-lg px-3"
                />
                <div
                  onClick={() => {
                    const isRegMatch = regs.some(
                      (regObject) => regObject.reg_num === reg
                    );

                    if (isRegMatch) {
                      setVote(true);
                    } else {
                      setVote(false);
                    }
                  }}
                  className="flex items-center justify-center mt-6 lg:mt-8 text-white cursor-pointer bg-gradient-to-l from-blue-950 to-blue-400 rounded-md"
                >
                  <input type="submit" className="cursor-pointer p-2 z-0" />
                </div>
              </form>
      </div>
      {vote && (
        <Voting setVote={setVote} setregForm={setregForm} />
      )} 
      
    </div>

  );
}


const Voting = ({setVote, setregForm}) => {

  const [voting, setVoting] = useState(false);
   const [detaill, setdetaill] = useState(null)
  
 
  const handleItemClick = (id) => {
    setVoting(true);
    setdetaill(details[id])
  };

  

  return (
    <div>
      {!voting && <div
          className={`flex flex-col bg-[#1D1D1D] text-white w-full sm:w-[80%] md:w-[80%] lg:w-[50%] mx-auto mb-6 rounded-md ${
            voting === true ? "hidden" : "block"
          }`}
        >
          <h1 className="my-8 ml-8 max-[320px]:text-xs">Select your candidate & proceed ...</h1>
          {details.map((detail, id) => (
            <div
              className="w-[60%] h-48 bg-black mb-4 mx-[20%] rounded-md"
              key={id}
              onClick={() => handleItemClick(id)}
            >
              <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-[#0977BE] rounded-md">
                <h1 className="my-4">{detail.value}</h1>
                <img src={apc} alt={detail.name} className="mb-4 w-24" />
                <p className="mb-4">{detail.name}</p>
              </div>
            </div>
          ))}
      </div>}
      {voting && (
        <Vote onClick={() => setVoting(false)} setVote={setVote} setregForm={setregForm} setVoting={setVoting} value={detaill.value} name={detaill.name}/>
      )}
    </div>
  );
}

const Vote = ({ value, name, onClick, setVoting, setVote, setregForm }) => {
  
  const [check, setCheck] = useState(false);
  const [voted, setVoted] = useState(false);
  
   const handleSubmit = (e) => {
     e.preventDefault();
     if (check) {
       setVoted(true);
     }
  };

  const handleDone = () => {
    setVoted(false)
    setCheck(false)
    setVoting(false)
    setVote(false)
    setregForm(false)
  }

  console.log(check)

  return (
    <div>
      {!voted && <div className="flex p-5 flex-col bg-[#1D1D1D] text-white tracking-wider max-[360px]:w-full w-[94%] sm:w-[80%] md:w-[80%] lg:w-[50%] mx-auto mb-6 rounded-md">
        <h1 className="mb-4 ml-4 md:ml-8">Vote....</h1>

        <div className="w-[80%] max-[320px]:w-full max-[390px]:w-[90%]  h-64 md:h-[280px] bg-black mb-4 mx-auto rounded-md">
          <div className="flex flex-col p-2 relative items-center w-full h-full bg-gradient-to-r from-[#0977BE] rounded-md">
            <h1 className="my-2 md:my-4">{value}</h1>
            <img src={apc} alt={name} className="mb-2 md:mb-4 w-24" />
            <p className="mb-4">{name}</p>
            <button onClick={onClick} className="absolute right-4 bottom-4 text-black font-bold bg-white rounded-md w-24 h-8">
              Cancel
            </button>
            <form
              onSubmit={handleSubmit}
              className="flex w-full justify-between px-4 text-black font-bold "
            >
              <input
                className="absolute bottom-[66px]"
                type="checkbox"
                onChange={()=>setCheck(!check)}
                required
              />
              <label className="absolute bottom-[58px] mb-1 left-11 text-white font-normal">
                verify
              </label>
              <button className="absolute left-4 bottom-4 bg-yellow-400 rounded-md w-24 h-8">
                Vote
              </button>
            </form>
          </div>
        </div>
      </div>}
      {voted &&
      <div className="relative bg-[#1D1D1D] max-[320px]:w-full w-[85%] sm:w-[80%] md:w-[80%] lg:w-[50%] xl:w-[40%] mx-auto p-6 text-white rounded-md">
          <p className="text-xs  font-semibold leading-3 w-fit lg:text-sm pb-8">Successful!!!</p>

          <p className="text-center text-base font-sembiold leading-6 lg:text-sm pb-2.5">Thank you for coming!</p>

          <p className="text-[0.625rem]  font-semibold leading-3 lg:text-xs pb-6 text-center">Your vote has been recorded.</p>

          <button onClick={handleDone} className="block text-black text-[0.625rem]  font-semibold leading-3 w-fit lg:text-xs bg-yellow-400 py-1.5 px-4 rounded-md mx-auto">Done</button>
      </div>}
    </div>

  );
}


export default Election;
