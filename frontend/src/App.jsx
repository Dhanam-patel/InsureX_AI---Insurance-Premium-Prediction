import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Predict from './pages/Predict';

// Styles
import './styles/global.css';
import './styles/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </Layout>
  );
}
