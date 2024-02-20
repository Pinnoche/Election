import search from "../resources/icons/Search.svg";
import close from "../resources/icons/close.png";
import results from "../component/Data/Cards.json";
import Cards from "../component/ResultCards";
import resultDetail from "../component/Data/ResultDetails.json";
import ResultDetailCard from "../component/ResultDetail";
import { useState } from "react";

const Result = (props) => {
  const [detail, setdetail] = useState(null);

  const handleresult = (e) => {
    const resultmain = document.querySelector(".resultmain");
    const cancel = document.querySelector(".cancel");
    setdetail(resultDetail[e]);
    resultmain.style.display = "none";
    cancel.style.display = "block";
  };
  const handlecancel = () => {
    const cancel = document.querySelector(".cancel");
    const resultmain = document.querySelector(".resultmain");
    setdetail(null);
    resultmain.style.display = "block";
    cancel.style.display = "none";
  };

  return (
    <main className="py-10 md:py-16 lg:py-24 text-white md:min-h-[90vh]">
      <div
        onClick={handlecancel}
        className="cancel hidden pb-2 md:pb-4 mx-auto w-[12px] md:w-[17px] cursor-pointer"
      >
        <img src={close} alt="Cancel" />
      </div>
      <div className="resultmain w-[90%] mx-auto bg-[#1D1D1D]/90 px-8 py-6 rounded-md sm:w-[80%] md:w-[70%] lg:w-[77%] xl:w-[65%] sm:py-12">
        <div className="flex items-center mb-5 sm:justify-center sm:mb-8 md:mb-10 md:mb-14">
          <div className="px-3 py-3 bg-[#F5F5F5] rounded-l-lg sm:rounded-l-xl">
            <img
              src={search}
              alt="Search Lens"
              className="w-[0.875rem] sm:w-[1rem]"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="py-2.5 w-full pl-3 rounded-r-lg text-xs text-black outline-0 sm:w-[75%] md:w-[65%] lg:w-[50%] sm:py-2.5 sm:pl-3.5 sm:text-sm sm:rounded-r-xl"
          />
        </div>
        <div className="lg:flex flex flex-wrap items-center justify-center">
          {results.map((result) => (
            <Cards
              onClick={() => handleresult(result.id)}
              key={result.id}
              election_name={result.election_name}
              win_percent={result.win_percent}
            />
          ))}
        </div>
      </div>
      {detail && (
        <ResultDetailCard
          end_date={detail.end_date}
          start_date={detail.start_date}
          ename={detail.ename}
          total_vote={detail.total_vote}
          mwin_percent={detail.mwin_percent}
          candidates={detail.candidates}
        />
      )}
    </main>
  );
};

export default Result;
