import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, DollarSign, Settings, Users } from 'lucide-react';
import Overview from '../components/dashboard/Overview';
import Bookings from '../components/dashboard/Bookings';
import Payments from '../components/dashboard/Payments';
import Profile from '../components/dashboard/Profile';

export default function Dashboard() {
  const location = useLocation();

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Bookings', href: '/dashboard/bookings', icon: Calendar },
    { name: 'Payments', href: '/dashboard/payments', icon: DollarSign },
    { name: 'Profile', href: '/dashboard/profile', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Provider Dashboard</h2>
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
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
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
            <Route path="/" element={<Overview />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}