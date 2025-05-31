import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestorOnboarding: React.FC = () => {
  const navigate = useNavigate();

  // Personal Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState('');

  // Investment Details
  const [budget, setBudget] = useState('');
  const [sectors, setSectors] = useState<string[]>([]);
  const [investmentType, setInvestmentType] = useState('');
  const [riskLevel, setRiskLevel] = useState('');

  const availableSectors = ['Fintech', 'Healthtech', 'Edtech', 'D2C', 'AI/ML'];
  const investmentTypes = ['Equity', 'Loan', 'Partner'];
  const riskLevels = ['Low', 'Medium', 'High'];

  const toggleSector = (sector: string) => {
    setSectors(prev =>
      prev.includes(sector) ? prev.filter(s => s !== sector) : [...prev, sector]
    );
  };

  const handleSubmit = () => {
    const onboardingData = {
      fullName,
      email,
      phone,
      pan,
      aadhaar,
      budget,
      sectors,
      investmentType,
      riskLevel,
    };

    console.log('Submitted onboarding data:', onboardingData);

    // Save to localStorage or send to backend here
    localStorage.setItem('investorOnboarding', JSON.stringify(onboardingData));

    navigate('/investor');
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h2>Investor Onboarding</h2>

      <fieldset style={{ marginBottom: 20 }}>
        <legend><strong>Personal Details</strong></legend>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          placeholder="Full Name"
        /><br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        /><br />
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Phone Number"
        /><br />
        <input
          type="text"
          value={pan}
          onChange={e => setPan(e.target.value.toUpperCase())}
          placeholder="PAN Number"
        /><br />
        <input
          type="text"
          value={aadhaar}
          onChange={e => setAadhaar(e.target.value)}
          placeholder="Aadhaar Number (Optional)"
        />
      </fieldset>

      <fieldset style={{ marginBottom: 20 }}>
        <legend><strong>Investment Preferences</strong></legend>

        <label>💰 Investment Budget (INR)</label><br />
        <input
          type="number"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="e.g. 500000"
        />

        <div style={{ marginTop: 15 }}>
          <label>🏭 Preferred Sectors</label><br />
          {availableSectors.map(sector => (
            <label key={sector} style={{ marginRight: 10 }}>
              <input
                type="checkbox"
                checked={sectors.includes(sector)}
                onChange={() => toggleSector(sector)}
              />
              {sector}
            </label>
          ))}
        </div>

        <div style={{ marginTop: 15 }}>
          <label>💼 Investment Type</label><br />
          <select
            value={investmentType}
            onChange={e => setInvestmentType(e.target.value)}
          >
            <option value="">Select one</option>
            {investmentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 15 }}>
          <label>📉 Risk Appetite</label><br />
          {riskLevels.map(level => (
            <label key={level} style={{ marginRight: 10 }}>
              <input
                type="radio"
                name="risk"
                value={level}
                checked={riskLevel === level}
                onChange={e => setRiskLevel(e.target.value)}
              />
              {level}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 20,
          padding: '10px 25px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InvestorOnboarding;
