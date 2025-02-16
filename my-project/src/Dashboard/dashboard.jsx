import { useEffect, useState } from "react";
import { Connect } from "../components/ModalConnect";

export function Dashboard() {
    const [url, setUrl] = useState("");
    const [connected, setConneted] = useState(false);
    useEffect(() => {
        const connect = window.localStorage.getItem("connect");
        if (connect === "true") {
            setConneted(true);
            
        } else {
            setConneted(false);
        }
    }, []);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        setUrl(window.location.pathname);
    }, []);

    return (
        <div className="grid grid-cols-12 h-screen flex">
            {/* Cột trái - 2/12 */}
            <div className="left bg-[#000] col-span-2 text-left">
                <div className="logo mb-[50px] mt-[50px] flex justify-center">
                    <img src="../../public/img/logo.png" alt="Logo" />
                </div>
                <div className="menu-control mb-[70px] ml-[30px]">
                    <ul className="bg-black flex flex-col gap-4 text-[18px]">
                        <li
                            className={`flex items-center gap-2 cursor-pointer p-2 ${url === "/dashboard" ? "active" : ""
                                }`}
                        >
                            <i className="fa-solid fa-house"></i>
                            <span>Dashboard</span>
                        </li>
                        <li
                            className={`flex items-center justify-between cursor-pointer ${url === "/tasks" ? "active" : ""
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-list-check"></i>
                                <span>Tasks</span>
                            </div>
                            <i className="fa-solid fa-lock text-gray-400"></i>
                        </li>
                        <li
                            className={`flex items-center justify-between cursor-pointer ${url === "/proofs" ? "active" : ""
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-building-lock"></i>
                                <span>Proofs</span>
                            </div>
                            <i className="fa-solid fa-lock text-gray-400"></i>
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
                        <li className="flex items-center justify-between cursor-pointer hover:text-gray-300">
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
                    {connected ? (
                        <div className="dashboard-nav  flex items-center justify-between p-2 border-1">
                            <ul className="flex gap-3 items-center">
                                <li>Referals</li>
                                <li>Copy Referal Code</li>
                                <li>Day streak</li>
                                <li>Claim Reward</li>
                            </ul>
                            <button className="btn-connect_btn text-[18px]  text-[#000] bg-black-500 from-yellow-300" onClick={() => {window.localStorage.setItem("connect",false); window.location.reload()}}>Ip code :100093208328</button>
                        </div>
                    ) : (
                        <div className="flex justify-end items-center mr-[24px]">
                            <button className="btn-connect_btn text-[18px]  w-[250px] h-[50px] text-[#000] bg-black-500 from-yellow-300" onClick={() => { setShowModal(true) }}>Connect Wallet</button>
                        </div>
                    )}
                </div>
                {/* Trang Dashboard */}
                <div className="dashboard-main w-full mt-[24px] ml-[24px] flex flex-col  items-center">
                    {connected ? (
                        <div className="dashboard-content">
                            <h1 className="text-[20px]">Dashboard</h1>
                            <p>Welcome! Your wallet is connected.</p>
                        </div>
                    ) : (
                        <div className="announcement bg-[#3d3d3a] w-[400px] h-[300px] rounded-xl flex flex-col items-center justify-around">
                            <div className="flex flex-col items-center gap-3">
                                <h1 className="text-[20px]">Connect Wallet</h1>
                                <p>Please connect your wallet to continue</p>
                            </div>
                            <button
                                className="bg-blue-500 text-[#000] w-[300px]"
                                onClick={() => setShowModal(true)}
                            >
                                Connect Wallet
                            </button>
                        </div>
                    )}

                    <Connect show={showModal} onClose={() => setShowModal(false)} />

                </div>
            </div>
        </div>
    );
}
