

const Content = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-4">Introduction To LayerEdge</h1>
      <h2 className="text-2xl font-bold mt-6 mb-4">What is LayerEdge?</h2>
      <p className="mb-4">
        LayerEdge is the first decentralized network that enhances the capabilities of Bitcoin Blockspace with ZK & BitVM, enabling every layer to be secured on Bitcoin.
      </p>
      <p className="mb-4">
        <span className="text-blue-500 underline cursor-pointer">Read here</span> how LayerEdge works with or without OP_Cat.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">How much efficient we can make L1 settlement & proof verification with LayerEdge?</h2>
      <p className="mb-4">
        LayerEdge achieves up to 95% reduction in L1 settlement costs through shared transactions, and up to 99% reduction in proof verification costs through aggregation. As more protocols join the network, costs decrease further - enabling what was previously economically unfeasible. A single proof verification cost can drop from an estimated of $900+ to less than $20 per protocol on Bitcoin, in a network of 50+ protocols.
      </p>
    </div>
  );
};

export default Content;