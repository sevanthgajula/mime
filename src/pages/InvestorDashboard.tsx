import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StartupCard from '../components/StartupCard';
import type { Startup } from '../components/StartupCard';
const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'FinEdge',
    foundedYear: 2021,
    sector: 'Fintech',
    description: 'A digital wealth management platform for retail investors.',
    fundingGoal: 5000000,
  },
  {
    id: '2',
    name: 'MediTrack',
    foundedYear: 2020,
    sector: 'Healthtech',
    description: 'AI-based patient monitoring systems for hospitals.',
    fundingGoal: 8000000,
  },
  {
    id: '3',
    name: 'EduNest',
    foundedYear: 2022,
    sector: 'Edtech',
    description: 'Remote learning tools for tier-2 Indian schools.',
    fundingGoal: 3000000,
  },
];

const InvestorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handlePortfolioClick = () => navigate('/investor/portfolio');
  const handleMessagesClick = () => navigate('/investor/messages');

  return (
    <div style={{ padding: 30 }}>
      {/* Top bar with profile dropdown */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              padding: '8px 15px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 5,
              cursor: 'pointer',
            }}
          >
            👤 Profile
          </button>
          {showMenu && (
            <div style={{
              position: 'absolute',
              right: 0,
              marginTop: 5,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: 5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 999,
            }}>
              <div
                onClick={handlePortfolioClick}
                style={{ padding: '10px 20px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
              >
                📁 Portfolio
              </div>
              <div
                onClick={handleMessagesClick}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
              >
                📩 Messages
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Startup Explorer */}
      <h1>📊 Investor Dashboard</h1>
      <h2>🚀 Browse Startups</h2>
      <div style={{
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        marginTop: 20
      }}>
        {mockStartups.map(startup => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
};

export default InvestorDashboard;
