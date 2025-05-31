import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import type { UserRole } from '../types/UserRole';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: UserRole) => {
    localStorage.setItem('userRole', role);

    if (role === 'investor') {
      navigate('/investor-onboarding');
    } else if (role === 'startup') {
      navigate('/startup-onboarding'); // 👈 route to onboarding page for startup
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Select Your Role</h2>
      <RoleSelector onSelectRole={handleRoleSelection} />
    </div>
  );
};

export default LoginPage;
