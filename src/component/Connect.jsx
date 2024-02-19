import vline from "../resources/icons/Vline.svg";
import arrow from "../resources/icons/Arrow-down.svg";
import arrowup from "../resources/icons/Arrow-up.svg";
import arrowright from "../resources/icons/Arrow-right.svg";
import metamask from "../resources/icons/Metamask.svg";
import UseAuthContext from "../component/Context/UseAuthContext";



const Connect = (props) => {
    const { user, dispatch } = UseAuthContext();
    console.log(user);

    const handleconnect = () => {
        const connect = document.querySelector(".connect");
        const menu = document.querySelector('.menu');
        const arrowup = document.querySelector(".arrowup");
        const arrowdown = document.querySelector(".arrowdown");
         if (connect.style.display === "block") {
             connect.style.display = "none";
             arrowup.style.display = "none";
             arrowdown.style.display = "block";
            } else {      
             connect.style.display = "block";
             menu.style.display = "none";
             arrowup.style.display = "block";
             arrowdown.style.display = "none";
            }
    }

    const handlebalance = () => {
        const balances = document.querySelector(".balance");
        const menu = document.querySelector('.menu');
        const arrowup = document.querySelector(".arrowup1");
        const arrowdown = document.querySelector(".arrowdown1");
         if (balances.style.display === "block") {
             balances.style.display = "none";
             arrowup.style.display = "none";
             arrowdown.style.display = "block";
            } else {      
             balances.style.display = "block";
             menu.style.display = "none";
             arrowup.style.display = "block";
             arrowdown.style.display = "none";
            }
    }

    const walletConnect = () => {
        const connect = document.querySelector(".connect");
        const wallet = { address: "0xB48e1B00c42B7eF57082b927C819882Eb06CF706", balance: "12.3456789" };
        dispatch({
            type: "CONNECT",
            payload: wallet
        });
        localStorage.setItem("Wallet", JSON.stringify(wallet));
        connect.style.display = "none";

    }

    return (
        <div>
             {!user && <div className="">
                <div onClick={handleconnect} className="flex items-center justify-between w-fit px-2 py-1 md:px-3 md:py-1.5 bg-[#FDD603] rounded-xl cursor-pointer">
                    <p className="font-['Libre_Baskerville'] text-[0.5rem] font-normal md:text-xs px-1 md:px-1.5">Connect</p>
                    <img src={vline} alt="Vertical line" className="px-1 md:px-1.5 md:h-[1rem]"/>
                    <img src={arrow} alt="Arrow down" className="arrowdown px-1 md:px-1.5 md:h-[8px]" />
                    <img src={arrowup} alt="Arrow up" className="arrowup hidden px-1 md:px-1.5 md:h-[8px]" />
                </div>
            </div>}
           { user && <div className="">
                <div onClick={handlebalance} className="flex items-center justify-between w-fit px-2 py-1 md:px-3 md:py-1.5 bg-[#FDD603] rounded-xl cursor-pointer">
                    <p className="font-['Libre_Baskerville'] text-[9px] font-normal md:text-xs px-1 md:px-1.5"> {user.address.slice(0, 5)}...{user.address.slice(user.address.length-3, user.address.length) }</p>
                    <img src={arrow} alt="Arrow down" className="arrowdown1 px-1 md:px-1.5 md:h-[8px]" />
                    <img src={arrowup} alt="Arrow up" className="arrowup1 hidden px-1 md:px-1.5 md:h-[8px]" />
                </div>
            </div>}
            <div className="connect hidden bg-[#1D1D1D]/90 absolute right-0 md:right-1 lg:right-10 top-[62px] md:top-[76px] w-fit px-6 py-3.5 md:px-8 md:py-5 md:pt-8  rounded-b-md md:rounded-b-xl">
                <div onClick={walletConnect} className="flex w-fit px-3 py-1 md:px-4 md:py-1.5 bg-[#FDD603] rounded-lg cursor-pointer">
                    <img src={metamask} alt="Metamask Loogo"className="md:w-[20px]" />
                    <p className="text-[10px] ml-2.5 font-semibold md:text-sm md:ml-3.5">Connect Metamask</p>
                </div>
            </div>
            {user && <div className="balance hidden bg-[#1D1D1D]/90 absolute right-0 md:right-1 lg:right-8 top-[62px] md:top-[76px] w-fit px-3 py-3.5 md:px-8 md:py-5 md:pt-8 rounded-b-md md:rounded-b-xl text-white">
                <div className="flex w-fit items-center justify-between">
                    <div className="flex items-center justify-between mr-12 md:mr-14">
                        <div className="p-2 md:p-3 bg-[#FDD603] rounded-full"></div>
                        <p className="font-semibold text-[0.5rem] md:text-xs text-white pl-2">{user.address.slice(0, 5)}...{user.address.slice(user.address.length - 3, user.address.length)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-[#F5F5F5] mr-2.5"></div>
                        <div className="p-3 bg-[#F5F5F5]"></div>
                    </div>
                </div>
                <div>
                    <p className="text-center font-semibold md:font-normal text-[0.5rem] md:text-sm md:text-xs py-2.5 md:py-3.5">Balance</p>
                    <p className="text-xs text-center font-semibold md:text-lg pb-2.5 md:pb-3.5">{user.balance.slice(0, 6)}... ETH</p>
                    <div className="w-full border border-b-0 mb-2.5 md:mb-3.5"></div>
                    <div className="px-1.5 py-[0.3125rem] md:px-2 md:py-2 flex items-center justify-between w-full bg-[#D9D9D9]/10 rounded-lg cursor-pointer">
                        <p className="text-[0.5rem] text-medium md:text-[0.625rem] ">Transactions</p>
                        <img src={arrowright} alt="right arrow" className="md:h-[10px]"/>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Connect;