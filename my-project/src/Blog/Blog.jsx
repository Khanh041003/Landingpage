const Blog = () => {
  // Dữ liệu cho các bài viết nhỏ
  const articles = [
    {
      title: 'LayerEdge Incentivized Testnet: Phase II Goes Live',
      description:
        "The response to LayerEdge's Incentivized Testnet has been nothing short of phenomenal. What started as a targeted campaign has grown into...",
      image: '/img/golive.png',
    },
    {
      title: 'Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero zkVM and...',
      description:
        'Bitcoin has remained the most secure and decentralized blockchain, but its programmability and scalability limitations have led to a new…',
      image: '/img/boundless.png',
    },
    {
      title: 'LayerEdge Monthly Recap — January 2025',
      description:
        'January was a focal month for LayerEdge as we successfully launched our testnet, ran a large-scale light node campaign, and witnessed…',
      image: '/img/recap.png',
    },
    {
      title: 'LayerEdge Incentivized Testnet: Phase II Goes Live',
      description:
        "The response to LayerEdge's Incentivized Testnet has been nothing short of phenomenal. What started as a targeted campaign has grown into...",
      image: '/img/golive.png',
    },
    {
      title: 'Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero zkVM and...',
      description:
        'Bitcoin has remained the most secure and decentralized blockchain, but its programmability and scalability limitations have led to a new…',
      image: '/img/boundless.png',
    },
    {
      title: 'LayerEdge Monthly Recap — January 2025',
      description:
        'January was a focal month for LayerEdge as we successfully launched our testnet, ran a large-scale light node campaign, and witnessed…',
      image: '/img/recap.png',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Container chính với width 90% trên mobile và 70% trên desktop */}
      <div className="w-[90%] md:w-[70%] mx-auto">
        {/* Header */}
        <header className="p-4 border-b">
          {/* Row 1: Medium, Open in app (mobile) / Sign in (desktop), Get started */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold">Medium</h1>
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Show "Open in app" on mobile, hide on desktop */}
              <button className="text-sm md:text-base text-gray-600 block md:hidden">
                Open in app
              </button>
              {/* Show "Sign in" on desktop, hide on mobile */}
              <button className="text-sm md:text-base text-gray-600 hidden md:block">
                Sign in
              </button>
              <button className="bg-gray-200 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                Get started
              </button>
            </div>
          </div>

          {/* Row 2: LayerEdge, Search, X, Follow */}
          <div className="flex justify-between items-center mt-6">
            <img src="/img/layer.png" alt="LayerEdge Logo" className="w-[150px] md:w-[200px]" />
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="text-gray-600">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
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
              <button className="text-sm md:text-base text-gray-600">X</button>
              <button className="border border-gray-900 px-3 py-1 md:px-4 md:py-1 rounded-full text-sm md:text-base">
                Follow
              </button>
            </div>
          </div>
        </header>

        {/* Featured Article */}
        <div className="flex flex-col md:flex-row p-4">

          <img src="/img/february.png" alt="LayerEdge Logo" className="w-full md:w-2/3 relative" />
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
            <div key={index} className=" p-4">
              <img 
                src={article.image} 
                className="h-40 bg-gray-200 flex items-center justify-center" 
              />
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
              <div className="mt-4 flex items-center">
              <span className="mr-2">LayerEdge</span>
              <span className="text-gray-500">Mar 7 • 3 min read</span>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;