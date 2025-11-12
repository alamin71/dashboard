import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { SideNav } from './components/SideNav';
import { DashboardOverview } from './components/DashboardOverview';
import { UserManagement } from './components/UserManagement';
import { Analytics } from './components/Analytics';
import { AIPromptManagement } from './components/AIPromptManagement';
import { PartnerManagement } from './components/PartnerManagement';
import { ContentManagement } from './components/ContentManagement';
import { NotificationScheduler } from './components/NotificationScheduler';
import { TechnicalLogs } from './components/TechnicalLogs';
// import { Settings } from './components/Settings';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'analytics':
        return <Analytics />;
      case 'prompts':
        return <AIPromptManagement />;
      case 'partners':
        return <PartnerManagement />;
      case 'content':
        return <ContentManagement />;
      case 'notifications':
        return <NotificationScheduler />;
      case 'logs':
        return <TechnicalLogs />;
      // case 'settings':
      //   return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex pt-16">
        <SideNav activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 ml-64 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { TopNav } from "./components/TopNav";
// import { SideNav } from "./components/SideNav";
// import { DashboardOverview } from "./components/DashboardOverview";
// import { UserManagement } from "./components/UserManagement";
// import { Analytics } from "./components/Analytics";
// import { AIPromptManagement } from "./components/AIPromptManagement";
// import { PartnerManagement } from "./components/PartnerManagement";
// import { ContentManagement } from "./components/ContentManagement";
// import { NotificationScheduler } from "./components/NotificationScheduler";
// import { TechnicalLogs } from "./components/TechnicalLogs";
// import { Settings } from "./components/Settings";
// import AdminLogin from "./components/AdminLogin";
// import ForgotPassword from "./components/ForgotPassword";
// import ResetPassword from "./components/ResetPassword";

// // ✅ Simple auth mock
// function useAuth() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return {
//     isAuthenticated,
//     login: () => setIsAuthenticated(true),
//     logout: () => setIsAuthenticated(false),
//   };
// }

// function Dashboard({ onLogout }: { onLogout: () => void }) {
//   const [activeSection, setActiveSection] = useState("dashboard");

//   const renderContent = () => {
//     switch (activeSection) {
//       case "dashboard":
//         return <DashboardOverview />;
//       case "users":
//         return <UserManagement />;
//       case "analytics":
//         return <Analytics />;
//       case "prompts":
//         return <AIPromptManagement />;
//       case "partners":
//         return <PartnerManagement />;
//       case "content":
//         return <ContentManagement />;
//       case "notifications":
//         return <NotificationScheduler />;
//       case "logs":
//         return <TechnicalLogs />;
//       case "settings":
//         return <Settings />;
//       default:
//         return <DashboardOverview />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <TopNav onLogout={onLogout} />
//       <div className="flex pt-16">
//         <SideNav activeSection={activeSection} onSectionChange={setActiveSection} />
//         <main className="flex-1 ml-64 p-8">{renderContent()}</main>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const auth = useAuth();

//   return (
//     <Router>
//       <Routes>
//         {/* ✅ Login */}
//         <Route
//           path="/"
//           element={
//             auth.isAuthenticated ? <Navigate to="/dashboard" /> : <AdminLogin onLogin={auth.login} />
//           }
//         />

//         {/* ✅ Forgot Password */}
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* ✅ Reset Password */}
//         <Route path="/reset-password" element={<ResetPassword />} />

//         {/* ✅ Protected Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             auth.isAuthenticated ? <Dashboard onLogout={auth.logout} /> : <Navigate to="/" />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }
