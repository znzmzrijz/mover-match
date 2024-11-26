import { Truck, Users, DollarSign, Star } from 'lucide-react';

export default function Overview() {
  const stats = [
    {
      name: 'Total Bookings',
      value: '156',
      change: '+12%',
      icon: Truck,
    },
    {
      name: 'Active Customers',
      value: '89',
      change: '+4%',
      icon: Users,
    },
    {
      name: 'Total Earnings',
      value: '$12,426',
      change: '+18%',
      icon: DollarSign,
    },
    {
      name: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customer: 'John Smith',
      date: '2024-03-15',
      status: 'Pending',
      amount: '$350',
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      date: '2024-03-14',
      status: 'Completed',
      amount: '$480',
    },
    {
      id: 3,
      customer: 'Michael Brown',
      date: '2024-03-13',
      status: 'In Progress',
      amount: '$275',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>

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

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-4">{booking.customer}</td>
                    <td className="py-4">{booking.date}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4">{booking.amount}</td>
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