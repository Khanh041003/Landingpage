export function MainPage() {
    return (
        <>
            <div className="App">
                {/* Menu điều hướng */}
                <nav className="navbar text-[18px]">
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
                        className=" flex items-center justify-center rounded-3xl transition-all  hover:bg-[#3e3c3c] cursor-pointer"
                    >
                        <div className="h-[50px] text-white flex justify-center items-center p-2 border border-[#ccc] duration-300 cursor-pointer rounded-2xl p-4">
                            Run a light node
                        </div>
                    </a>
                </nav>
                <div className="main-content">
                    {/* Phần chính của trang */}
                    <header className="hero-section" id="home">
                        <p className='text-[20px]' >Powering trustless settlement vs trust-minized verification on Bitcoin at 99% lower cost for all Layers & Apps</p>
                        <h1 className=" text-[50px] font-bold">
                            Bitcoin Backed Internet
                        </h1>

                        <button className="cta-button">Get Started</button>
                    </header>

                    
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
                    {/* Phần 3 - Aggregated zk Proof */}
                    <section className="zk-proof-section" id="zk-proof">
                        <div className="zk-proof-container">
                        <div className="zk-proof-text">
                            <h2>Aggregated zk Proof</h2>
                            <p>
                            LayerEdge uses zero-knowledge proofs (zk-proofs) to aggregate multiple transactions into a single proof, ensuring efficiency and privacy.
                            </p>
                        </div>
                        <div className="zk-proof-image">
                            <img src="zk-proof-diagram.png" alt="zk Proof Diagram" />
                        </div>
                        </div>
                    </section>
                    {/* Phần tính năng */}
                    <section className="features-section" id="features">
                        <h2>Features</h2>
                        <div className="feature-grid">
                            <div className="feature-item">
                                <h3>Scalability</h3>
                                <p>Enabling high throughput with minimal on-chain footprint.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Security</h3>
                                <p>Leverages Bitcoin’s security model for trust-minimized execution.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Efficiency</h3>
                                <p>Optimized resource allocation for seamless integration.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Efficiency</h3>
                                <p>Optimized resource allocation for seamless integration.</p>
                            </div>
                        </div>
                    </section>

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