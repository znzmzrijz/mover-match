import { useState } from 'react';
import { AlertTriangle, MessageSquare } from 'lucide-react';

export default function Disputes() {
  const [filter, setFilter] = useState('all');

  const disputes = [
    {
      id: 1,
      customer: 'John Smith',
      provider: 'Express Movers',
      bookingId: 'BK-2024-001',
      type: 'Damage Claim',
      status: 'Open',
      date: '2024-03-15',
      amount: '$250',
      description: 'Furniture damaged during move',
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      provider: 'City Relocation Pro',
      bookingId: 'BK-2024-002',
      type: 'Delay',
      status: 'Under Review',
      date: '2024-03-14',
      amount: '$150',
      description: 'Movers arrived 3 hours late',
    },
    {
      id: 3,
      customer: 'Michael Brown',
      provider: 'Swift Moving Services',
      bookingId: 'BK-2024-003',
      type: 'Price Dispute',
      status: 'Resolved',
      date: '2024-03-13',
      amount: '$180',
      description: 'Additional charges not discussed beforehand',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dispute Management</h1>

      {/* Filter */}
      <div className="mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Disputes</option>
          <option value="open">Open</option>
          <option value="under-review">Under Review</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* Disputes List */}
      <div className="space-y-6">
        {disputes.map((dispute) => (
          <div key={dispute.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold">{dispute.type}</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Booking ID: {dispute.bookingId}
                </p>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                dispute.status === 'Resolved'
                  ? 'bg-green-100 text-green-800'
                  : dispute.status === 'Under Review'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {dispute.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Customer</p>
                <p>{dispute.customer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Provider</p>
                <p>{dispute.provider}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Date Filed</p>
                <p>{dispute.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Dispute Amount</p>
                <p>{dispute.amount}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-500">Description</p>
              <p className="text-sm text-gray-600">{dispute.description}</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <MessageSquare className="h-4 w-4 mr-2" />
                View Messages
              </button>
              <div className="flex gap-2">
                {dispute.status !== 'Resolved' && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Resolve
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                      Escalate
                    </button>
                  </>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}