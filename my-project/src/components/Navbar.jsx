import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false);

    // Cập nhật trạng thái khi resize màn hình
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className=" navbar bg-black text-white fixed top-0 left-0 w-full shadow-md">
            {isMobile ? (
                // Mobile Navbar
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <img src="/img/logo.png" alt="LayerEdge Logo" className="w-24" />
                    <button className="text-[#000]" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                    {/* Menu Mobile */}
                    {isOpen && (
                        <div className="absolute top-28 left-0 w-full bg-black text-white">
                            <ul className="navbar-menu flex flex-col items-center py-4 space-y-4">
                                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                                <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
                                <li><a href="/ecosystem" className="hover:text-gray-400">Ecosystem</a></li>
                                <li><a href="/docs" className="hover:text-gray-400">Docs</a></li>
                                <li><a href="/explore" className="hover:text-gray-400">Explore</a></li>
                                <a href="/dashboard" className="text-[#000] bg-[] px-4 py-2 border border-gray-400 rounded-3xl hover:bg-gray-700">
                                    Run a light node
                                </a>
                            </ul>

                        </div>
                    )}
                </div>
            ) : (
                // Desktop Navbar
                <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                    <img src="/img/logo.png" alt="LayerEdge Logo" className="w-32" />
                    <ul className="navbar-menu flex space-x-6">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
                        <li><a href="/ecosystem" className="hover:text-gray-400">Ecosystem</a></li>
                        <li><a href="/docs" className="hover:text-gray-400"></a>Docs</li>
                        <li><a href="/explore" className="hover:text-gray-400">Explore</a></li>
                    </ul>
                    <a style={{color:'#fff'}} href="/dashboard" className="text-[#000] bg-[] px-4 py-2 border border-gray-400 rounded-3xl hover:bg-gray-700">
                        Run a light node
                    </a>
                </div>
            )}
        </nav>
    );
};

