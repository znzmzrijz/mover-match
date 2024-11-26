import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#18181B] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-[#FACC15]" />
            <span className="text-xl font-bold text-white">MoverMatch</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/search" className="text-gray-300 hover:text-white transition-colors">
              Find Providers
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#FACC15] text-black font-medium hover:bg-[#F59E0B] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}