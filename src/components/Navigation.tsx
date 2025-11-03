import { useState } from 'react';
import { BookOpen, Users, Wrench, FileText, HelpCircle, Headphones, UserPlus, LayoutGrid, Home, Library, ChevronDown, ChevronRight, BarChart3, FileBarChart, TrendingUp, Activity, Briefcase, Heart, UserCheck, Layers, Pill, FileCheck, ShoppingCart, Package, Link, FlaskConical, MessageSquare } from 'lucide-react';
import { cn } from './ui/utils';
import vibilityLogo from 'figma:asset/c5440daf4c152ba3aa0bb2259346c24255e7ef4a.png';

export type PageType = 'dashboard' | 'plan-builder' | 'plan-library' | 'module-library' | 'users' | 'module-builder' | 'resources' | 'analytics-reports' | 'analytics-outcomes' | 'analytics-engagement' | 'analytics-operational' | 'analytics-population' | 'analytics-team' | 'supplements-protocols' | 'supplements-catalog' | 'supplements-orders' | 'supplements-integrations' | 'diagnostics-panels' | 'diagnostics-orders' | 'diagnostics-integrations' | 'messages' | 'faq' | 'support' | 'registration' | 'user-profile';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

interface MenuItem {
  id: PageType | 'library' | 'analytics' | 'supplements' | 'diagnostics';
  label: string;
  icon: React.ReactNode;
  children?: { id: PageType; label: string; icon: React.ReactNode }[];
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
  { id: 'users', label: 'Users', icon: <Users className="w-5 h-5" /> },
  { id: 'registration', label: 'Registration', icon: <UserPlus className="w-5 h-5" /> },
  { 
    id: 'library', 
    label: 'Curriculum', 
    icon: <Library className="w-5 h-5" />,
    children: [
      { id: 'plan-library', label: 'Plan Library', icon: <BookOpen className="w-4 h-4" /> },
      { id: 'plan-builder', label: 'Plan Builder', icon: <LayoutGrid className="w-4 h-4" /> },
      { id: 'module-library', label: 'Module Library', icon: <Layers className="w-4 h-4" /> },
      { id: 'module-builder', label: 'Module Builder', icon: <Wrench className="w-4 h-4" /> },
    ]
  },
  { 
    id: 'supplements', 
    label: 'Supplements', 
    icon: <Pill className="w-5 h-5" />,
    children: [
      { id: 'supplements-protocols', label: 'Protocols', icon: <FileCheck className="w-4 h-4" /> },
      { id: 'supplements-catalog', label: 'Catalog', icon: <Package className="w-4 h-4" /> },
      { id: 'supplements-orders', label: 'Patient Orders', icon: <ShoppingCart className="w-4 h-4" /> },
      { id: 'supplements-integrations', label: 'Integrations', icon: <Link className="w-4 h-4" /> },
    ]
  },
  { 
    id: 'diagnostics', 
    label: 'Diagnostics', 
    icon: <FlaskConical className="w-5 h-5" />,
    children: [
      { id: 'diagnostics-panels', label: 'Diagnostic Panels', icon: <FileCheck className="w-4 h-4" /> },
      { id: 'diagnostics-orders', label: 'Patient Orders', icon: <ShoppingCart className="w-4 h-4" /> },
      { id: 'diagnostics-integrations', label: 'Integrations', icon: <Link className="w-4 h-4" /> },
    ]
  },
  { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
  { id: 'resources', label: 'Resources', icon: <FileText className="w-5 h-5" /> },
  { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
  { 
    id: 'analytics', 
    label: 'Analytics', 
    icon: <BarChart3 className="w-5 h-5" />,
    children: [
      { id: 'analytics-outcomes', label: 'Patient Outcomes', icon: <TrendingUp className="w-4 h-4" /> },
      { id: 'analytics-engagement', label: 'Engagement Metrics', icon: <Activity className="w-4 h-4" /> },
      { id: 'analytics-operational', label: 'Operational Metrics', icon: <Briefcase className="w-4 h-4" /> },
      { id: 'analytics-population', label: 'Population Health', icon: <Heart className="w-4 h-4" /> },
      { id: 'analytics-team', label: 'Team Analytics', icon: <UserCheck className="w-4 h-4" /> },
      { id: 'analytics-reports', label: 'Reports', icon: <FileBarChart className="w-4 h-4" /> },
    ]
  },
  { id: 'support', label: 'Support', icon: <Headphones className="w-5 h-5" /> },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isSupplementsOpen, setIsSupplementsOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  const isLibraryItemActive = ['plan-library', 'module-library', 'plan-builder', 'module-builder'].includes(currentPage);
  const isSupplementsItemActive = ['supplements-protocols', 'supplements-catalog', 'supplements-orders', 'supplements-integrations'].includes(currentPage);
  const isDiagnosticsItemActive = ['diagnostics-panels', 'diagnostics-orders', 'diagnostics-integrations'].includes(currentPage);
  const isAnalyticsItemActive = ['analytics-reports', 'analytics-outcomes', 'analytics-engagement', 'analytics-operational', 'analytics-population', 'analytics-team'].includes(currentPage);

  return (
    <div className="w-64 bg-white border-r border-[rgba(0,0,0,0.1)] h-screen flex flex-col">
      <div className="p-6 border-b border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-start gap-3">
          <img 
            src={vibilityLogo} 
            alt="Vibility Logo" 
            className="w-10 h-10 flex-shrink-0"
          />
          <h1 className="font-['Inter',_sans-serif] font-semibold text-[#2D3748] text-[22px] tracking-[1.5px]">
            Vibility
          </h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.children ? (
                // Expandable menu item
                <div>
                  <button
                    onClick={() => {
                      if (item.id === 'library') setIsLibraryOpen(!isLibraryOpen);
                      if (item.id === 'supplements') setIsSupplementsOpen(!isSupplementsOpen);
                      if (item.id === 'diagnostics') setIsDiagnosticsOpen(!isDiagnosticsOpen);
                      if (item.id === 'analytics') setIsAnalyticsOpen(!isAnalyticsOpen);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                      (item.id === 'library' && isLibraryItemActive) || (item.id === 'supplements' && isSupplementsItemActive) || (item.id === 'diagnostics' && isDiagnosticsItemActive) || (item.id === 'analytics' && isAnalyticsItemActive)
                        ? "bg-[rgba(79,95,237,0.1)] text-[#4F5FED]"
                        : "text-[#2D3748] hover:bg-[rgba(79,95,237,0.05)]"
                    )}
                  >
                    {item.icon}
                    <span className="font-['Inter',_sans-serif] font-medium text-[15px] flex-1">
                      {item.label}
                    </span>
                    {((item.id === 'library' && isLibraryOpen) || (item.id === 'supplements' && isSupplementsOpen) || (item.id === 'diagnostics' && isDiagnosticsOpen) || (item.id === 'analytics' && isAnalyticsOpen)) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {((item.id === 'library' && isLibraryOpen) || (item.id === 'supplements' && isSupplementsOpen) || (item.id === 'diagnostics' && isDiagnosticsOpen) || (item.id === 'analytics' && isAnalyticsOpen)) && (
                    <ul className="mt-1 space-y-1 ml-3">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => onNavigate(child.id)}
                            className={cn(
                              "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left",
                              currentPage === child.id
                                ? "bg-[#4F5FED] text-white"
                                : "text-[#2D3748] hover:bg-[rgba(79,95,237,0.05)]"
                            )}
                          >
                            {child.icon}
                            <span className="font-['Inter',_sans-serif] font-medium text-[14px]">
                              {child.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                // Regular menu item
                <button
                  onClick={() => onNavigate(item.id as PageType)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    currentPage === item.id
                      ? "bg-[#4F5FED] text-white"
                      : "text-[#2D3748] hover:bg-[rgba(79,95,237,0.05)]"
                  )}
                >
                  {item.icon}
                  <span className="font-['Inter',_sans-serif] font-medium text-[15px]">
                    {item.label}
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
