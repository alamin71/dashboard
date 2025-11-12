import {
  Home,
  Users,
  TrendingUp,
  Bot,
  Handshake,
  FileText,
  Bell,
  Activity,
  Settings,
} from 'lucide-react';

interface SideNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function SideNav({ activeSection, onSectionChange }: SideNavProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'prompts', label: 'AI Prompt Management', icon: Bot },
    { id: 'partners', label: 'Partner Management', icon: Handshake },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'notifications', label: 'Notification Scheduler', icon: Bell },
    { id: 'logs', label: 'Technical Logs', icon: Activity },
    // { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
