import { useState } from 'react';
import { Calendar, MapPin, Package } from 'lucide-react';

export default function Bookings() {
  const [filter, setFilter] = useState('all');

  const bookings = [
    {
      id: 1,
      customer: 'John Smith',
      date: '2024-03-15',
      time: '09:00 AM',
      pickup: '123 Main St, New York, NY',
      delivery: '456 Park Ave, Brooklyn, NY',
      status: 'Pending',
      items: 'Furniture, boxes, appliances',
      amount: '$350',
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      date: '2024-03-14',
      time: '02:00 PM',
      pickup: '789 Broadway, Manhattan, NY',
      delivery: '321 5th Ave, Queens, NY',
      status: 'Completed',
      items: 'Studio apartment items',
      amount: '$480',
    },
    {
      id: 3,
      customer: 'Michael Brown',
      date: '2024-03-13',
      time: '11:00 AM',
      pickup: '159 West St, Bronx, NY',
      delivery: '753 East Rd, Staten Island, NY',
      status: 'In Progress',
      items: 'Office furniture and equipment',
      amount: '$275',
    },
  ];

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status.toLowerCase() === filter);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Bookings</h1>
        
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{booking.customer}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {booking.date} at {booking.time}
                </div>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                booking.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : booking.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-start mb-2">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pickup Location</p>
                    <p className="text-sm">{booking.pickup}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Delivery Location</p>
                    <p className="text-sm">{booking.delivery}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <Package className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Items</p>
                <p className="text-sm">{booking.items}</p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <p className="text-lg font-semibold">{booking.amount}</p>
              <div className="flex gap-2">
                {booking.status === 'Pending' && (
                  <>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Accept
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                      Decline
                    </button>
                  </>
                )}
                {booking.status === 'In Progress' && (
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Mark Complete
                  </button>
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