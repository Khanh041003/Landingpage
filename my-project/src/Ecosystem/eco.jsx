import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";

export function Ecosystem() {
    return (
        <div className="bg-[#000] min-h-screen flex flex-col bg-fixed bg-center bg-cover scroll-smooth ">
            {/* Navbar */}
            <div className="nav">
                <Navbar />
            </div>
            <div className="eco container w-full flex-1 pt-40 mb-20">
                <div className="eco-title text-center text-white text-5xl font-bold">
                    Our Ecosystem Partners
                </div>
                <div className="eco-partnerBox flex flex-col items-center justify-center mt-20">
                    {/* 1*/}
                    <div className="eco-partner ">
                        <h3 className="partnerName text-4xl mb-5  font-bold text-[#229ddb]">Chains</h3>
                        <div className="app-list grid grid-cols-3 gap-4">
                            {Array(6).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] h-[150px] bg-[#141414] rounded-xl flex justify-center items-center
                            transition-transform duration-300 ease-in-out hover:scale-102 hover:bg-[#1f1f1f] shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-[250px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90"
                                        src="../../public/img/runeschain.webp"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="eco-partner  mt-16">
                        <h3 className="partnerName text-4xl mb-5 text-green-300 font-bold">ZK Provers</h3>
                        <div className="app-list grid grid-cols-3 gap-4">
                            {Array(3).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] h-[150px] bg-[#141414] rounded-xl flex justify-center items-center
                            transition-transform duration-300 ease-in-out hover:scale-102 hover:bg-[#1f1f1f] shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-[250px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90"
                                        src="../../public/img/fermah.webp"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 3*/}
                    <div className="eco-partner  mt-16">
                        <h3 className="partnerName text-4xl mb-5 text-blue-700 font-bold">AI</h3>
                        <div className="app-list grid grid-cols-3 gap-4">
                            {Array(4).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] h-[150px] bg-[#141414] rounded-xl flex justify-center items-center
                            transition-transform duration-300 ease-in-out hover:scale-102 hover:bg-[#1f1f1f] shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-[250px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90"
                                        src="../../public/img/supersight.webp"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 4*/}
                    <div className="eco-partner  mt-16">
                        <h3 className="partnerName text-4xl mb-5 text-orange-500 font-bold">zkVM</h3>
                        <div className="app-list grid grid-cols-3 gap-4">
                            {Array(4).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] h-[150px] bg-[#141414] rounded-xl flex justify-center items-center
                            transition-transform duration-300 ease-in-out hover:scale-102 hover:bg-[#1f1f1f] shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-[100px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90"
                                        src="../../public/img/nexus.webp"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 5*/}
                    <div className="eco-partner  mt-16">
                        <h3 className="partnerName text-4xl mb-5 text-pink-400 font-bold">DA</h3>
                        <div className="app-list grid grid-cols-3 gap-4">
                            {Array(2).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] h-[150px] bg-[#141414] rounded-xl flex justify-center items-center
                            transition-transform duration-300 ease-in-out hover:scale-102 hover:bg-[#1f1f1f] shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-[100px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90"
                                        src="../../public/img/orochi.webp"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="eco-footer">
                <Footer/>
            </div>
        </div>
    );
}
