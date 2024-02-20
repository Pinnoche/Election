import React from "react";
import voting from "../resources/icons/Voting.svg";
import blockchain from "../resources/icons/Blockchain.svg";

const Home = (props) => {
  return (
    <main className="py-6 md:py-16 lg:py-24 h-[60vh] sm:h-screen flex items-center justify-center">
      <div className="w-[80%] md:w-[65%] lg:w-[50%] mx-auto p-6 md:p-10 lg:p-12 bg-[#1D1D1D]/90 text-white rounded-md md:rounded-xl">
        <p className="text-base lg:text-xl font-semibold pb-2 md:pb-3 lg:pb-5">
          What we do?
        </p>
        <div className="flex items-center justify-center">
          <img
            src={voting}
            alt="Voting logo"
            className="px-4 lg:px-6 lg:w-[25%]"
          />
          <img
            src={blockchain}
            alt="Blockchain illustration"
            className="px-4 lg:px-6 lg:w-[25%]"
          />
        </div>
        <p className='text-[0.5rem] md:text-[0.625rem] leading-[0.8125rem] lg:text-xs md:leading-4 lg:leading-5 font-extralight pt-2 md:pt-3 lg:pt-5  tracking-wide font-["Open_Sans"]  '>
          E-Voting is a decentralized application that implements a voting smart
          contract on a blockchain. This is to prevent rigging and manipulation
          elections by providing transparency, censorship, traceable and secure
          environment for conducting elections.
        </p>
      </div>
    </main>
  );
};

export default Home;
