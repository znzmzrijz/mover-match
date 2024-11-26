import { Users, Truck, AlertTriangle, DollarSign } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    {
      name: 'Total Providers',
      value: '124',
      change: '+8%',
      icon: Users,
    },
    {
      name: 'Active Bookings',
      value: '438',
      change: '+12%',
      icon: Truck,
    },
    {
      name: 'Open Disputes',
      value: '6',
      change: '-2',
      icon: AlertTriangle,
    },
    {
      name: 'Platform Revenue',
      value: '$24,526',
      change: '+15%',
      icon: DollarSign,
    },
  ];

  const recentProviders = [
    {
      id: 1,
      name: 'Express Movers',
      location: 'New York, NY',
      status: 'Pending Verification',
      date: '2024-03-15',
    },
    {
      id: 2,
      name: 'City Relocation Pro',
      location: 'Brooklyn, NY',
      status: 'Active',
      date: '2024-03-14',
    },
    {
      id: 3,
      name: 'Swift Moving Services',
      location: 'Queens, NY',
      status: 'Under Review',
      date: '2024-03-13',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Admin Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-6 w-6 text-blue-600" />
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Providers */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Provider Applications</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Provider Name</th>
                  <th className="pb-4">Location</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Application Date</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentProviders.map((provider) => (
                  <tr key={provider.id}>
                    <td className="py-4">{provider.name}</td>
                    <td className="py-4">{provider.location}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        provider.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : provider.status === 'Under Review'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {provider.status}
                      </span>
                    </td>
                    <td className="py-4">{provider.date}</td>
                    <td className="py-4">
                      <button className="text-sm text-blue-600 hover:text-blue-800 mr-3">
                        Review
                      </button>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}