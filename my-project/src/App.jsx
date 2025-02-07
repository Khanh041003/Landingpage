import './App.css';

function App() {
  return (
    <div className="App">
      {/* Menu điều hướng */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="logo.png" alt="LayerEdge Logo" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#ecosystem">Ecosystem</a></li>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>

      {/* Phần chính của trang */}
      <header className="hero-section" id="home">
        <h1>Powering Trust-Minimized Settlement on Bitcoin</h1>
        <p>
          LayerEdge opens door for anyone to tap into Bitcoins security, while taking only up to 1% of the Bitcoin blockspace they would have taken otherwise.
        </p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* Phần tính năng */}
      <section className="features-section" id="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Scalability</h3>
            <p>Enabling high throughput with minimal on-chain footprint.</p>
          </div>
          <div className="feature-item">
            <h3>Security</h3>
            <p>Leverages Bitcoin’s security model for trust-minimized execution.</p>
          </div>
          <div className="feature-item">
            <h3>Efficiency</h3>
            <p>Optimized resource allocation for seamless integration.</p>
          </div>
        </div>
      </section>

      {/* Phần hệ sinh thái */}
      <section className="ecosystem-section" id="ecosystem">
        <h2>Our Ecosystem</h2>
        <p>Bringing together developers, enterprises, and Bitcoin enthusiasts.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 LayerEdge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
