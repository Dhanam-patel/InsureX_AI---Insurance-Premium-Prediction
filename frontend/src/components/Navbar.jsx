import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">InsureX AI</Link>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/why-us" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Why Us</NavLink>
          <Link to="/predict" className="btn btn-primary btn-sm">Predict Now</Link>
        </div>
      </div>
    </nav>
  );
}
