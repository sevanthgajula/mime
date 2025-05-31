import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartupOnboarding: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    foundedYear: '',
    sector: '',
    founders: [{ name: '', role: '', linkedin: '' }],
    problem: '',
    solution: '',
    revenue: '',
    users: '',
    burnRate: '',
    cac: '',
    ltv: '',
    totalRaised: '',
    fundingGoal: '',
    investmentModes: [] as string[],
    pitchDeck: '',
    website: '',
    twitter: '',
    linkedin: '',
  });

  const sectors = ['Fintech', 'Healthtech', 'Edtech', 'E-commerce', 'AI/ML'];
  const investmentOptions = ['Equity', 'Loan', 'Partnership'];

  const updateFounder = (index: number, field: string, value: string) => {
    const updated = [...formData.founders];
    updated[index][field as keyof typeof updated[0]] = value;
    setFormData({ ...formData, founders: updated });
  };

  const addFounder = () => {
    setFormData({ ...formData, founders: [...formData.founders, { name: '', role: '', linkedin: '' }] });
  };

  const toggleInvestmentMode = (mode: string) => {
    const current = formData.investmentModes;
    setFormData({
      ...formData,
      investmentModes: current.includes(mode)
        ? current.filter(m => m !== mode)
        : [...current, mode],
    });
  };

  const handleSubmit = () => {
    console.log('Startup Onboarding Submitted:', formData);
    alert('Onboarding Submitted!');
    navigate('/startup'); // redirect to startup dashboard
  };

  return (
    <div style={{ padding: 30, maxWidth: 800, margin: '0 auto' }}>
      <h2>🚀 Startup Onboarding</h2>

      <input placeholder="Startup Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} /><br />
      <input placeholder="Year Founded (e.g. 2021)" value={formData.foundedYear} onChange={e => setFormData({ ...formData, foundedYear: e.target.value })} /><br />
      
      <label>Sector:</label><br />
      <select value={formData.sector} onChange={e => setFormData({ ...formData, sector: e.target.value })}>
        <option value="">Select Sector</option>
        {sectors.map(sec => <option key={sec}>{sec}</option>)}
      </select><br /><br />

      <h3>👥 Founders</h3>
      {formData.founders.map((f, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <input placeholder="Name" value={f.name} onChange={e => updateFounder(i, 'name', e.target.value)} />
          <input placeholder="Role" value={f.role} onChange={e => updateFounder(i, 'role', e.target.value)} />
          <input placeholder="LinkedIn" value={f.linkedin} onChange={e => updateFounder(i, 'linkedin', e.target.value)} />
        </div>
      ))}
      <button onClick={addFounder}>+ Add Founder</button>

      <h3>📌 Problem & Solution</h3>
      <textarea placeholder="What problem are you solving?" value={formData.problem} onChange={e => setFormData({ ...formData, problem: e.target.value })} /><br />
      <textarea placeholder="How are you solving it?" value={formData.solution} onChange={e => setFormData({ ...formData, solution: e.target.value })} /><br />

      <h3>📈 Traction Metrics</h3>
      <input placeholder="Monthly Revenue (₹)" value={formData.revenue} onChange={e => setFormData({ ...formData, revenue: e.target.value })} /><br />
      <input placeholder="Total Users" value={formData.users} onChange={e => setFormData({ ...formData, users: e.target.value })} /><br />
      <input placeholder="Burn Rate (₹)" value={formData.burnRate} onChange={e => setFormData({ ...formData, burnRate: e.target.value })} /><br />
      <input placeholder="CAC (₹)" value={formData.cac} onChange={e => setFormData({ ...formData, cac: e.target.value })} /><br />
      <input placeholder="LTV (₹)" value={formData.ltv} onChange={e => setFormData({ ...formData, ltv: e.target.value })} /><br />

      <h3>💰 Funding</h3>
      <input placeholder="Total Raised (₹)" value={formData.totalRaised} onChange={e => setFormData({ ...formData, totalRaised: e.target.value })} /><br />
      <input placeholder="Funding Goal (₹)" value={formData.fundingGoal} onChange={e => setFormData({ ...formData, fundingGoal: e.target.value })} /><br />

      <label>Preferred Investment Modes:</label><br />
      {investmentOptions.map(opt => (
        <label key={opt} style={{ marginRight: 10 }}>
          <input
            type="checkbox"
            checked={formData.investmentModes.includes(opt)}
            onChange={() => toggleInvestmentMode(opt)}
          /> {opt}
        </label>
      ))}<br />

      <h3>🔗 External Links</h3>
      <input placeholder="Pitch Deck URL" value={formData.pitchDeck} onChange={e => setFormData({ ...formData, pitchDeck: e.target.value })} /><br />
      <input placeholder="Website" value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} /><br />
      <input placeholder="Twitter" value={formData.twitter} onChange={e => setFormData({ ...formData, twitter: e.target.value })} /><br />
      <input placeholder="LinkedIn Page" value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })} /><br /><br />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 20,
          padding: '10px 25px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Submit Onboarding
      </button>
    </div>
  );
};

export default StartupOnboarding;
