import { useState } from 'react';

export default function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      {/* Service Type */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Service Type</h4>
        <div className="space-y-2">
          {['Local Moving', 'Long Distance', 'Commercial', 'Packing'].map((service) => (
            <label key={service} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Vehicle Type */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Vehicle Type</h4>
        <div className="space-y-2">
          {['Box Truck', 'Van', 'Trailer', 'Pickup Truck'].map((vehicle) => (
            <label key={vehicle} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm">{vehicle}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Price Range (per hour)</h4>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Minimum Rating</h4>
        <select className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500">
          <option value="0">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
        Apply Filters
      </button>
    </div>
  );
}