import Sidebar from '../components/Sidebar';
import Content from '../components/Maincontent';
import SidebarRight from '../components/SidebarRight';

export function Docs() {
  return (
    <div>
      <div className='border-b border-gray-300'>
  <div className='flex bg-white m-3 justify-center items-center'>
    <img src="/img/e.jpg" alt="LayerEdge Logo" className="w-9 h-9 ml-5" />
    <h2 className="text-xl font-bold flex items-center pl-2">LayerEdge</h2>
    <div className="flex max-w-md mx-auto mr-6 items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* Icon Search SVG */}
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
        
        {/* Input field */}
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
</div>
    <div className="flex h-screen">
      <Sidebar />
      <Content />
      <SidebarRight />
    </div>
    </div>
  );
}
