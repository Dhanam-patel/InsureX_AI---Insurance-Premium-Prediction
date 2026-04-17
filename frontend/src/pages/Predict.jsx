import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://api-mini-projects.onrender.com';

export default function Predict() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  
  const [form, setForm] = useState({
    age: 30,
    weight: 70,
    height: 1.75,
    income_lpa: 10,
    smoker: false,
    city: 'Mumbai',
    occupation: 'private_job'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const resp = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (!resp.ok) throw new Error('Prediction engine unreachable');
      
      const data = await resp.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-predict page-transition container">
      <div className="section-header text-center">
        <span className="badge">Premium Predictor</span>
        <h2>Estimate your monthly cost</h2>
        <p>Fill in your details below. Our ML model provides a prediction in real-time.</p>
      </div>

      <div className="simple-predict-card">
        <div className="predict-form-side">
          <form onSubmit={handleSubmit} className="form-stack">
            <div className="form-grid-simple">
              <div className="form-item">
                <label>Age</label>
                <input type="number" name="age" value={form.age} onChange={handleChange} />
              </div>
              <div className="form-item">
                <label>Weight (kg)</label>
                <input type="number" name="weight" value={form.weight} onChange={handleChange} />
              </div>
              <div className="form-item">
                <label>Height (m)</label>
                <input type="number" name="height" value={form.height} step="0.01" onChange={handleChange} />
              </div>
              <div className="form-item">
                <label>Annual Income (LPA)</label>
                <input type="number" name="income_lpa" value={form.income_lpa} onChange={handleChange} />
              </div>
              <div className="form-item">
                <label>City</label>
                <select name="city" value={form.city} onChange={handleChange}>
                  {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Noida'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-item">
                <label>Occupation</label>
                <select name="occupation" value={form.occupation} onChange={handleChange}>
                  {['private_job', 'government_job', 'business_owner', 'freelancer'].map(o => <option key={o} value={o}>{o.replace('_', ' ').toUpperCase()}</option>)}
                </select>
              </div>
            </div>
            
            <label className="checkbox-field">
              <input type="checkbox" name="smoker" checked={form.smoker} onChange={handleChange} />
              <span>I consume tobacco/nicotine products</span>
            </label>
            
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? 'Calculating...' : 'Generate Prediction'}
            </button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </div>

        <div className="predict-result-side">
          {result ? (
            <div className="result-content-box animate-in">
              <p className="result-label">Predicted Premium</p>
              <div className="amount-display">
                <span className="currency">₹</span>
                <span className="val">{Math.round(result.prediction).toLocaleString('en-IN')}</span>
                <p className="unit">per year</p>
              </div>
              <div className={`risk-pill risk-${result.risk_level}`}>
                {result.risk_level.toUpperCase()} RISK PROFILE
              </div>
            </div>
          ) : (
            <div className="result-placeholder">
              <div className="placeholder-icon">📈</div>
              <p>Enter your details and click generate to see your results here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
