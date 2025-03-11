

const MainContent = () => {
  return (
    <div className="flex-1 p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Introduction To LayerEdge</h1>
      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is LayerEdge?</h2>
        <p className="text-gray-700">
          LayerEdge is the first decentralized network that enhances the capabilities of Bitcoin Blockchain with ZK & BitVM, enabling every layer to be secured on Bitcoin.
        </p>
        <div className="mt-4">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
            Often efficient settlement on Bitcoin is linked with dependency on OP_Cat being enabled on Bitcoin L1.
          </span>
          <p className="text-blue-600 mt-2">
            <a href="#">Read here how LayerEdge works with or without OP_Cat</a>
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          How much efficient we can make L1 settlement & proof verification with LayerEdge?
        </h2>
        <p className="text-gray-700">
          LayerEdge achieves up to 95% reduction in L1 settlement costs through shared transactions, and up to 99% reduction in proof verification costs through aggregation. As more protocols join the network, costs decrease further — enabling what was previously economically unfeasible. A single verification can drop an average cost from $900+ to less than $20 per protocol on Bitcoin, in a network of 50+ protocols.
        </p>
      </div>
    </div>
  );
};

export default MainContent;