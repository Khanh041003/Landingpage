export default function SettlementModuleContent() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Settlement Module (Live)</h1>
        <h1 className="text-2xl font-bold mb-4">Overview</h1>
        <p className="text-gray-700 mb-4">
        The LayerEdge Settlement Module provides a trust-minimized mechanism for protocols to settle their computations and states on the Bitcoin blockchain. This system leverages Bitcoin’s unparalleled Proof-of-Work (PoW) security, enabling scalable, cost-effective, and verifiable settlement for protocols, rollups, and decentralized applications.
        </p>
        <p className="text-gray-700 mb-4">This documentation outlines how LayerEdge performs trust-minimized settlement on Bitcoin using zk-proof aggregation, OP_RETURN, and Cenotaph Rune.        </p>
        <h1 className="text-2xl font-bold mb-4">How the Settlement Module Works</h1>
        <img src="/img/database1.png" alt="LayerEdge Logo" className="w-full" />
        <h1 className="text-2x2 font-bold mb-4">1. Aggregation of zk-Proofs</h1>
        <p className="text-gray-700 mb-4">
        Protocols (e.g., Rollups, AI Computation, DePIN, and DA solutions) submit Zero-Knowledge Proofs (ZKPs) to the LayerEdge. These proofs represent validated computations or state transitions from their respective layers.
        </p>
        <p className="text-gray-700 mb-4">
        LayerEdge aggregates multiple ZKPs into a single, compact proof using proof recursion. This aggregation significantly reduces the size of the proof and minimizes on-chain storage requirements, reducing settlement costs by up to 99%.
        </p>
        <h1 className="text-2x2 font-bold mb-4">2. Cenotaph Rune: Proof Packaging</h1>
        <p className="text-gray-700 mb-4">
        Protocols (e.g., Rollups, AI Computation, DePIN, and DA solutions) submit Zero-Knowledge Proofs (ZKPs) to the LayerEdge. These proofs represent validated computations or state transitions from their respective layers.
        </p>
        <p className="text-gray-700 mb-4">
        LayerEdge aggregates multiple ZKPs into a single, compact proof using proof recursion. This aggregation significantly reduces the size of the proof and minimizes on-chain storage requirements, reducing settlement costs by up to 99%.
        </p>
        <h1 className="text-2x2 font-bold mb-4">3. Posting to Bitcoin Blockchain</h1>
        <p className="text-gray-700 mb-4">
        Protocols (e.g., Rollups, AI Computation, DePIN, and DA solutions) submit Zero-Knowledge Proofs (ZKPs) to the LayerEdge. These proofs represent validated computations or state transitions from their respective layers.
        </p>
        <p className="text-gray-700 mb-4">
        LayerEdge aggregates multiple ZKPs into a single, compact proof using proof recursion. This aggregation significantly reduces the size of the proof and minimizes on-chain storage requirements, reducing settlement costs by up to 99%.
        </p>
        <h1 className="text-2x2 font-bold mb-4">4. Verifiability and Decentralized Settlement</h1>
                <p className="text-gray-700 mb-4">
                Protocols (e.g., Rollups, AI Computation, DePIN, and DA solutions) submit Zero-Knowledge Proofs (ZKPs) to the LayerEdge. These proofs represent validated computations or state transitions from their respective layers.
                </p>
                <p className="text-gray-700 mb-4">
                LayerEdge aggregates multiple ZKPs into a single, compact proof using proof recursion. This aggregation significantly reduces the size of the proof and minimizes on-chain storage requirements, reducing settlement costs by up to 99%.
        </p>
      </div>
    );
  }