import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";

export function Ecosystem() {
    return (
        <div className="bg-[#000] min-h-screen flex flex-col bg-fixed bg-center bg-cover scroll-smooth ">
            {/* Navbar */}
            <div className="nav">
                <Navbar />
            </div>
            <div className="eco container w-full flex-1 pt-40 md:pt-40 mb-20 px-4 space-y-16 ">
                <div className="eco-title text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                    Our Ecosystem Partners
                </div>

                <div className="eco-partnerBox flex flex-col items-center justify-center mt-20 md:mt-20 space-y-16">
                    {/* Chains */}
                    <div className="eco-partner">
                        <h3 className="partnerName text-2xl md:text-4xl mb-5 font-bold text-[#229ddb]">Chains</h3>
                        <div className="app-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array(6).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-[350px] md:w-[400px] h-[120px] md:h-[150px] bg-[#141414] rounded-xl flex justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg cursor-pointer">
                                    <img className="w-[50%] max-w-[350px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90" src="/img/runeschain.webp" alt="Chains" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ZK Provers */}
                    <div className="eco-partner">
                        <h3 className="partnerName text-2xl md:text-4xl mb-5 font-bold text-green-400">ZK Provers</h3>
                        <div className="app-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array(3).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-[350px] md:w-[400px] h-[120px] md:h-[150px] bg-[#141414] rounded-xl flex justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg cursor-pointer">
                                    <img className="w-[50%] max-w-[350px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90" src="/img/fermah.webp" alt="Chains" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI */}
                    <div className="eco-partner">
                        <h3 className="partnerName text-2xl md:text-4xl mb-5 text-blue-700 font-bold">AI</h3>
                        <div className="app-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array(4).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-[350px] md:w-[400px] h-[120px] md:h-[150px] bg-[#141414] rounded-xl flex justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg cursor-pointer">
                                    <img className="w-[60%] max-w-[250px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90" src="/img/supersight.webp" alt="AI" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* zkVM */}
                    <div className="eco-partner">
                        <h3 className="partnerName text-2xl md:text-4xl mb-5 text-orange-500 font-bold">zkVM</h3>
                        <div className="app-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array(4).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-[350px] md:w-[400px] h-[120px] md:h-[150px] bg-[#141414] rounded-xl flex justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg cursor-pointer">
                                    <img className="w-[50%] max-w-[100px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90" src="/img/nexus.webp" alt="zkVM" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DA */}
                    <div className="eco-partner">
                        <h3 className="partnerName text-2xl md:text-4xl mb-5 text-pink-400 font-bold">DA</h3>
                        <div className="app-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Array(2).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-[350px] md:w-[400px] h-[120px] md:h-[150px] bg-[#141414] rounded-xl flex justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#1f1f1f] shadow-lg cursor-pointer">
                                    <img className="w-[80%] max-w-[250px] h-auto rounded-lg transition-opacity duration-300 hover:opacity-90" src="/img/orochi.webp" alt="DA" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="eco-footer">
                <Footer />
            </div>
        </div>
    );
}
