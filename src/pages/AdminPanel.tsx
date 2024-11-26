import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, AlertTriangle, Settings } from 'lucide-react';
import AdminOverview from '../components/admin/AdminOverview';
import ProviderManagement from '../components/admin/ProviderManagement';
import Disputes from '../components/admin/Disputes';

export default function AdminPanel() {
  const location = useLocation();

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Providers', href: '/admin/providers', icon: Users },
    { name: 'Disputes', href: '/admin/disputes', icon: AlertTriangle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 min-h-screen">
          <div className="p-4">
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    isActive
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/providers" element={<ProviderManagement />} />
            <Route path="/disputes" element={<Disputes />} />
            <Route path="/settings" element={<AdminOverview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}