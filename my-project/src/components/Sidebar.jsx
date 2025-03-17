import { useState } from 'react';

const Menu = () => {
  // State để quản lý trạng thái mở rộng/thu gọn
  const [isIntroExpanded, setIsIntroExpanded] = useState(true); // Mặc định mở rộng cho Introduction To LayerEdge
  const [isProofExpanded, setIsProofExpanded] = useState(true); // Mặc định mở rộng cho Proof Aggregation Layer
  const [isFrequently, setIsFrequently] = useState(true); // Mặc định mở rộng cho Proof Aggregation Layer
  const [isConsensus, setIsConsensus] = useState(true); // Mặc định mở rộng cho Proof Aggregation Layer
  // State để quản lý trạng thái hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-80 p-4 bg-white shadow-md max-h-screen ${
        isHovered ? 'overflow-y-auto' : 'overflow-y-hidden'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* INTRODUCTION Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">INTRODUCTION</h2>
        <ul className="space-y-1">
          {/* Introduction To LayerEdge with nested items */}
          <li>
            <div
              className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
              onClick={() => setIsIntroExpanded(!isIntroExpanded)}
            >
              <span className="mr-2">
                {isIntroExpanded ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
              Introduction To LayerEdge
            </div>
            {isIntroExpanded && (
              <ul className="ml-3 pl-2 border-l border-gray-200 space-y-1">
                {/* Proof Aggregation Layer with nested items */}
                <li>
                  <div
                    className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
                    onClick={() => setIsProofExpanded(!isProofExpanded)}
                  >
                    <span className="mr-2">
                      {isProofExpanded ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </span>
                    Proof Aggregation Layer
                  </div>
                  {isProofExpanded && (
                    <ul className="ml-6 pl-2 border-l border-gray-200 space-y-1">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                          Aggregation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                          Built on Babylon
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
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
            <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
              Try LayerEdge (Devnet)
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
              Use Cases
            </a>
          </li>
          <div
              className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
              onClick={() => setIsFrequently(!isFrequently)}
            >
              <span className="mr-2">
                {isFrequently ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
              Frequently Asked Questions (FAQs)
            </div>
            {isFrequently && (
              <ul className="ml-3 pl-2 border-l border-gray-200 space-y-1">

                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
                    True Rollups on Bitcon
                  </a>
                </li>
              </ul>
            )}
          {/* Thêm nội dung giả để kiểm tra thanh cuộn */}
        </ul>
      </div>

      {/* NETWORK Section */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">NETWORK</h2>
        <ul className="space-y-1">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 block py-1">
              Network Info
            </a>
          </li>
          <div
              className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900 py-1"
              onClick={() => setIsConsensus(!isConsensus)}
            >
              <span className="mr-2">
                {isConsensus ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
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

      {/* COMMUNITY Section */}
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

      {/* Powered by GitBook */}
      <div className="mt-4 text-center text-gray-500 text-sm">
        <span>Powered by GitBook</span>
      </div>
    </div>
  );
};

export default Menu;