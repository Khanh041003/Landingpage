const Sidebar = () => {
  return (
    
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">INTRODUCTION</h2>
      <ul className="space-y-2">
        <li>
          <a href="#introduction" className="text-blue-500 hover:underline">Introduction To LayerEdge</a>
          <ul className="ml-4 mt-2 space-y-2">
            <li><a href="#proof-aggregation" className="text-black-500 hover:underline">Proof Aggregation Layer</a></li>
            <li><a href="#settlement-module" className="text-black-500 hover:underline">Settlement Module (Live)</a></li>
            <li><a href="#verification-module" className="text-black-500 hover:underline">Verification Module</a></li>
          </ul>
        </li>
        <li><a href="#try-layeredge" className="text-blue-500 hover:underline">Try LayerEdge (Devnet)</a></li>
        <li><a href="#use-cases" className="text-blue-500 hover:underline">Use Cases</a></li>
        <li><a href="#faqs" className="text-blue-500 hover:underline">Frequently Asked Questions (FAQs)</a></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">NETWORK</h2>
      <ul className="space-y-2">
        <li><a href="#network-info" className="text-blue-500 hover:underline">Network Info</a></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">CONSENSUS</h2>
      <ul className="space-y-2">
        <li><a href="#consensus" className="text-blue-500 hover:underline">Consensus</a></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">COMMUNITY</h2>
      <ul className="space-y-2">
        <li><a href="#twitter" className="text-blue-500 hover:underline">Twitter</a></li>
        <li><a href="#discord" className="text-blue-500 hover:underline">Discord</a></li>
        <li><a href="#medium" className="text-blue-500 hover:underline">Medium</a></li>
        <li><a href="#telegram" className="text-blue-500 hover:underline">Telegram</a></li>
      </ul>
      <div className="mt-6 text-sm text-gray-500">
        Powered by GitBook
      </div>
    </div>
  );
};

export default Sidebar;