import { useEffect, useState } from "react";

export function MainPage() {
    const [position, setPosition] = useState("25%");
  const [rotationE, setRotationE] = useState(0);
  const [rotationB, setRotationB] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newPos = parseFloat(prev) + 1;
        if (newPos >= 75) {
          return "25%";
        }
        return `${newPos}%`;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotationE((prev) => (prev + 2) % 360);
      setRotationB((prev) => (prev - 2) % 360);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);
    return (
        <>
            <div className="App">
                {/* Menu điều hướng */}
                <div className="relative w-full h-screen">
                    {/* Video Background */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://www.layeredge.io/video/home-hero.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                    
                    <nav className="navbar text-[18px] a">
                        <div className="navbar-logo">
                            <img src="../../public/img/logo.png" alt="LayerEdge Logo" />
                        </div>
                        <ul className="navbar-menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#ecosystem">Ecosystem</a></li>
                            <li><a href="#docs">Docs</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                        <a
                            href="/dashboard"
                            className=" flex items-center justify-center rounded-3xl transition-all cursor-pointer"
                        >
                            <div className="h-[50px] text-white flex justify-center items-center p-2 border border-[#ccc] duration-300 cursor-pointer rounded-2xl p-4 hover:bg-[#3e3c3c]">
                                Run a light node
                            </div>
                        </a>
                    </nav>
                    
                    <header className="hero-section absolute" id="home">
                        <p className='text-[20px]' >Powering trustless settlement vs trust-minized verification on Bitcoin at 99% lower cost for all Layers & Apps</p>
                        <h1 className=" text-[50px] font-bold">
                            Bitcoin Backed Internet
                        </h1>

                        <button className="cta-button">Get Started</button>
                    </header>
                </div>
                
                <div className="main-content">

                    
                    {/* Phần 2 của trang chính - Giới thiệu LayerEdge */}
                    <section className="about-section" id="about">
                        <div className="about-container">
                        <h1 className=" text-[50px] font-bold">
                            Powering Trust-Minimized 
                        </h1>
                        <h1 className=" text-[50px] font-bold">
                            Settlement on Bitcoin 
                        </h1>
                        <h2 className="mt-10">Why LayerEdge?</h2>
                        <div className="about-container-text">
                        <p className="about-text">
                        LayerEdge opens door for anyone to tap into Bitcoins security, while taking only upto 1% of the Bitcoin blockspace they would have taken building directly without LayerEdge
                        </p>
                        </div>
                        <div className="about-content">
                            <div className="about-item">
                            <h3>Decentralized</h3>
                            <p>Ensures trust-minimized, permissionless operations.</p>
                            </div>
                            <div className="about-item">
                            <h3>Interoperable</h3>
                            <p>Seamlessly connects with existing blockchain infrastructures.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                        </div>
                        <div className="about-content">
                            <div className="about-item">
                            <h3>Decentralized</h3>
                            <p>Ensures trust-minimized, permissionless operations.</p>
                            </div>
                            <div className="about-item">
                            <h3>Interoperable</h3>
                            <p>Seamlessly connects with existing blockchain infrastructures.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                        </div>
                        <div className="about-content">
                            <div className="about-item">
                            <h3>Decentralized</h3>
                            <p>Ensures trust-minimized, permissionless operations.</p>
                            </div>
                            <div className="about-item">
                            <h3>Interoperable</h3>
                            <p>Seamlessly connects with existing blockchain infrastructures.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                            <div className="about-item">
                            <h3>Future-Proof</h3>
                            <p>Designed for long-term sustainability and growth.</p>
                            </div>
                        </div>
                        </div>
                    </section>
                    
                    {/* section3 */}
                    <div className="flex flex-col items-center mt-60 space-y-10">
                        <div className=" bg-black text-white p-10 rounded-[20px] shadow-lg border-2 border-white w-[600px] text-center">
                        <div className="flex justify-center items-center space-x-2">
                            <h2 className="text-lg font-semibold">LayerEdge</h2>
                            <p className="text-sm bg-gray-800 inline-block px-2 py-1 rounded-full">
                            Verification Layer
                            </p>
                        </div>
                        <div className=" mt-4 bg-gradient-to-b from-gray-300 to-gray-100 text-black px-6 py-4 rounded-lg inline-block text-center border border-gray-400 shadow-lg">
                            <p className="text-2xl font-bold">Aggregated zk proof</p>
                            <p className="text-sm text-gray-600 mt-1">PROOF AGGREGATION</p>
                        </div>
                        </div>
                        <div className=" bg-black text-white p-10 rounded-[20px] shadow-lg border-2 border-white w-[600px] text-center mt-10">
                        <h2 className="text-2xl font-bold">Bitcoin Network</h2>
                        <p className="text-sm text-gray-400 mt-2">
                            Aggregated Proof Verification on Bitcoin
                        </p>
                        </div>
                    </div>
                    {/* section4 */}
                    <div className="relative flex items-center justify-center min-h-screen ">
                    {/* Background lines and dots */}
                    <div className="absolute inset-0">
                        <div className="grid grid-cols-2 h-full">
                        <div className="relative flex items-center justify-end pr-10 mr-20">
                            <div className="relative w-70 h-70 flex items-center justify-center">
                            <div
                                className="absolute inset-0 border-4 border-dashed border-white rounded-full "
                                style={{ transform: `rotate(${rotationE}deg)` }}
                            ></div>
                            <span className="text-6xl font-bold text-white z-10">E</span>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-start pl-10">
                            <div className="relative w-32 h-32 flex items-center justify-center ml-40">
                            <div
                                className="absolute inset-0 border-4 border-dashed border-white rounded-full"
                                style={{ transform: `rotate(${rotationB}deg)` }}
                            ></div>
                            <span className="text-4xl font-bold text-white z-10">₿</span>
                            </div>
                        </div>
                        </div>
                        {/* Connecting line */}
                        <div className="absolute top-1/2 left-2/5 w-1/4 border-t-1 border-dashed border-gray-400" />
                        {/* Moving Label */}
                        <div
                        className="absolute top-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg"
                        style={{ left: position, transform: "translateY(-50%)" }}
                        >
                        Single ZK proofs
                        </div>
                    </div>
                    </div>

                    <svg className="svg-acctive" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
                        <rect className="mouse" x="0" y="0" width="800" height="300"/>
                        <polygon className="turn-01 darkestTulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
                        <polygon className="turn-02 darkTulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
                        <polygon className="turn-03 tulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
                        <polygon className="turn-04 paleTulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
                        <polygon className="turn-05 palestTulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
                    </svg>

                    {/* Phần hệ sinh thái */}
                    <section className="ecosystem-section" id="ecosystem">
                        <h2>Our Ecosystem</h2>
                        <p>Bringing together developers, enterprises, and Bitcoin enthusiasts.</p>
                    </section>
                    
                    {/* Footer */}
                    <footer className="footer">
                        <p>© 2025 LayerEdge. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    )
}
