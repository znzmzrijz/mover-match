import { useParams } from 'react-router-dom';
import { Star, MapPin, Truck, Calendar, Shield, Clock } from 'lucide-react';

export default function ProviderProfile() {
  const { id } = useParams();

  // Mock data for demonstration
  const provider = {
    id,
    name: 'Express Movers',
    rating: 4.8,
    reviewCount: 156,
    location: 'New York, NY',
    vehicleTypes: ['Box Truck', 'Van'],
    pricePerHour: 85,
    imageUrl: 'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80',
    description: 'Professional moving service with over 10 years of experience. We specialize in local and long-distance moves, offering reliable and efficient service.',
    services: ['Local Moving', 'Long Distance', 'Packing Services', 'Storage Solutions'],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Provider Image */}
            <div className="md:w-1/3">
              <img
                src={provider.imageUrl}
                alt={provider.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Provider Info */}
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{provider.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 font-semibold">{provider.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{provider.reviewCount} reviews</span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                {provider.location}
              </div>

              <p className="text-gray-600 mb-6">{provider.description}</p>

              <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Book Now
                </button>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Services */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {provider.services.map((service) => (
                <div key={service} className="bg-white p-4 rounded-lg shadow-sm">
                  <Truck className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold mb-2">{service}</h3>
                  <p className="text-sm text-gray-600">
                    Professional {service.toLowerCase()} services with guaranteed satisfaction.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-6">Booking Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-medium">Hourly Rate</h3>
                  <p className="text-gray-600">${provider.pricePerHour}/hour</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-medium">Availability</h3>
                  <p className="text-gray-600">Available 7 days a week</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-medium">Insurance</h3>
                  <p className="text-gray-600">Full coverage included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}