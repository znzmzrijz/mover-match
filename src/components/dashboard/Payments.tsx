import { DollarSign, Download } from 'lucide-react';

export default function Payments() {
  const transactions = [
    {
      id: 1,
      customer: 'John Smith',
      date: '2024-03-15',
      amount: 350,
      status: 'Completed',
      type: 'Booking Payment',
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      date: '2024-03-14',
      amount: 480,
      status: 'Pending',
      type: 'Booking Payment',
    },
    {
      id: 3,
      customer: 'Michael Brown',
      date: '2024-03-13',
      amount: 275,
      status: 'Completed',
      type: 'Booking Payment',
    },
  ];

  const stats = [
    {
      name: 'Total Earnings',
      value: '$12,426',
      change: '+18%',
    },
    {
      name: 'Pending Payments',
      value: '$850',
      change: '-2%',
    },
    {
      name: 'Average Job Value',
      value: '$368',
      change: '+5%',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Payments</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </span>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <button className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-600">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500 border-b">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-4">{transaction.customer}</td>
                    <td className="py-4">{transaction.date}</td>
                    <td className="py-4">{transaction.type}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                        {transaction.amount}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        View Details
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