import { useState } from 'react';
import { Camera, Truck } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Express Movers',
    email: 'contact@expressmovers.com',
    phone: '(555) 123-4567',
    address: '123 Moving St, New York, NY 10001',
    description: 'Professional moving service with over 10 years of experience. We specialize in local and long-distance moves.',
    services: ['Local Moving', 'Long Distance', 'Packing Services'],
    vehicleTypes: ['Box Truck', 'Van'],
    pricePerHour: 85,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Company Profile</h1>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto">
              <img
                src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80"
                alt="Company Profile"
                className="w-full h-full rounded-lg object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                <Camera className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <form className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Description
              </label>
              <textarea
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Offered
              </label>
              <div className="flex flex-wrap gap-2">
                {profile.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800"
                  >
                    <Truck className="h-4 w-4 mr-1" />
                    {service}
                  </span>
                ))}
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  + Add Service
                </button>
              </div>
            </div>

            {/* Vehicle Types */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Types
              </label>
              <div className="flex flex-wrap gap-2">
                {profile.vehicleTypes.map((vehicle) => (
                  <span
                    key={vehicle}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800"
                  >
                    <Truck className="h-4 w-4 mr-1" />
                    {vehicle}
                  </span>
                ))}
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  + Add Vehicle
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hourly Rate ($)
              </label>
              <input
                type="number"
                value={profile.pricePerHour}
                onChange={(e) => setProfile({ ...profile, pricePerHour: parseInt(e.target.value) })}
                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}