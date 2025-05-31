import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockInvestments = [
  {
    startupId: '1',
    startupName: 'FinEdge',
    amount: 150000,
    type: 'Equity',
    status: 'Active',
    date: '2024-11-10'
  },
  {
    startupId: '2',
    startupName: 'MediTrack',
    amount: 100000,
    type: 'Loan',
    status: 'Pending',
    date: '2025-01-20'
  }
];

const InvestorPortfolio: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (startupId: string) => {
    navigate(`/investor/portfolio/${startupId}`);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>📁 My Portfolio</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={tdStyle}>Startup</th>
            <th style={tdStyle}>Amount (₹)</th>
            <th style={tdStyle}>Type</th>
            <th style={tdStyle}>Status</th>
            <th style={tdStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {mockInvestments.map((inv, index) => (
            <tr key={index} onClick={() => handleRowClick(inv.startupId)} style={{ cursor: 'pointer' }}>
              <td style={tdStyle}>{inv.startupName}</td>
              <td style={tdStyle}>{inv.amount.toLocaleString()}</td>
              <td style={tdStyle}>{inv.type}</td>
              <td style={tdStyle}>{inv.status}</td>
              <td style={tdStyle}>{inv.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tdStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left'
};

export default InvestorPortfolio;
