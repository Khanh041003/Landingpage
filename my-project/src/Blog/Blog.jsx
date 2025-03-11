
function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-700">LayerEdge Blog</div>
          <nav className="space-x-8 text-gray-700">
            <a href="/" className="hover:text-blue-700 transition-colors">Home</a>
            <a href="/blog" className="text-blue-700 font-semibold">Blog</a>
            <a href="#" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Blog List */}
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Posts</h1>
        <div className="space-y-8">
          {/* Blog Post 1 */}
          <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Scaling Bitcoin with LayerEdge</h2>
            <p className="text-gray-500 text-sm mb-2">March 05, 2025</p>
            <p className="text-gray-600 mb-4">
              Discover how LayerEdge enhances Bitcoin’s scalability with ZK proofs and BitVM...
            </p>
            <a href="/blog/scaling-bitcoin" className="text-blue-700 hover:underline font-medium">Read More →</a>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">The Power of Proof Aggregation</h2>
            <p className="text-gray-500 text-sm mb-2">February 28, 2025</p>
            <p className="text-gray-600 mb-4">
              Learn how proof aggregation reduces costs and boosts efficiency on Bitcoin...
            </p>
            <a href="/blog/proof-aggregation" className="text-blue-700 hover:underline font-medium">Read More →</a>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 LayerEdge. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;