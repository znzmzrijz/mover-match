import { Star, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Provider } from '../../types';

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Provider Image */}
        <div className="md:w-48 h-48 relative">
          <img
            src={provider.imageUrl}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Provider Info */}
        <div className="flex-grow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {provider.location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                ${provider.pricePerHour}
                <span className="text-sm font-normal text-gray-600">/hr</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-1 font-semibold">{provider.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-600">{provider.reviewCount} reviews</span>
          </div>

          {/* Vehicle Types */}
          <div className="flex flex-wrap gap-2 mb-4">
            {provider.vehicleTypes.map((vehicle) => (
              <span
                key={vehicle}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm"
              >
                <Truck className="h-4 w-4 mr-1" />
                {vehicle}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              to={`/provider/${provider.id}`}
              className="flex-grow md:flex-grow-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            >
              View Profile
            </Link>
            <Link
              to={`/book/${provider.id}`}
              className="flex-grow md:flex-grow-0 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}