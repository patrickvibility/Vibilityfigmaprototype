import { useState } from 'react';
import { Navigation, PageType } from './components/Navigation';
import { NotificationCenter } from './components/NotificationCenter';
import { Dashboard } from './pages/Dashboard';
import { PlanBuilder } from './pages/PlanBuilder';
import { PlanLibrary } from './pages/PlanLibrary';
import { ModuleLibraryPage } from './pages/ModuleLibraryPage';
import { Users } from './pages/Users';
import { ModuleBuilder } from './pages/ComponentBuilder';
import { Resources } from './pages/Resources';
import { Messages } from './pages/Messages';
import { Reports } from './pages/analytics/Reports';
import { PatientOutcomes } from './pages/analytics/PatientOutcomes';
import { EngagementMetrics } from './pages/analytics/EngagementMetrics';
import { OperationalMetrics } from './pages/analytics/OperationalMetrics';
import { PopulationHealth } from './pages/analytics/PopulationHealth';
import { TeamAnalytics } from './pages/analytics/TeamAnalytics';
import { Protocols } from './pages/supplements/Protocols';
import { Catalog } from './pages/supplements/Catalog';
import { PatientOrders } from './pages/supplements/PatientOrders';
import { Integrations } from './pages/supplements/Integrations';
import { DiagnosticPanels } from './pages/diagnostics/DiagnosticPanels';
import { DiagnosticPatientOrders } from './pages/diagnostics/PatientOrders';
import { DiagnosticIntegrations } from './pages/diagnostics/Integrations';
import { FAQ } from './pages/FAQ';
import { Support } from './pages/Support';
import { Registration } from './pages/Registration';
import { UserProfile } from './pages/UserProfile';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleUserProfileClick = (userId: number) => {
    setSelectedUserId(userId);
    setCurrentPage('user-profile');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedUserId(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onUserClick={handleUserProfileClick} />;
      case 'plan-builder':
        return <PlanBuilder />;
      case 'plan-library':
        return <PlanLibrary />;
      case 'module-library':
        return <ModuleLibraryPage />;
      case 'users':
        return <Users onUserClick={handleUserProfileClick} />;
      case 'module-builder':
        return <ModuleBuilder />;
      case 'resources':
        return <Resources />;
      case 'messages':
        return <Messages />;
      case 'analytics-reports':
        return <Reports />;
      case 'analytics-outcomes':
        return <PatientOutcomes />;
      case 'analytics-engagement':
        return <EngagementMetrics />;
      case 'analytics-operational':
        return <OperationalMetrics />;
      case 'analytics-population':
        return <PopulationHealth />;
      case 'analytics-team':
        return <TeamAnalytics />;
      case 'supplements-protocols':
        return <Protocols />;
      case 'supplements-catalog':
        return <Catalog />;
      case 'supplements-orders':
        return <PatientOrders />;
      case 'supplements-integrations':
        return <Integrations />;
      case 'diagnostics-panels':
        return <DiagnosticPanels />;
      case 'diagnostics-orders':
        return <DiagnosticPatientOrders />;
      case 'diagnostics-integrations':
        return <DiagnosticIntegrations />;
      case 'faq':
        return <FAQ />;
      case 'support':
        return <Support />;
      case 'registration':
        return <Registration />;
      case 'user-profile':
        return selectedUserId ? (
          <UserProfile userId={selectedUserId} onBack={handleBackToDashboard} />
        ) : (
          <Dashboard onUserClick={handleUserProfileClick} />
        );
      default:
        return <Dashboard onUserClick={handleUserProfileClick} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f8f8fa]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-[rgba(0,0,0,0.1)] px-8 py-4 flex items-center justify-end">
          <NotificationCenter />
        </header>
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
