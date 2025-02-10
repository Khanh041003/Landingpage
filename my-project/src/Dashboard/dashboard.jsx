import { useEffect, useState } from "react";

export function Dashboard() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.pathname);
    }, []);

    return (
        <div className="grid grid-cols-12 h-screen flex">
            {/* Cột trái - 1/4 */}
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

            {/* Cột phải - 3/4 */}
            <div className="bg-[#000] col-span-10">right</div>
        </div>
    );
}
