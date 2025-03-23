export default function AggregationContent() {
    return (
      <div className="p-6 h-screen">
        <h1 className="text-2xl font-bold mb-4">Aggregation</h1>
        <p className="text-gray-700 mb-4">
        Building on Babylon’s security and OP_CAT’s optimization, the aggregation layer forms the final piece of the puzzle by ensuring that zk-proof verification on Bitcoin is both scalable and cost-efficient. It’s through aggregation that LayerEdge enables complex off-chain computations to be verified on Bitcoin without incurring prohibitive costs, making the LayerEdge verification layer both modular and adaptable.
        </p>
        <h1 className="text-2xl font-bold mb-4">How Aggregation Works</h1>
        <p className="text-gray-700 mb-4">
        At the core of LayerEdge’s verification model is the General Verifier, which aggregates multiple zk proofs into one final proof. Each individual proof from various protocols is bundled and compressed into a single output, reducing both the computational load and on-chain data requirements. This aggregation process allows LayerEdge to process and verify a wide array of zk proofs, making the system highly scalable.        </p>
        <img src="/img/database.jpg" alt="LayerEdge Logo" className="w-full" />
        <p className="text-gray-700 mb-4">
        The image illustrates how multiple prover-verifier interactions culminate in a final aggregated proof, which is then settled on Bitcoin. Through this process, LayerEdge minimizes redundant computations and drastically reduces the need for repeated on-chain verification. In this way, zk proofs from many protocols can be efficiently handled, all while ensuring each step remains secure and verifiable.       </p>
        <h1 className="text-2xl font-bold mb-4">How Aggregation Works</h1>
        <p className="text-gray-700 mb-4">
        LayerEdge’s aggregation technology is more than just a technical improvement—it directly translates into significant cost reductions. By amortizing the cost of verifying zk proofs, LayerEdge reduces the overall cost of verification by up to 95%. Verification that would traditionally cost tens of thousands of dollars on Bitcoin can now be completed at a fraction of the expense, cutting the cost down to 3-5% of what would typically be required for individual verification processes.</p>
      </div>
      
    );
  }