import React from "react";
import datas from "../component/Data/Electiondata.json";
import regs from "../component/Data/RegNumber.json";
import details from "../component/Data/Votelogo.json";
import clear from "../resources/icons/Clear.svg";
import apc from "../resources/icons/APC.svg";
import { useState } from "react";

const Election = (props) => {
  const [regForm, setregForm] = useState(false);
  const [reg, setReg] = useState("");
  const [vote, setVote] = useState(false);
  const [voting, setVoting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleItemClick = (id) => {
    setVoting(id);
  };

  return (
    <main className="py-10 px-36 min-h-[50vh]">
      <div className="relative bg-[#F5F5F5] w-[40%] h-[10rem] left-[4.375rem] rounded-md mb-10 text-[#FF0303] hidden">
        <h3 className="absolute left-12 top-[10%] font-bold tracking-wide">
          Attention!!!
        </h3>
        <p className="absolute left-12 top-[40%]">
          You need to connect your wallet!
        </p>
        <p className="absolute left-12 bottom-[10%]">Click connect above...</p>
        <div>
          <img
            src={clear}
            alt="clear sign"
            className="md:w-[1rem] absolute top-[10%] right-[2rem]"
          />
        </div>
      </div>
      {datas.map((data, id) => (
        <div
          key={id}
          className={`relative bg-gradient-to-r from-[#FDD603] w-[60%] h-[12.625rem] left-[4.375rem] mb-6 rounded-md ${
            regForm === true ? "hidden" : "block"
          }`}
        >
          <h1 className="absolute top-4 left-12 font-bold">{data.election}</h1>

          <div>
            <p className="absolute top-10 left-12 font-light text-sm">
              Total Votes
            </p>
            <h1 className="absolute top-16 left-12 font-bold tracking-widest text-3xl">
              {data.vote_count}
            </h1>
          </div>
          <div>
            <p className="absolute top-32 left-12 font-light text-sm">
              End Time Countdown
            </p>
          </div>
          <button
            onClick={() => setregForm(true)}
            className="absolute text-white cursor-pointer bottom-2 left-12 w-[80%] bg-gradient-to-l from-blue-950 to-blue-400 rounded-md "
          >
            Cast a vote
          </button>
        </div>
      ))}

      <div className="relative bg-gradient-to-r from-[#FDD603] w-[40%] h-[12.625rem] left-[4.375rem] mb-6 rounded-md hidden">
        <h1 className="absolute top-4 left-12 font-bold">
          2023 Presidential Election
        </h1>
        <p className="absolute top-16 left-12 font-light text-sm">
          Start Time Countdown
        </p>
        <p className="absolute top-4 right-12 font-bold">Upcoming</p>
      </div>

      {regForm && (
        <div
          className={`fixed top-40 bg-[#F5F5F5] w-[40%] h-36 left-[4.375rem] rounded-md ${
            vote === true ? "hidden" : "block"
          }`}
        >
          <h1 className="text-lg absolute font-bold top-2 left-8">
            Input your registration ID
          </h1>
          <form
            onSubmit={handleSubmit}
            className="absolute font-bold top-16 left-2"
          >
            <label>Reg ID:</label>
            <input
              type="text"
              value={reg}
              required
              onChange={(e) => setReg(e.target.value)}
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
              className="flex items-center justify-center my-6 text-white cursor-pointer bg-gradient-to-l from-blue-950 to-blue-400 rounded-md"
            >
              <input type="submit" className="cursor-pointer z-0" />
            </div>
          </form>
        </div>
      )}

      {vote && (
        <div
          className={`flex flex-col bg-[#1D1D1D] text-white md:w-[60%] h-full mx-[20%] mb-6 rounded-md ${
            voting === true ? "hidden" : "block"
          }`}
        >
          <h1 className="my-8 ml-8">Select your candidate & proceed ...</h1>
          {details.map((detail, id) => (
            <div
              className="w-[60%] h-48 bg-black mb-4 mx-[20%] rounded-md"
              key={id}
              onClick={() => handleItemClick(detail.id)}
            >
              <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-[#0977BE] rounded-md">
                <h1 className="my-4">{detail.value}</h1>
                <img src={apc} alt={detail.name} className="mb-4 w-24" />
                <p className="mb-4">{detail.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* {voting && (
        <div className="flex flex-col bg-[#1D1D1D] text-white tracking-wider md:w-[60%] h-full mx-[20%] mb-6 rounded-md">
          <h1 className="my-8 ml-8">Vote....</h1>

          <div className="w-[60%] h-48 bg-black mb-4 mx-[20%] rounded-md">
            <div className="flex flex-col relative items-center w-full h-full bg-gradient-to-r from-[#0977BE] rounded-md">
              <h1 className="my-4">{detail.value}</h1>
              <img src={apc} alt={detail.name} className="mb-4 w-24" />
              <p className="mb-4">{detail.name}</p>
              <button className="absolute right-4 bottom-2 text-black font-bold bg-white rounded-md w-24 h-8">
                Cancel
              </button>
              <form
                onSubmit={handleSubmit}
                className="flex relative w-full justify-between px-4 text-black font-bold "
              >
                <input
                  className="absolute bottom-16"
                  type="checkbox"
                  required
                />
                <label className="absolute bottom-14 mb-1 left-10 text-white font-normal">
                  verify
                </label>
                <button className="absolute left-4 bottom-4 bg-yellow-400 rounded-md w-24 h-8">
                  Vote
                </button>
              </form>
            </div>
          </div>
        </div>
      )} */}
    </main>
  );
};

export default Election;
