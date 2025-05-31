import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InvestorDashboard from './pages/InvestorDashboard';
import StartupDashboard from './pages/StartupDashboard';
import InvestorOnboarding from './pages/InvestorOnboarding';
import StartupDetailPage from './pages/StartupDetailPage';
import InvestorPortfolio from './pages/InvestorPortfolio';
import InvestmentDetailPage from './pages/InvestmentDetailPage';
import InvestorMessages from './pages/InvestorMessages';
import StartupOnboarding from './pages/StartupOnboarding';
import StartupFundingRequest from './pages/StartupFundingRequest';
import FundingDetailPage from './pages/FundingDetailPage';
import StartupFundings from './pages/StartupFundings';
import StartupMessages from './pages/StartupMessages';







const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/investor" element={<InvestorDashboard />} />
        <Route path="/startup" element={<StartupDashboard />} />
        <Route path="/investor-onboarding" element={<InvestorOnboarding />} />
        <Route path="/startup/:id" element={<StartupDetailPage />} />
        <Route path="/investor/portfolio" element={<InvestorPortfolio />} />
        <Route path="/investor/portfolio/:startupId" element={<InvestmentDetailPage />} />
        <Route path="/investor/messages" element={<InvestorMessages />} />
        <Route path="/startup-onboarding" element={<StartupOnboarding />} />
        <Route path="/startup/funding-request" element={<StartupFundingRequest />} />
        <Route path="/startup/fundings" element={<StartupFundings />} />
        <Route path="/startup/fundings/:fundingId" element={<FundingDetailPage />} />
        <Route path="/startup/messages" element={<StartupMessages />} />
      </Routes>
    </Router>
  );
};

export default App;
