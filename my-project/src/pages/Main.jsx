import { useState } from "react";
import { Navbar } from "../components/Navbar";


export function MainPage() {


  const newsItems = [
    {
      id: 1,
      time: "1:07:04 AM",
      date: "March 1, 2025",
      description: "February Recap: Building, Shipping, and Scaling LayerEdge.",
    },
    {
      id: 2,
      time: "3:46:22 AM",
      date: "February 15, 2025",
      description: "LayerEdge Incentivized Testnet: Phase II Goes Live.",
    },
    {
      id: 3,
      time: "11:47:57 PM",
      date: "January 30, 2025",
      description: "Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero’s zkVM and Boundless for Proof...",
    },
  ];
  const [activeTab, setActiveTab] = useState('all');

  const content = {
    all: [
      {
        title: 'Fast Verification',
        description: 'Verify proofs in milliseconds, enabling scalable decentralized applications across multiple chains.',
      },
      {
        title: 'Affordable Settlement',
        description: 'Reduce verification costs dramatically, making blockchain innovation accessible to all.',
      },
      {
        title: 'Secure by Bitcoin',
        description: 'Utilize Bitcoin’s unparalleled security for trustless proof verification.',
      },
      {
        title: 'Fermah',
        description: 'Fermah is optimized for cheap, fast, and reliable ZK proof generation. It is architected to make ZKPs the default substrate for all computation.',
      },
      {
        title: 'Babylon',
        description: 'A revolutionary staking protocol for Bitcoin, allowing BTC holders to earn yields by securing Proof of Stake (PoS) blockchains trustlessly.',
      },
    ],
    bitcoin: [
      {
        title: 'Bitcoin Speed',
        description: 'Leverage Bitcoin’s network for rapid proof verification with minimal latency.',
      },
      {
        title: 'Cost Reduction',
        description: 'Slash settlement costs by integrating with Bitcoin’s efficient infrastructure.',
      },
      {
        title: 'Bitcoin Trust',
        description: 'Rely on Bitcoin’s proven security model for dependable proof validation.',
      },
    ],
    ethereum: [
      {
        title: 'Ethereum Compatibility',
        description: 'Seamlessly verify proofs for Ethereum applications with high efficiency.',
      },
      {
        title: 'Scalable Ethereum',
        description: 'Enable cost-effective scaling for Ethereum’s ecosystem with optimized verification.',
      },
      {
        title: 'Cross-Chain Bridge',
        description: 'Connect Ethereum and Bitcoin securely with interoperable proof solutions.',
      },
    ],
    Provers: [
      {
        title: 'Ethereum Compatibility',
        description: 'Seamlessly verify proofs for Ethereum applications with high efficiency.',
      },
      {
        title: 'Scalable Ethereum',
        description: 'Enable cost-effective scaling for Ethereum’s ecosystem with optimized verification.',
      },
      {
        title: 'Cross-Chain Bridge',
        description: 'Connect Ethereum and Bitcoin securely with interoperable proof solutions.',
      },
    ],


  };

  return (
    <>
      <div className="App  bg-[#000000] text-white">
        {/* Menu điều hướng */}
        <div className="relative w-full h-screen">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://www.layeredge.io/video/home-hero.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none "></div>



          <header className="hero-section absolute" id="home">
            <p className='text-[20px]' >Powering trustless settlement vs trust-minized verification on Bitcoin at 99% lower cost for all Layers & Apps</p>
            <h1 className=" text-[50px] font-bold">
              Bitcoin Backed Internet
            </h1>

            <button className="cta-button">Get Started</button>
          </header>

        </div>
        <Navbar />
        <div className="main-content min-h-screen flex flex-col items-center justify-center text-gray-900">
          {/* Phần 2 của trang chính - Giới thiệu LayerEdge */}


          <section className=" bg-[#000000] text-white py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className=" mx-auto text-center">
              {/* Tiêu đề */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  tracking-tight text-[#FFFFFF] transition-all duration-500 ease-in-out ">
                Powering Trust-Minimized
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#FFFFFF] transition-all duration-500 ease-in-out ">
                Settlement on Bitcoin
              </h2>

              {/* Mô tả */}
              <p className="text-base sm:text-lg md:text-xl text-[#A1A1A1] mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                LayerEdge provides rapid, low-cost verification of zero-knowledge and validity proofs,
                driving scalable and permissionless innovation on Bitcoin, Ethereum, and other chains.
              </p>

              {/* Các nút */}
              <div className="flex flex-wrap justify-center gap-2 mb-10 text-[#000000]">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`w-full sm:w-auto flex-shrink-0 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${activeTab === 'all'
                      ? 'bg-[#0D0D0D] text-[#FFFFFF] shadow-lg'
                      : 'bg-transparent border border-[#404040] text-[#A1A1A1] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
                    }`}
                >
                  All
                </button>

                <button
                  onClick={() => setActiveTab('bitcoin')}
                  className={`w-full sm:w-auto flex-shrink-0 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${activeTab === 'bitcoin'
                      ? 'bg-[#0D0D0D] text-[#FFFFFF] shadow-lg'
                      : 'bg-transparent border border-[#404040] text-[#A1A1A1] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
                    }`}
                >
                  Chains
                </button>

                <button
                  onClick={() => setActiveTab('ethereum')}
                  className={`w-full sm:w-auto flex-shrink-0 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${activeTab === 'ethereum'
                      ? 'bg-[#0D0D0D] text-[#FFFFFF] shadow-lg'
                      : 'bg-transparent border border-[#404040] text-[#A1A1A1] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
                    }`}
                >
                  Protocol Infra
                </button>

                <button
                  onClick={() => setActiveTab('Provers')}
                  className={`w-full sm:w-auto flex-shrink-0 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-105 ${activeTab === 'Provers'
                      ? 'bg-[#0D0D0D] text-[#FFFFFF] shadow-lg'
                      : 'bg-transparent border border-[#404040] text-[#A1A1A1] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
                    }`}
                >
                  ZK Provers
                </button>
              </div>


              {/* Các cột */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ">
                {content[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#000000] p-6 sm:p-8 rounded-xl shadow-md transition-all duration-300 ease-in-out border hover:scale-105 hover:shadow-x1 "
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#FFFFFF]">{item.title}</h3>
                    <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* section3 */}

          <div className="flex flex-col  items-center sm-mt-[100px] space-y-10 px-4">
            <div className="bg-black text-white p-10 rounded-[20px] shadow-lg border-2 border-white max-w-[600px] w-full text-center">
              <div className="flex justify-center items-center space-x-2">
                <h2 className="text-lg font-semibold">LayerEdge</h2>
                <p className="text-sm bg-gray-800 inline-block px-2 py-1 rounded-full">
                  Verification Layer
                </p>
              </div>
              <div className="mt-4 bg-gradient-to-b from-gray-300 to-gray-100 text-black px-6 py-4 rounded-lg inline-block text-center border border-gray-400 shadow-lg">
                <p className="text-2xl font-bold">Aggregated zk proof</p>
                <p className="text-sm text-gray-600 mt-1">PROOF AGGREGATION</p>
              </div>
            </div>
            <div className="bg-black text-white p-10 rounded-[20px] shadow-lg border-2 border-white max-w-[600px] w-full text-center mt-10">
              <h2 className="text-2xl font-bold">Bitcoin Network</h2>
              <p className="text-sm text-gray-400 mt-2">
                Aggregated Proof Verification on Bitcoin
              </p>
            </div>
          </div>

        </div>
      </div>

      <section className="py-12 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Whats New</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#000000] rounded-lg shadow-md border-gray-300 mt-20 mb-30">
              <thead>
              </thead>
              <tbody>
                {newsItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border border-gray-500 transition-colors duration-200" // Thêm border trắng
                  >
                    <td className="py-6 px-6 text-gray-600 border-gray-300">
                      {item.date}<br></br>
                      {item.time}
                    </td>
                    <td className="py-4 px-6 sm:text-2xl md:text-3xl text-white">
                      {item.description}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      <button className="bg-black">
                        Learn More
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {/* Logo and Description */}
            <div>
              <h1 className="text-x1 font-semibold mb-4" style={{ color: '#ffffff' }}>
                LayerEdge
              </h1>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                Security Layer on Bitcoin.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#ffffff' }}>
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Github
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Bitcoin Testnet Explorer
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#ffffff' }}>
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#docs" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm hover:text-blue-400 transition-colors" style={{ color: '#9CA3AF' }}>
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm" style={{ color: '#9CA3AF' }}>
            LayerEdge © 2025 . All rights reserved.
          </div>
        </div>

      </footer>


    </>
  )
}
