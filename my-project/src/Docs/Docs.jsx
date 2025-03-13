import Sidebar from '../components/Sidebar';
import Content from '../components/Maincontent';
import SidebarRight from '../components/SidebarRight';

export function Docs() {
  return (
    <div>
      <div className='flex border-b bg-gray-100 '>
      <h1 className="text-5xl font-semibold mb-8" style={{ color: '#000000', fontSize: '30px' }}>
  LayerEdge
</h1>
<div className="flex max-w-md mx-auto mr-10 mt-2 items-center">
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {/* Icon Search SVG */}
      <svg 
        className="w-5 h-5 text-gray-500" 
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
    <div className="flex h-screen">
      <Sidebar />
      <Content />
      <SidebarRight />
    </div>
    </div>
  );
}
