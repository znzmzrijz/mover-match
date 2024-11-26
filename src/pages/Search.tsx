import { useState } from 'react';
import { Search as SearchIcon, MapPin, Truck, Filter, MessageSquare, Bookmark } from 'lucide-react';
import { Provider } from '../types';

// Mock data for demonstration
const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'Express Movers',
    rating: 4.8,
    reviewCount: 156,
    location: 'New York, NY',
    vehicleTypes: ['Box Truck', 'Van'],
    pricePerHour: 85,
    imageUrl: 'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'City Relocation Pro',
    rating: 4.6,
    reviewCount: 98,
    location: 'Brooklyn, NY',
    vehicleTypes: ['Box Truck', 'Trailer'],
    pricePerHour: 75,
    imageUrl: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80',
  },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Find <span className="text-[#CCFF00]">Movers</span> to collaborate with
          </h1>
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for movers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#222222] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#CCFF00] focus:outline-none"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProviders.map((provider) => (
            <div key={provider.id} className="bg-[#222222] rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <img
                  src={provider.imageUrl}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-right">
                  <div className="text-2xl font-bold">${provider.pricePerHour}</div>
                  <div className="text-sm text-gray-400">per hour</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
              
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {provider.location}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-[#CCFF00] mr-1">★</span>
                  <span>{provider.rating}</span>
                  <span className="text-gray-400 ml-1">({provider.reviewCount})</span>
                </div>
                <div className="flex space-x-2">
                  {provider.vehicleTypes.map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 bg-[#333333] rounded-full text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-[#CCFF00] text-black rounded-lg hover:bg-[#b3ff00] transition-colors">
                  Book Now
                </button>
                <button className="p-2 bg-[#333333] rounded-lg hover:bg-[#444444] transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </button>
                <button className="p-2 bg-[#333333] rounded-lg hover:bg-[#444444] transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          {/* Show All Card */}
          <div className="bg-[#7C3AED] rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-bold mb-2">Show All</h3>
            <p className="text-lg mb-4">13,150 movers</p>
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-white border-2 border-[#7C3AED]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}