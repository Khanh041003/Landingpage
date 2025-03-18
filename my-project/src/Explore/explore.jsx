import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { BatchDetail } from "../components/BatchDetail";

export function ExplorePage() {
    const [isshow, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [batchDetail, setBatchDetail] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="bg-[#050507] min-h-screen flex flex-col bg-fixed bg-center bg-cover scroll-smooth">
            {/* Navbar */}
            <nav style={{backgroundColor:'#000'}}className="backdrop-blur-lg fixed top-0 left-0 w-full shadow-md p-4 flex justify-between items-center text-white">
                <div className="logo">
                    <img className="w-[100px]" src="../../public/img/logo.png" alt="logo" />
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-lg font-semibold">
                    <span className="cursor-pointer hover:opacity-80 transition-opacity">Batches</span>
                    <span className="cursor-pointer hover:opacity-80 transition-opacity">Testnet</span>
                    <div className="search-tool">
                        <input className="bg-white p-2 text-[#000] rounded-md w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            type="text"
                            placeholder="Enter batch or proof hash ..." />
                    </div>
                    <div className="flex gap-4">
                        <i className="fa-brands fa-medium hover:scale-110"></i>
                        <i className="fa-brands fa-telegram hover:scale-110"></i>
                        <i className="fa-brands fa-discord hover:scale-110"></i>
                        <i className="fa-brands fa-x-twitter hover:scale-110"></i>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-xl text-[#fff]" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-[60px] left-0 w-full bg-[#000]/90 backdrop-blur-lg flex flex-col items-center gap-4 p-4 md:hidden">
                        <span className="cursor-pointer hover:opacity-80 transition-opacity">Batches</span>
                        <span className="cursor-pointer hover:opacity-80 transition-opacity">Testnet</span>
                        <div className="search-tool w-full px-4">
                            <input className="bg-white p-2 text-[#000] rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                type="text"
                                placeholder="Enter batch or proof hash ..." />
                        </div>
                        <div className="flex gap-4">
                            <i className="fa-brands fa-medium hover:scale-110"></i>
                            <i className="fa-brands fa-telegram hover:scale-110"></i>
                            <i className="fa-brands fa-discord hover:scale-110"></i>
                            <i className="fa-brands fa-x-twitter hover:scale-110"></i>
                        </div>
                    </div>
                )}
            </nav>

            {/* Nội dung trang Explore */}
            {batchDetail ? (
                <BatchDetail />
            ) : (
                <div className="mt-[120px] text-center px-4">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">LayerEdge Explorer</h1>
                    <div className="explore-content container mx-auto mt-10 flex flex-col items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-[#fff] max-w-[1000px]">
                            {[
                                { label: "Total Batches", value: 43509 },
                                { label: "Verified Proofs", value: 436194 },
                                { label: "Services Manager", value: "Ykjdahsfaghhqeh9" },
                                { label: "Total Gas Saved in $USD", value: 3770730 }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between p-4 items-center gap-5 w-full bg-[#000] rounded-xl shadow-lg">
                                    <p className="text-2xl">
                                        {isshow && typeof item.value === "number" ? <CountUp end={item.value} duration={5} /> : item.value}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span>{item.label}</span>
                                        <i className="fa-solid fa-diagram-project"></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full max-w-[700px] bg-[#0c0c10] flex justify-between items-center rounded-xl shadow-lg mt-5 p-3 text-white text-sm sm:text-base">
                            Protocols Aggregated by LayerEdge
                            <div className="flex gap-2 items-center">
                                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                    <img key={num} className="w-[30px]" src={`../../public/img/icon-${num}.webp`} alt="as" />
                                ))}
                            </div>
                        </div>

                        <div className="w-full max-w-[700px] bg-[#000] flex justify-between items-center rounded-xl p-3 text-white mt-5 border border-[#312e2e]">
                            <span>Recent Batches</span>
                            <div className="text-sm">
                                <span>Last updated: <strong>22:50</strong></span>
                                <a href="#" className="ml-2 text-blue-400 hover:underline">View all</a>
                            </div>
                        </div>

                        <div className="w-full max-w-[700px] bg-[#000] mt-5 p-4 rounded-xl border border-[#312e2e] mb-10">
                            <ul className="text-white flex flex-col gap-3">
                                {["dsadsad", "1244", "sdadsada", "24141", "d223rsad"].map((item, index) => (
                                    <li key={index}
                                        className="text-xl flex justify-between items-center p-2 rounded-lg border border-transparent hover:border-[#433b45] transition-all cursor-pointer duration-200"
                                        onClick={() => setBatchDetail(true)}
                                    >
                                        {item}
                                        <i className="fa-solid fa-arrow-right transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1 hover:text-gray-300"></i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="footer w-full bg-[#000] text-white text-center py-5">
                <p>© 2021 LayerEdge. All rights reserved.</p>
            </div>
        </div>
    );
}
