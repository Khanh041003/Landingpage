import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Playnode } from "../components/playnode";

export function Dashboard() {
    const [url, setUrl] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isConnected } = useAccount();

    useEffect(() => {
        setUrl(window.location.pathname);
    }, []);

    return (
        <div className="flex h-screen bg-black text-white">
            {/* Sidebar - Responsive */}
            <div className={`fixed md:relative bg-black w-[250px] md:w-[200px] h-full transition-transform z-50 border-r-1 border-gray-700 transform overflow-visible
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                
                {/* Đóng menu trên mobile */}
                <button className="absolute top-4 right-4 md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                    ✖
                </button>

                <div className="logo my-6 flex justify-center">
                    <img src="../../img/logo.png" alt="Logo" className="w-24" />
                </div>

                {/* Navigation Menu */}
                <div style={{backgroundColor:'#000'}} className="flex flex-col  text-[16px] px-6">
                    <ul className="">
                        <li className={`p-2  items-center cursor-pointer ${url === "/dashboard" ? "text-blue-400" : ""}`}>
                            <i className="fa-solid fa-house mr-2"></i> Dashboard
                        </li>
                        <li className={`p-2  items-center cursor-pointer ${!isConnected ? "opacity-50" : ""}`}
                            onClick={(e) => !isConnected && e.preventDefault()}>
                            <i className="fa-solid fa-list-check mr-2"></i> Tasks
                        </li>
                        <li className={`p-2  items-center cursor-pointer ${!isConnected ? "opacity-50" : ""}`}
                            onClick={(e) => !isConnected && e.preventDefault()}>
                            <i className="fa-solid fa-building-lock mr-2"></i> Proofs
                        </li>
                        <li className="p-2  items-center cursor-pointer">
                            <i className="fa-solid fa-handshake-simple mr-2"></i> Referrals
                        </li>
                    </ul>

                    {/* Help Menu */}
                    <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col">
                        <ul className="space-y-4">
                            <li className="p-2  items-center cursor-pointer hover:text-gray-300">
                                <i className="fa-solid fa-bars mr-2"></i> FAQ
                            </li>
                            <li className="p-2  items-center cursor-pointer hover:text-gray-300">
                                <i className="fa-solid fa-magnifying-glass-dollar mr-2"></i> Explorer
                            </li>
                            <li className="p-2  items-center cursor-pointer hover:text-gray-300"
                                onClick={() => { window.location.href = "/" }}>
                                <i className="fa-solid fa-link mr-2"></i> Website
                            </li>
                        </ul>
                        <ConnectButton/>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-10 bg-[#000] p-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    {/* Button mở menu trên mobile */}
                    <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(true)}>
                        ☰
                    </button>
                </div>

                {/* Dashboard Content */}
                <div className="flex flex-col items-center jsutify-center z-100 ">
                    {isConnected ? (
                        <div className="dashboard-content w-full">
                            <Playnode />
                        </div>
                    ) : (
                        <div className="announcement bg-[#3d3d3a] w-full max-w-[400px] overflow-visible flex-shrink-0 h-[300px] rounded-xl flex flex-col items-center justify-center p-4 text-center">
                            <h1 className="text-[20px]">Connect Wallet</h1>
                            <p>Please connect your wallet to continue</p>
                            <ConnectButton/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
