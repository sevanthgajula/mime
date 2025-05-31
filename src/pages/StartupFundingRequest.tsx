import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartupFundingRequest: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    goal: '',
    reason: '',
    useOfFunds: '',
    preferredModes: [] as string[],
    expectedTimeline: '',
  });

  const modes = ['Equity', 'Loan', 'Partnership'];

  const toggleMode = (mode: string) => {
    setFormData({
      ...formData,
      preferredModes: formData.preferredModes.includes(mode)
        ? formData.preferredModes.filter(m => m !== mode)
        : [...formData.preferredModes, mode],
    });
  };

  const handleSubmit = () => {
    console.log('Funding Request Submitted:', formData);
    alert('Funding request submitted successfully!');
    navigate('/startup');
  };

  return (
    <div style={{ padding: 30, maxWidth: 700, margin: '0 auto' }}>
      <h2>💰 Funding Request Form</h2>

      <input
        placeholder="Funding Goal (₹)"
        value={formData.goal}
        onChange={e => setFormData({ ...formData, goal: e.target.value })}
        style={{ width: '100%', padding: 10, marginBottom: 15 }}
      />

      <textarea
        placeholder="Reason for raising funds"
        value={formData.reason}
        onChange={e => setFormData({ ...formData, reason: e.target.value })}
        style={{ width: '100%', height: 80, marginBottom: 15 }}
      />

      <textarea
        placeholder="How will you use the funds?"
        value={formData.useOfFunds}
        onChange={e => setFormData({ ...formData, useOfFunds: e.target.value })}
        style={{ width: '100%', height: 80, marginBottom: 15 }}
      />

      <label>Preferred Investment Modes:</label><br />
      {modes.map(mode => (
        <label key={mode} style={{ marginRight: 10 }}>
          <input
            type="checkbox"
            checked={formData.preferredModes.includes(mode)}
            onChange={() => toggleMode(mode)}
          /> {mode}
        </label>
      ))}

      <br /><br />
      <input
        placeholder="Expected Timeline (e.g., 2-3 months)"
        value={formData.expectedTimeline}
        onChange={e => setFormData({ ...formData, expectedTimeline: e.target.value })}
        style={{ width: '100%', padding: 10, marginBottom: 15 }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: 5
        }}
      >
        Submit Request
      </button>
    </div>
  );
};

export default StartupFundingRequest;
