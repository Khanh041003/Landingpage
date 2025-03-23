import { useState } from 'react';
import Content from '../components/Maincontent'; // File mặc định
import SidebarRight from '../components/SidebarRight';
import AggregationContent from '../components/contents/AggregationContent.js';
import BuiltOnBabylonContent from '../components/contents/BuiltOnBabylonContent';
import SettlementModuleContent from '../components/contents/SettlementModuleContent';

export function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);
  const [isProofExpanded, setIsProofExpanded] = useState(true);
  const [isFrequently, setIsFrequently] = useState(true);
  const [isConsensus, setIsConsensus] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentContent, setCurrentContent] = useState('default');

  const renderContent = () => {
    switch (currentContent) {
      case 'aggregation':
        return <AggregationContent />;
      case 'builtOnBabylon':
        return <BuiltOnBabylonContent />;
      case 'settlementModule':
        return <SettlementModuleContent />;
      case 'default':
      default:
        return <Content />;
    }
  };

  return (
    <div>
      <div className='border-b border-gray-300'>
        <div className='flex bg-white m-3 justify-between items-center'>
          <div className="flex items-center">
            <button 
              className="md:hidden ml-5 focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg 
                className="w-6 h-6 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img src="/img/e.jpg" alt="LayerEdge Logo" className="w-9 h-9 ml-3" />
            <h2 className="text-xl font-bold flex items-center pl-2">LayerEdge</h2>
          </div>
          <div className="flex items-center">
            <button 
              className="md:hidden mr-5 focus:outline-none"
              onClick={() => setIsSearchDialogOpen(true)}
            >
              <svg 
                className="w-6 h-6 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="hidden md:flex max-w-md mr-6 items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg 
                    className="w-4 h-4 text-gray-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSearchDialogOpen && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-start z-50">
          <div className="bg-white w-full max-w-md mt-4 mx-4 rounded-lg shadow-lg">
            <div className="flex items-center p-3 border-b border-gray-200">
              <svg 
                className="w-5 h-5 text-gray-500 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                className="flex-1 outline-none text-gray-700"
                placeholder="Search content"
                autoFocus
              />
              <button 
                className="ml-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsSearchDialogOpen(false)}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative flex h-screen">
        <div 
          className={`${
            isSidebarOpen 
              ? 'absolute top-0 left-0 h-full w-64 bg-white z-50' 
              : 'hidden md:block'
          }`}
        >
          <div
            className={`w-80 p-4 bg-white shadow-md max-h-screen ${
              isHovered ? 'overflow-y-auto' : 'overflow-y-hidden'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">INTRODUCTION</h2>
              <ul className="space-y-1">
                <li>
                  <div
                    className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
                    onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                  >
                    <span className="mr-2">
                      {isIntroExpanded ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                    Introduction To LayerEdge
                  </div>
                  {isIntroExpanded && (
                    <ul className="ml-3 pl-2 border-l border-gray-200 space-y-1">
                      <li>
                        <div
                          className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
                          onClick={() => setIsProofExpanded(!isProofExpanded)}
                        >
                          <span className="mr-2">
                            {isProofExpanded ? (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </span>
                          Proof Aggregation Layer
                        </div>
                        {isProofExpanded && (
                          <ul className="ml-6 pl-2 border-l border-gray-200 space-y-1">
                            <li>
                              <a 
                                href="#" 
                                className="text-gray-600 hover:text-gray-900 block py-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentContent('aggregation');
                                }}
                              >
                                Aggregation
                              </a>
                            </li>
                            <li>
                              <a 
                                href="#" 
                                className="text-gray-600 hover:text-gray-900 block py-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentContent('builtOnBabylon');
                                }}
                              >
                                Built on Babylon
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-600 hover:text-gray-900 block py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentContent('settlementModule');
                          }}
                        >
                          Settlement Module (Live)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                          Verification Module
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 pl-6">
                    Try LayerEdge (Devnet)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 pl-6">
                    Use Cases
                  </a>
                </li>
                <div
                  className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
                  onClick={() => setIsFrequently(!isFrequently)}
                >
                  <span className="mr-2">
                    {isFrequently ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </span>
                  Frequently Asked Questions (FAQs)
                </div>
                {isFrequently && (
                  <ul className="ml-3 pl-2 border-l border-gray-200 space-y-1">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                        True Rollups on Bitcoin
                      </a>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">NETWORK</h2>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 pl-6">
                    Network Info
                  </a>
                </li>
                <div
                  className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
                  onClick={() => setIsConsensus(!isConsensus)}
                >
                  <span className="mr-2">
                    {isConsensus ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </span>
                  Consensus
                </div>
                {isConsensus && (
                  <ul className="ml-3 pl-2 border-l border-gray-200 space-y-1">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                        Proof Of Aggregation (PoAgg)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                        Universal Validator Set (UVS)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                        Light Node Verification via Stochastic Sampling of Proofs
                      </a>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">COMMUNITY</h2>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 flex items-center">
                    <span className="mr-2">💬</span> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 flex items-center">
                    <span className="mr-2">💬</span> Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 flex items-center">
                    <span className="mr-2">💬</span> Medium
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1 flex items-center">
                    <span className="mr-2">💬</span> Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">
              <span>Powered by GitBook</span>
            </div>
          </div>
        </div>
        
        {/* Phần nội dung chính với khả năng cuộn */}
        <div className="flex-1 w-full max-h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
          {renderContent()}
        </div>
        
        <div className="hidden md:block">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}