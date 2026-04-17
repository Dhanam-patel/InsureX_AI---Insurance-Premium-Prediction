import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-home page-transition">
      {/* Hero Section */}
      <section className="section hero animate-in">
        <div className="container hero-container">
          <div className="hero-left">
            <span className="badge">Data Analytics SaaS</span>
            <h1>Stop guessing your <br /> insurance premiums.</h1>
            <p>Predict your financial trajectory with precision. Our AI models forecast premium changes with 78.4% accuracy based on global healthcare trends.</p>
            <div className="hero-actions">
              <Link to="/predict" className="btn btn-primary">Start Predictor</Link>
              <Link to="/why-us" className="btn btn-secondary">Learn Why &rarr;</Link>
            </div>
            <div className="hero-trust">
              <p>Join 100,000+ individuals analyzing their risks</p>
            </div>
          </div>
          <div className="hero-right">
            <div className="img-wrapper">
              <img src="/hero-img.png" alt="Forecasting Dashboard" />
              <div className="floating-card stat">
                <span className="val">78.4%</span>
                <span className="lbl">Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section animate-in delay-1">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>100,000+</h3>
            <p>Profiles Analyzed</p>
          </div>
          <div className="stat-item">
            <h3>78.4%</h3>
            <p>Model Precision</p>
          </div>
          <div className="stat-item">
            <h3>40%</h3>
            <p>Avg. Future Savings</p>
          </div>
          <div className="stat-item">
            <h3>14%</h3>
            <p>Healthcare Inflation Trend</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section animate-in delay-2">
        <div className="container">
          <div className="section-header section-center">
            <span className="badge">The Data Advantage</span>
            <h2>Why individuals use our data</h2>
            <p>Independent predictive analytics for your personal financial planning. No bias, no commissions, just pure foresight.</p>
          </div>

          <div className="grid grid-3 feature-grid">
            <div className="feature-card-premium">
              <div className="card-top">
                <div className="card-icon-wrapper">🎯</div>
                <div className="card-tag">Precision</div>
              </div>
              <div className="card-body">
                <h3>Hyper-Personalized</h3>
                <p>We analyze 50+ unique data points including localized healthcare trends and occupation-specific risk tiers.</p>
                <ul className="card-checklist">
                  <li>Biometric Auditing</li>
                  <li>Tiered Location Risks</li>
                </ul>
              </div>
            </div>

            <div className="feature-card-premium">
              <div className="card-top">
                <div className="card-icon-wrapper">🛡️</div>
                <div className="card-tag">Neutral</div>
              </div>
              <div className="card-body">
                <h3>100% Independent</h3>
                <p>Our only metric is accuracy. We don't sell plans, we provide the intelligence you need to choose them.</p>
                <ul className="card-checklist">
                  <li>Conflict-free data</li>
                  <li>Direct ML insights</li>
                </ul>
              </div>
            </div>

            <div className="feature-card-premium">
              <div className="card-top">
                <div className="card-icon-wrapper">⏳</div>
                <div className="card-tag">Future-Proof</div>
              </div>
              <div className="card-body">
                <h3>Lifecycle Forecast</h3>
                <p>Simulate how your future self will be priced in the market based on aging and inflation projections.</p>
                <ul className="card-checklist">
                  <li>5-10 Year Roadmap</li>
                  <li>Inflation Adjustments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-banner-premium">
        <div className="container">
          <div className="cta-glass-card">
            <div className="cta-left">
              <h2>Ready to audit <br /> your future?</h2>
              <p>Join the 500k+ users who stopped guessing and started planning. <br />Get your analysis in 30 seconds.</p>
              <Link to="/predict" className="btn btn-primary btn-lg btn-glow">Run Free Analysis Now &rarr;</Link>
            </div>
            <div className="cta-right">
              <div className="mock-visualization">
                <div className="viz-bar" style={{ height: '40%' }}></div>
                <div className="viz-bar" style={{ height: '60%' }}></div>
                <div className="viz-bar" style={{ height: '90%' }}></div>
                <div className="viz-bar" style={{ height: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
