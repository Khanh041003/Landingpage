import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Playnode } from "../components/playnode";

export function Dashboard() {
    const [url, setUrl] = useState("");

    const { isConnected } = useAccount();
    useEffect(() => {
        setUrl(window.location.pathname);
    }, []); 
    <ConnectButton.Custom>
        {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
            const connected = mounted && account && chain;

            return (
                <button
                    onClick={connected ? openAccountModal : openConnectModal}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    {connected ? `Connected: ${account.displayName}` : "Connect Wallet"}
                </button>
            );
        }}
    </ConnectButton.Custom>
    return (
        <div className="grid grid-cols-12 h-screen flex text-[#fff]">
            {/* Cột trái - 2/12 */}
            <div className="left bg-[#000] col-span-2 text-left">
                <div className="logo mb-[50px] mt-[50px] flex justify-center">
                    <img src="../../img/logo.png" alt="Logo" />
                </div>
                <div className="menu-control mb-[70px] ml-[30px] ">
                    <ul className=" flex flex-col gap-4 text-[18px]">
                        <li
                            className={`flex items-center cursor-pointer p-2 ${url === "/dashboard" ? "active" : ""
                                }`}
                        >
                            <i className="fa-solid fa-house"></i>
                            <span>Dashboard</span>
                        </li>
                        <li
                            className={`flex items-center justify-between ${url === "/tasks" ? "active" : ""
                                } ${!isConnected ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            onClick={(e) => !isConnected && e.preventDefault()}
                        >
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-list-check"></i>
                                <span>Tasks</span>
                            </div>
                            {!isConnected && <i className="fa-solid fa-lock text-gray-400"></i>}
                        </li>

                        <li
                            className={`flex items-center justify-between ${url === "/proofs" ? "active" : ""
                                } ${!isConnected ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            onClick={(e) => !isConnected && e.preventDefault()}
                        >
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-building-lock"></i>
                                <span>Proofs</span>
                            </div>
                            {!isConnected && <i className="fa-solid fa-lock text-gray-400"></i>}
                        </li>

                        <li
                            className={`flex items-center gap-2 cursor-pointer ${url === "/referrals" ? "active" : ""
                                }`}
                        >
                            <i className="fa-solid fa-handshake-simple"></i>
                            <span>Referrals</span>
                        </li>
                    </ul>
                </div>
                <div className="menu-help ml-[30px]">
                    <ul className="bg-black flex flex-col gap-4  text-[18px]">
                        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 p-2">
                            <i className="fa-solid fa-bars"></i>
                            <span>FAQ</span>
                        </li>
                        <li className="flex items-center justify-between cursor-pointer hover:text-gray-300">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-magnifying-glass-dollar"></i>
                                <span>Explorer</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between cursor-pointer hover:text-gray-300" onClick={() => { window.location.href = "/" }}>
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-link"></i>
                                <span>Website</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Cột phải - 10/12 */}
            <div className="bg-[#000] col-span-10">
                <div className="dashboard-header mt-[70px]">
                    {isConnected ? (
                        <div className="flex items-center justify-between p-2 border-1 rounded-xl border-[#3d3d3a]">
                            <ul className="dashboard-nav flex gap-4 items-center">
                                <div className="flex  w-[300px] p-3 rounded-lg border border-[#9d9d8f] shadow-md transition-all hover:shadow-lg gap-2">
                                    <li className="flex items-center gap-2 font-semibold">
                                        <i className="fa-solid fa-users text-blue-500"></i> Referals
                                    </li>
                                    <li className="text-blue-400 cursor-pointer hover:underline transition-all">
                                        - Copy Referral Code
                                    </li>
                                </div>

                                <div className="flex  w-[300px] p-3 rounded-lg border border-[#9d9d8f] shadow-md transition-all hover:shadow-lg gap-2">
                                    <li className="flex items-center gap-2 font-semibold">
                                        <i className="fa-solid fa-fire text-red-500"></i> Day streak
                                    </li>
                                    <li className="flex items-center gap-2 font-semibold cursor-pointer hover:text-yellow-500 transition-all">
                                        <i className="fa-solid fa-gift text-yellow-400"></i> Claim Reward
                                    </li>
                                </div>
                            </ul>
                            <ConnectButton />
                        </div>
                    ) : (
                        <div className="flex justify-end items-center mr-[24px]">
                            {/* <ConnectButton label="Connect Wallet" /> */}
                        </div>
                    )}
                </div>
                {/* Trang Dashboard */}
                <div className="dashboard-main w-full mt-[24px] ml-[24px] flex flex-col  items-center">
                    {isConnected ? (
                        <div className="dashboard-content">
                            <Playnode/>
                        </div>
                    ) : (
                        <div className="announcement bg-[#3d3d3a] w-[400px] h-[300px] rounded-xl flex flex-col items-center justify-around">
                            <div className="flex flex-col items-center gap-3">
                                <h1 className="text-[20px]">Connect Wallet</h1>
                                <p>Please connect your wallet to continue</p>
                            </div>
                            <ConnectButton />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
