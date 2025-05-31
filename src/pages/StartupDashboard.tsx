import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartupDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const fundingRequests = [
    {
      goal: 1000000,
      modes: ['Equity'],
      date: '2024-12-01',
    },
    {
      goal: 2000000,
      modes: ['Loan', 'Partnership'],
      date: '2025-01-15',
    }
  ];

  return (
    <div style={{ padding: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>🏢 FinEdge Dashboard</h1>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 5,
              padding: '10px 15px',
              cursor: 'pointer'
            }}
          >
            👤 Profile
          </button>
          {showMenu && (
  <div style={{
    position: 'absolute',
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: 5,
    zIndex: 999,
    width: 170
  }}>
    <div
      onClick={() => navigate('/startup/fundings')}
      style={{ padding: '10px 15px', cursor: 'pointer' }}
    >
      📑 View Fundings
    </div>
    <div
      onClick={() => navigate('/startup/funding-request')}
      style={{ padding: '10px 15px', cursor: 'pointer' }}
    >
      💰 Raise Funding
    </div>
    <div
      onClick={() => navigate('/startup/messages')}
      style={{ padding: '10px 15px', cursor: 'pointer' }}
    >
      📩 Messages
    </div>
  </div>
)}

        </div>
      </div>

      <p><strong>Sector:</strong> Fintech</p>
      <p><strong>Founded:</strong> 2021</p>

      <h3 style={{ marginTop: 30 }}>📊 Key Metrics</h3>
      <ul>
        <li><strong>Monthly Revenue:</strong> ₹12,50,000</li>
        <li><strong>Total Users:</strong> 18,000</li>
        <li><strong>Burn Rate:</strong> ₹4,50,000</li>
        <li><strong>CAC:</strong> ₹1,200</li>
        <li><strong>LTV:</strong> ₹5,800</li>
        <li><strong>Total Raised:</strong> ₹35,00,000</li>
      </ul>

      <h3 style={{ marginTop: 30 }}>💸 Recent Funding Requests</h3>
      <ul>
        {fundingRequests.map((req, idx) => (
          <li key={idx}>
            ₹{req.goal.toLocaleString()} via {req.modes.join(', ')} on {req.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartupDashboard;
