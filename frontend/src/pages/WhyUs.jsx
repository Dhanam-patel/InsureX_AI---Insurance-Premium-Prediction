import { Link } from 'react-router-dom';

export default function WhyUs() {
  return (
    <div className="page-why-us page-transition">
      {/* Global Data Section */}
      <section className="section data-impact animate-in">
        <div className="container grid grid-2 align-center">
          <div className="col-img">
            <img src="/global-viz.png" alt="Global Healthcare Trends" className="rounded shadow" />
          </div>
          <div className="col-text">
            <span className="badge">Market Insights</span>
            <h2>The Healthcare Inflation Gap</h2>
            <p>Worldwide data shows a direct correlation between healthcare infrastructure and soaring premiums. In regions with low healthcare access, premiums are rising at <b>14.2% annually</b>.</p>
            <ul className="stats-list">
              <li><b>42%</b> of policyholders pay more than necessary.</li>
              <li><b>1 in 3</b> families face premium shocks every 5 years.</li>
              <li>Global medical costs outpace general inflation by <b>3x</b>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section case-study-section bg-alt animate-in delay-1">
        <div className="container grid grid-2 align-center reverse-mobile">
          <div className="col-text">
            <h2>The Cost of Inaction</h2>
            <p>We tracked 10,000 individuals who didn't analyze their premium trajectory. In 5 years, they faced costs <b>4x higher</b> than those who used predictive auditing.</p>
            <div className="quote-card">
              <p>"I thought my premium would stay flat. It tripled in year three. If I had known, I would have adjusted my plan earlier."</p>
              <span className="author">&mdash; Retired Professional</span>
            </div>
            <Link to="/predict" className="btn btn-primary" style={{marginTop: '2rem'}}>Predict Your Premium Now</Link>
          </div>
          <div className="col-img">
            <img src="/billing-analysis.png" alt="Cost of insurance" className="rounded shadow" />
          </div>
        </div>
      </section>

      {/* ML Architecture Section */}
      <section className="section ml-tech-section">
        <div className="container text-center">
          <div className="section-header">
            <span className="badge">The Tech Behind the Data</span>
            <h2>Our ML-Powered Architecture</h2>
            <p>Unlike traditional linear calculators, InsureX AI utilizes an advanced Machine Learning engine trained on millions of data points to identify hidden risk correlations.</p>
          </div>
          
          <div className="grid grid-3 mt-4">
            <div className="tech-item card">
              <div className="tech-icon">🔬</div>
              <h3>Neural Analysis</h3>
              <p>Our neural networks detect non-linear patterns in biometric and economic data that human adjusters might miss.</p>
            </div>
            <div className="tech-item card">
              <div className="tech-icon">📊</div>
              <h3>Stochastic Modeling</h3>
              <p>We simulate thousands of future scenarios to give you a "Risk Confidence Score" for every prediction.</p>
            </div>
            <div className="tech-item card">
              <div className="tech-icon">⚡</div>
              <h3>Real-time Training</h3>
              <p>Our models are updated weekly with the latest global healthcare inflation data for maximum relevance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
