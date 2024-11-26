import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, MessageSquare, Bookmark, ArrowRight, ArrowUpRight } from 'lucide-react';

const mockProviders = [
  {
    id: 1,
    name: 'Express Movers',
    location: 'New York, NY',
    followers: '870',
    price: 85,
    image: 'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80',
    verified: true
  },
  {
    id: 2,
    name: 'City Relocation',
    location: 'Brooklyn, NY',
    followers: '440',
    price: 75,
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80',
    verified: true
  },
  {
    id: 3,
    name: 'Swift Movers',
    location: 'Queens, NY',
    followers: '315',
    price: 95,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80',
    verified: true
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#18181B]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Move anything with <br />
            <span className="text-[#FACC15]">the push of a button</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-[#27272A] rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search for providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none px-4 py-2"
              />
              <button className="px-6 py-2 bg-[#FACC15] text-black font-medium rounded-lg hover:bg-[#F59E0B] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-[#27272A] rounded-xl p-6 hover:bg-[#323232] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#FACC15]">${provider.price}</div>
                  <div className="text-sm text-gray-400">per hour</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
              
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {provider.location}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-sm text-gray-400">{provider.followers} followers</span>
                </div>
                {provider.verified && (
                  <span className="px-2 py-1 bg-[#374151] rounded-full text-xs text-white">
                    Verified
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-[#FACC15] text-black rounded-lg hover:bg-[#F59E0B] transition-colors font-medium">
                  Book Now
                </button>
                <button className="p-2 bg-[#374151] rounded-lg hover:bg-[#4B5563] transition-colors">
                  <MessageSquare className="h-5 w-5 text-white" />
                </button>
                <button className="p-2 bg-[#374151] rounded-lg hover:bg-[#4B5563] transition-colors">
                  <Bookmark className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          ))}

          {/* Show All Card */}
          <Link
            to="/search"
            className="bg-[#8B5CF6] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#7C3AED] transition-colors cursor-pointer"
          >
            <ArrowUpRight className="h-8 w-8 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Show All</h3>
            <p className="text-lg text-white/80">13,150 providers</p>
          </Link>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FACC15] rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Find Providers</h2>
              <p className="text-lg text-black/80">
                Connect with professional movers in your area
              </p>
            </div>
            <Link
              to="/search"
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}