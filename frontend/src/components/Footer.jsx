import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand">
          <Link to="/" className="logo light">InsureX AI</Link>
          <p>Independent predictive analytics for personal financial planning. Predicting the future of insurance, one profile at a time.</p>
        </div>
        
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/predict">Premium Predictor</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Legal & Support</h4>
          <ul>
            <li><Link to="/">Help Center</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; 2026 InsureX AI Systems. All rights reserved. Not an insurance provider.</p>
      </div>
    </footer>
  );
}
