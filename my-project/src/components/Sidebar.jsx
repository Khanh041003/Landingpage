import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">INTRODUCTION</h2>
      <ul className="space-y-2">
        <li>
          <div className="flex items-center">
            <a href="#introduction" className="text-gray-500 hover:text-black hover:underline">
              Introduction To LayerEdge
            </a>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-gray-500 hover:text-black focus:outline-none"
            >
              {isExpanded ? 'v' : '›'}
            </button>
          </div>
          {isExpanded && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <a href="#proof-aggregation" className="text-gray-500 hover:text-black hover:underline">
                  Proof Aggregation Layer
                </a>
              </li>
              <li>
                <a href="#settlement-module" className="text-gray-500 hover:text-black hover:underline">
                  Settlement Module (Live)
                </a>
              </li>
              <li>
                <a href="#verification-module" className="text-gray-500 hover:text-black hover:underline">
                  Verification Module
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#try-layeredge" className="text-gray-500 hover:text-black hover:underline">
            Try LayerEdge (Devnet)
          </a>
        </li>
        <li>
          <a href="#use-cases" className="text-gray-500 hover:text-black hover:underline">
            Use Cases
          </a>
        </li>
        <li>
          <a href="#faqs" className="text-gray-500 hover:text-black hover:underline">
            Frequently Asked Questions (FAQs)
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">NETWORK</h2>
      <ul className="space-y-2">
        <li>
          <a href="#network-info" className="text-gray-500 hover:text-black hover:underline">
            Network Info
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">CONSENSUS</h2>
      <ul className="space-y-2">
        <li>
          <a href="#consensus" className="text-gray-500 hover:text-black hover:underline">
            Consensus
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">COMMUNITY</h2>
      <ul className="space-y-2">
        <li><a href="#twitter" className="text-gray-500 hover:text-black hover:underline">Twitter</a></li>
        <li><a href="#discord" className="text-gray-500 hover:text-black hover:underline">Discord</a></li>
        <li><a href="#medium" className="text-gray-500 hover:text-black hover:underline">Medium</a></li>
        <li><a href="#telegram" className="text-gray-500 hover:text-black hover:underline">Telegram</a></li>
      </ul>
      <div className="mt-6 text-sm text-gray-500">
        Powered by GitBook
      </div>
    </div>
  );
};

export default Sidebar;