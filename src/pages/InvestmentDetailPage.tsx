import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface InvestmentData {
  startupName: string;
  amount: number;
  date: string;
  allInvestors: { name: string; amount: number }[];
  fundUsage: {
    totalUsed: number;
    goal: number;
  };
  usageBreakdown: { item: string; amount: number; id: string }[];
}

const investmentDataset: Record<string, InvestmentData> = {
  '1': {
    startupName: 'FinEdge',
    amount: 150000,
    date: '2024-11-10',
    allInvestors: [
      { name: 'You', amount: 150000 },
      { name: 'Priya M.', amount: 200000 },
      { name: 'Raj K.', amount: 100000 },
    ],
    fundUsage: {
      totalUsed: 275000,
      goal: 500000,
    },
    usageBreakdown: [
      { id: 'u1', item: 'Marketing Campaign', amount: 120000 },
      { id: 'u2', item: 'Product Development', amount: 100000 },
      { id: 'u3', item: 'Legal & Compliance', amount: 55000 },
    ],
  },
};

const InvestmentDetailPage: React.FC = () => {
  const { startupId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'usage'>('overview');
  const [disputeId, setDisputeId] = useState<string | null>(null);
  const [disputeText, setDisputeText] = useState('');

  const investment = investmentDataset[startupId ?? '1'];
  const percentUsed = (investment.fundUsage.totalUsed / investment.fundUsage.goal) * 100;

  const handleDisputeSubmit = () => {
    alert(`Dispute raised for item "${disputeId}": ${disputeText}`);
    setDisputeText('');
    setDisputeId(null);
  };

  return (
    <div style={{ padding: 30 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        ← Back to Portfolio
      </button>

      <h1>📈 Investment in {investment.startupName}</h1>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <button onClick={() => setActiveTab('overview')} style={activeTab === 'overview' ? activeTabStyle : tabStyle}>
          Overview
        </button>
        <button onClick={() => setActiveTab('usage')} style={activeTab === 'usage' ? activeTabStyle : tabStyle}>
          Funds Usage
        </button>
      </div>

      {activeTab === 'overview' && (
        <>
          <p><strong>Date of Investment:</strong> {investment.date}</p>
          <p><strong>Amount Invested:</strong> ₹{investment.amount.toLocaleString()}</p>

          <h3 style={{ marginTop: 30 }}>🧑‍🤝‍🧑 Other Investors</h3>
          <ul>
            {investment.allInvestors.map((inv, idx) => (
              <li key={idx}>{inv.name} – ₹{inv.amount.toLocaleString()}</li>
            ))}
          </ul>

          <h3 style={{ marginTop: 30 }}>📊 Fund Usage</h3>
          <p>
            <strong>Total Used:</strong> ₹{investment.fundUsage.totalUsed.toLocaleString()} of ₹{investment.fundUsage.goal.toLocaleString()}
          </p>
          <div style={{ background: '#eee', height: 20, width: '100%', borderRadius: 10 }}>
            <div style={{
              height: '100%',
              width: `${percentUsed}%`,
              background: '#28a745',
              borderRadius: 10
            }}></div>
          </div>
        </>
      )}

      {activeTab === 'usage' && (
        <>
          <h3>🧾 Usage Breakdown</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={tdStyle}>Item</th>
                <th style={tdStyle}>Amount (₹)</th>
                <th style={tdStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {investment.usageBreakdown.map((entry) => (
                <tr key={entry.id}>
                  <td style={tdStyle}>{entry.item}</td>
                  <td style={tdStyle}>{entry.amount.toLocaleString()}</td>
                  <td style={tdStyle}>
                    <button
                      style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: 5 }}
                      onClick={() => setDisputeId(entry.id)}
                    >
                      Raise Dispute
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Dispute Modal */}
          {disputeId && (
            <div style={{
              marginTop: 30,
              padding: 20,
              border: '1px solid #ccc',
              borderRadius: 10,
              backgroundColor: '#fafafa'
            }}>
              <h4>✋ Raise Dispute for Item ID: {disputeId}</h4>
              <textarea
                placeholder="Describe your concern..."
                value={disputeText}
                onChange={e => setDisputeText(e.target.value)}
                style={{ width: '100%', height: 100, marginBottom: 10 }}
              />
              <br />
              <button onClick={handleDisputeSubmit} style={{ marginRight: 10, backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: 5 }}>
                Submit Dispute
              </button>
              <button onClick={() => setDisputeId(null)} style={{ padding: '8px 16px' }}>
                Cancel
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left'
};

const tabStyle: React.CSSProperties = {
  padding: '8px 16px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9',
  cursor: 'pointer'
};

const activeTabStyle: React.CSSProperties = {
  ...tabStyle,
  fontWeight: 'bold',
  backgroundColor: '#e0f0ff'
};

export default InvestmentDetailPage;
