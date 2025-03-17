
const Blog = () => {
  // Dữ liệu cho các bài viết nhỏ
  const articles = [
    {
      title: 'LayerEdge Incentivized Testnet: Phase II Goes Live',
      description:
        "The response to LayerEdge's Incentivized Testnet has been nothing short of phenomenal. What started as a targeted campaign has grown into...",
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero zkVM and...',
      description:
        'Bitcoin has remained the most secure and decentralized blockchain, but its programmability and scalability...',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'LayerEdge Monthly Recap — January 2025',
      description:
        'January was a focal month for LayerEdge as we successfully launched our testnet, ran a large-scale light node campaign, and witnessed...',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Container chính với width 80% và căn giữa */}
      <div className="w-[70%] mx-auto">
        {/* Header */}
        <header className="p-4 border-b">
          {/* Hàng 1: Medium, Sign in, Get started */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Medium</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600">Sign in</button>
              <button className="bg-gray-200 px-4 py-2 rounded-full">Get started</button>
            </div>
          </div>

          {/* Hàng 2: LayerEdge, Search, X, Follow */}
          <div className="flex justify-between items-center mt-6">
          <img src="/img/layer.png" alt="LayerEdge Logo" className="w-50" />
            <div className="flex items-center space-x-4">
              <button className="text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
              <button className="text-gray-600">X</button>
              <button className="border border-gray-300 px-4 py-1 rounded-full">Follow</button>
            </div>
          </div>
        </header>

        {/* Featured Article */}
        <div className="flex flex-col md:flex-row p-4 border-b">
          <div className="w-full md:w-2/3 relative">
            <div className="h-64 md:h-96 bg-gradient-to-br from-purple-900 to-orange-500 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-xl md:text-2xl">MONTHLY RECAP</h2>
                <h1 className="text-3xl md:text-5xl font-bold">February 2025</h1>
                <p className="mt-2">LayerEdge</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-bold">
              February Recap: Building, Shipping, and Scaling LayerEdge
            </h2>
            <p className="mt-2 text-gray-600">
              In February, we focused on one thing—building and shipping. The first phase of our incentivized testnet was an overwhelming success, and...
            </p>
            <div className="mt-4 flex items-center">
              <span className="mr-2">LayerEdge</span>
              <span className="text-gray-500">Mar 7 • 3 min read</span>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {articles.map((article, index) => (
            <div key={index} className="border p-4">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span>LayerEdge</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;