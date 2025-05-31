import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FundingDetailPage: React.FC = () => {

  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([
    { purpose: 'Marketing Campaign', amount: 150000 },
    { purpose: 'MVP Development', amount: 100000 }
  ]);
  const [disputes] = useState([
    { investor: 'Priya M.', issue: 'Why was ₹1L spent on marketing again last month?' },
    { investor: 'Ravi V.', issue: 'Timeline for MVP unclear despite funding use.' }
  ]);

  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleExpenseSubmit = () => {
    if (!amount || !purpose) return alert('Please fill both fields');
    setExpenses(prev => [...prev, { purpose, amount: Number(amount) }]);
    setAmount('');
    setPurpose('');
  };

  return (
    <div style={{ padding: 30 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        ← Back to Fundings
      </button>

      <h2>📂 Seed Round – ₹15,00,000 Raised</h2>

      <h3 style={{ marginTop: 30 }}>🧾 Expense Tracker</h3>
      <input
        placeholder="Amount (₹)"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />
      <input
        placeholder="Purpose"
        value={purpose}
        onChange={e => setPurpose(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />
      <button
        onClick={handleExpenseSubmit}
        style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: 5 }}
      >
        Add Expense
      </button>

      <h4 style={{ marginTop: 30 }}>📜 Past Expenses</h4>
      <ul>
        {expenses.map((e, idx) => (
          <li key={idx}>₹{e.amount.toLocaleString()} – {e.purpose}</li>
        ))}
      </ul>

      <h4 style={{ marginTop: 30 }}>🚨 Disputes Raised</h4>
      <ul style={{ color: 'red' }}>
        {disputes.map((d, idx) => (
          <li key={idx}><strong>{d.investor}:</strong> {d.issue}</li>
        ))}
      </ul>
    </div>
  );
};

export default FundingDetailPage;
