import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface Startup {
  id: string;
  name: string;
  foundedYear: number;
  sector: string;
  description: string;
  fundingGoal: number;
}

interface Props {
  startup: Startup;
}

const StartupCard: React.FC<Props> = ({ startup }) => {
  const navigate = useNavigate();
  const age = new Date().getFullYear() - startup.foundedYear;

  const handleViewDetails = () => {
    navigate(`/startup/${startup.id}`);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: 20,
      borderRadius: 10,
      width: 300,
      marginBottom: 20,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{startup.name}</h3>
      <p><strong>Sector:</strong> {startup.sector}</p>
      <p><strong>Founded:</strong> {startup.foundedYear} ({age} years ago)</p>
      <p><strong>Funding Needed:</strong> ₹{startup.fundingGoal.toLocaleString()}</p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{startup.description}</p>

      <button
        onClick={handleViewDetails}
        style={{
          marginTop: 10,
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default StartupCard;
