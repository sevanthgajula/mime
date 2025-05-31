import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StartupDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated data
  const startup = {
    id,
    name: 'FinEdge',
    logo: 'https://via.placeholder.com/60',
    sector: 'Fintech',
    foundedYear: 2021,
    description: 'FinEdge is a digital wealth management platform offering AI-driven portfolio suggestions for Indian retail investors.',
    fundingGoal: 5000000,
    fundingRaised: 2400000,
    revenue: 12500000,
    valuation: 50000000,
    burnRate: 450000,
    cac: 1200,
    founders: [
      { name: 'Ravi Sharma', title: 'CEO', linkedin: 'https://linkedin.com/in/ravi' },
      { name: 'Priya Iyer', title: 'CTO', linkedin: 'https://linkedin.com/in/priya' },
    ],
    pitchDeck: 'https://example.com/pitch-deck.pdf'
  };

  const yearsOld = new Date().getFullYear() - startup.foundedYear;
  const fundingPercent = (startup.fundingRaised / startup.fundingGoal) * 100;

  return (
    <div style={{ padding: '30px 50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <img src={startup.logo} alt="logo" width={60} height={60} />
        <div>
          <h1>{startup.name}</h1>
          <p><strong>Sector:</strong> {startup.sector} | <strong>Founded:</strong> {startup.foundedYear} ({yearsOld} yrs)</p>
        </div>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <p>{startup.description}</p>

      <h3 style={{ marginTop: 30 }}>📊 Key Metrics</h3>
      <ul>
        <li><strong>Revenue:</strong> ₹{startup.revenue.toLocaleString()}</li>
        <li><strong>Valuation:</strong> ₹{startup.valuation.toLocaleString()}</li>
        <li><strong>Customer Acquisition Cost (CAC):</strong> ₹{startup.cac}</li>
        <li><strong>Monthly Burn Rate:</strong> ₹{startup.burnRate.toLocaleString()}</li>
      </ul>

      <h3 style={{ marginTop: 30 }}>💰 Funding</h3>
      <p><strong>Goal:</strong> ₹{startup.fundingGoal.toLocaleString()} | <strong>Raised:</strong> ₹{startup.fundingRaised.toLocaleString()}</p>
      <div style={{ background: '#eee', height: 20, borderRadius: 10, overflow: 'hidden', width: '100%', marginTop: 5 }}>
        <div style={{
          width: `${fundingPercent}%`,
          background: '#4caf50',
          height: '100%',
        }}></div>
      </div>

      <button
        style={{
          marginTop: 20,
          padding: '10px 25px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Invest Now
      </button>

      <h3 style={{ marginTop: 30 }}>👨‍💼 Founders</h3>
      {startup.founders.map(f => (
        <p key={f.name}><strong>{f.name}</strong> – {f.title} (<a href={f.linkedin} target="_blank">LinkedIn</a>)</p>
      ))}

      <h3 style={{ marginTop: 30 }}>📄 Pitch Deck</h3>
      <a href={startup.pitchDeck} target="_blank" rel="noreferrer">View Pitch Deck (PDF)</a>

      <button
        style={{
          marginTop: 40,
          backgroundColor: '#888',
          color: '#fff',
          padding: '8px 20px',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => navigate(-1)}
      >
        ← Back to Startups
      </button>
    </div>
  );
};

export default StartupDetailPage;
