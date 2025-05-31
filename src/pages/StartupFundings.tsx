import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockFundings = [
  {
    id: '0',
    round: 'Pre-Seed',
    amount: 750000,
    type: 'Equity',
    date: '2023-09-15',
    investors: ['Ravi Ventures', 'Priya Capital'],
  },
  {
    id: '1',
    round: 'Seed',
    amount: 1500000,
    type: 'Loan',
    date: '2024-05-10',
    investors: ['Startup Angels'],
  },
  {
    id: '2',
    round: 'Series A',
    amount: 3000000,
    type: 'Equity',
    date: '2025-02-01',
    investors: ['Alpha Investors', 'Future Growth Partners'],
  },
];

const tdStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left',
};

const StartupFundingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 30 }}>
      <h2>📑 Past Fundings</h2>
      <p>Click on any row to see detailed expense tracking and investor disputes.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={tdStyle}>Round</th>
            <th style={tdStyle}>Amount (₹)</th>
            <th style={tdStyle}>Type</th>
            <th style={tdStyle}>Date</th>
            <th style={tdStyle}>Investors</th>
          </tr>
        </thead>
        <tbody>
          {mockFundings.map((funding) => (
            <tr
              key={funding.id}
              onClick={() => navigate(`/startup/fundings/${funding.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <td style={tdStyle}>{funding.round}</td>
              <td style={tdStyle}>{funding.amount.toLocaleString()}</td>
              <td style={tdStyle}>{funding.type}</td>
              <td style={tdStyle}>{funding.date}</td>
              <td style={tdStyle}>{funding.investors.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StartupFundingsPage;
