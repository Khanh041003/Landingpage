export function ExplorePage() {
    return (
        <div className="bg-[#050507] min-h-screen flex flex-col bg-fixed bg-center bg-cover scroll-smooth" style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2200 700'><style>rect { width: 118px; height: 118px; fill: rgb(4, 4, 6); stroke: rgb(19,19,19); }</style><rect x='2.5' y='2.5'/><rect x='125.5' y='2.5'/><rect x='248.5' y='2.5'/><rect x='371.5' y='2.5'/><rect x='494.5' y='2.5'/><rect x='617.5' y='2.5'/><rect x='740.5' y='2.5'/><rect x='863.5' y='2.5'/><rect x='986.5' y='2.5'/><rect x='1109.5' y='2.5'/><rect x='1232.5' y='2.5'/><rect x='1355.5' y='2.5'/><rect x='1478.5' y='2.5'/><rect x='1601.5' y='2.5'/><rect x='1724.5' y='2.5'/><rect x='2.5' y='125.5'/><rect x='125.5' y='125.5'/><rect x='248.5' y='125.5'/><rect x='371.5' y='125.5'/><rect x='494.5' y='125.5'/><rect x='617.5' y='125.5'/><rect x='740.5' y='125.5'/><rect x='863.5' y='125.5'/><rect x='986.5' y='125.5'/><rect x='1109.5' y='125.5'/><rect x='1232.5' y='125.5'/><rect x='1355.5' y='125.5'/><rect x='1478.5' y='125.5'/><rect x='1601.5' y='125.5'/><rect x='1724.5' y='125.5'/><rect x='2.5' y='248.5'/><rect x='125.5' y='248.5'/><rect x='248.5' y='248.5'/><rect x='371.5' y='248.5'/><rect x='494.5' y='248.5'/><rect x='617.5' y='248.5'/><rect x='740.5' y='248.5'/><rect x='863.5' y='248.5'/><rect x='986.5' y='248.5'/><rect x='1109.5' y='248.5'/><rect x='1232.5' y='248.5'/><rect x='1355.5' y='248.5'/><rect x='1478.5' y='248.5'/><rect x='1601.5' y='248.5'/><rect x='1724.5' y='248.5'/></svg>")`
        }}>

            {/* Navbar */}
            <div className="explore-nav bg-[#000]/70 backdrop-blur-lg h-[100px] text-white fixed top-0 left-0 w-full shadow-md flex justify-around items-center transition-all duration-300 animate-fade-in">
                <div className="logo">
                    <img className="w-[100px]" src="../../public/img/logo.png" alt="logo" />
                </div>
                <div className="batches font-semibold text-lg hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                    Batches
                </div>
                <div className="icon flex gap-4">
                    <i className="fa-brands fa-medium transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                    <i className="fa-brands fa-telegram transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                    <i className="fa-brands fa-discord transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                    <i className="fa-brands fa-x-twitter transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                </div>
                <div className="search-tool">
                    <input className="bg-white p-2 text-[#000] rounded-md w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" type="text" placeholder="Enter batch or proof hash ..." />
                </div>
                <div className="icon-2 flex gap-4">
                    <i className="fa-brands fa-github transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                    <i className="fa-solid fa-book transition-transform duration-200 hover:scale-110 hover:opacity-80 cursor-pointer"></i>
                </div>
                <div className="testnet font-semibold text-lg hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                    Testnet
                </div>
                <div className="detail flex gap-2 border border-white p-2 rounded-md">
                    <p className="border-r-1 p-1">Direct Settlement Cost $10.38</p>
                    <p className="ml-1 p-1">Using testnet $1.04</p>
                </div>
            </div>

            {/* Nội dung trang Explore */}
            <div className="mt-[150px] ">
                <h1 className="text-white text-center text-4xl font-bold">LayerEdge Explorer</h1>
                <div className="explore-content container mx-auto mt-10 flex flex-col justify-center items-center ">
                    <div className="avange grid grid-cols-2 gap-3">
                        <div className="total-batches flex justify-around items-center gap-10 w-[500px] h-[70px] bg-[#000] rounded-xl shadow-lg">
                            <p className="text-5xl">43,509</p>
                            <div className="flex items-center gap-2">
                                <span>Total Batches</span>
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                        </div>
                        <div className="total-batches flex justify-around items-center gap-10 w-[500px] h-[70px] bg-[#000] rounded-xl shadow-lg">
                            <p className="text-5xl">43,509</p>
                            <div className="flex items-center gap-2">
                                <span>Total Batches</span>
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                        </div>
                        <div className="total-batches flex justify-around items-center gap-10 w-[500px] h-[70px] bg-[#000] rounded-xl shadow-lg">
                            <p className="text-5xl">43,509</p>
                            <div className="flex items-center gap-2">
                                <span>Total Batches</span>
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                        </div>
                        <div className="total-batches flex justify-around items-center gap-10 w-[500px] h-[70px] bg-[#000] rounded-xl shadow-lg">
                            <p className="text-5xl">43,509</p>
                            <div className="flex items-center gap-2">
                                <span>Total Batches</span>
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-[700px] h-[100px] bg-[#000] flex justify-center items-center rounded-xl shadow-lg mt-1 gap-4">
                        <span>Protocols Aggregated by LayerEdge</span>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 0C8.83656 0 16 7.16344 16 16C7.16344 16 0 8.83656 0 0Z" fill="#30BF54" />
                                <path d="M32 32C23.1634 32 16 24.8366 16 16C24.8366 16 32 23.1634 32 32Z" fill="#30BF54" />
                                <path d="M16 16C16 11.5817 19.5817 8 24 8C24 12.4183 20.4183 16 16 16Z" fill="#30BF54" />
                                <path d="M16 16C16 20.4183 12.4183 24 8 24C8 19.5817 11.5817 16 16 16Z" fill="#30BF54" />
                            </svg>
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-1.webp" alt="" />
                            <img className="w-[32px] h-[32px]"  src="../../public/img/icon-2.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-3.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-4.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-5.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-6.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-7.webp" alt="" />
                        </div>
                    </div>
                    <div className="w-[700px] h-[100px] bg-[#000] flex justify-center items-center rounded-xl shadow-lg mt-1 gap-4">
                        <span>Protocols Aggregated by LayerEdge</span>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M0 0C8.83656 0 16 7.16344 16 16C7.16344 16 0 8.83656 0 0Z" fill="#30BF54" />
                                <path d="M32 32C23.1634 32 16 24.8366 16 16C24.8366 16 32 23.1634 32 32Z" fill="#30BF54" />
                                <path d="M16 16C16 11.5817 19.5817 8 24 8C24 12.4183 20.4183 16 16 16Z" fill="#30BF54" />
                                <path d="M16 16C16 20.4183 12.4183 24 8 24C8 19.5817 11.5817 16 16 16Z" fill="#30BF54" />
                            </svg>
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-1.webp" alt="" />
                            <img className="w-[32px] h-[32px]"  src="../../public/img/icon-2.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-3.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-4.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-5.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-6.webp" alt="" />
                            <img className="w-[32px] h-[32px]" src="../../public/img/icon-7.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
