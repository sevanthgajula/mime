import React from 'react';
import type { UserRole } from '../types/UserRole';

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <button onClick={() => onSelectRole('investor')}>Login as Investor</button>
      <button onClick={() => onSelectRole('startup')}>Login as Startup</button>
    </div>
  );
};

export default RoleSelector;
