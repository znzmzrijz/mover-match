import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function ProviderManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const providers = [
    {
      id: 1,
      name: 'Express Movers',
      location: 'New York, NY',
      status: 'Active',
      rating: 4.8,
      totalBookings: 156,
      joinDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'City Relocation Pro',
      location: 'Brooklyn, NY',
      status: 'Suspended',
      rating: 4.2,
      totalBookings: 98,
      joinDate: '2024-02-01',
    },
    {
      id: 3,
      name: 'Swift Moving Services',
      location: 'Queens, NY',
      status: 'Pending',
      rating: 0,
      totalBookings: 0,
      joinDate: '2024-03-13',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Provider Management</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Providers</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Providers List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500 border-b">
                  <th className="pb-4">Provider Name</th>
                  <th className="pb-4">Location</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Rating</th>
                  <th className="pb-4">Total Bookings</th>
                  <th className="pb-4">Join Date</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {providers.map((provider) => (
                  <tr key={provider.id}>
                    <td className="py-4">{provider.name}</td>
                    <td className="py-4">{provider.location}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        provider.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : provider.status === 'Suspended'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {provider.status}
                      </span>
                    </td>
                    <td className="py-4">
                      {provider.rating > 0 ? (
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1">{provider.rating}</span>
                        </div>
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="py-4">{provider.totalBookings}</td>
                    <td className="py-4">{provider.joinDate}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          View
                        </button>
                        {provider.status === 'Pending' && (
                          <button className="text-sm text-green-600 hover:text-green-800">
                            Approve
                          </button>
                        )}
                        {provider.status === 'Active' && (
                          <button className="text-sm text-red-600 hover:text-red-800">
                            Suspend
                          </button>
                        )}
                        {provider.status === 'Suspended' && (
                          <button className="text-sm text-green-600 hover:text-green-800">
                            Reactivate
                          </button>
                        )}
                      </div>
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