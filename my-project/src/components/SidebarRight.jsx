
const SidebarRight = () => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">What is LayerEdge?</h2>
      <p>How much efficient we can make L1 settlement & proof verification with LayerEdge?</p>
      <h2 className="text-xl font-bold mt-6 mb-4">Why LayerEdge?</h2>
      <p>Why are we building this solution?</p>
      <h2 className="text-xl font-bold mt-6 mb-4">Background</h2>
      <div className="mt-6">
        <p>Was this helpful?</p>
        <div className="flex space-x-2 mt-2">
          <button className="text-red-500">😞</button>
          <button className="text-green-500">😊</button>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;