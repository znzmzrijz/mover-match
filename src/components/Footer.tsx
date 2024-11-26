import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">MoverMatch</span>
            </div>
            <p className="text-sm">
              Connecting you with reliable moving services in your area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/search" className="hover:text-blue-500">Find Movers</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-500">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-blue-500">Pricing</Link>
              </li>
              <li>
                <Link to="/provider/register" className="hover:text-blue-500">Become a Provider</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-blue-500">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-500">FAQ</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-blue-500">Safety Center</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-blue-500">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-blue-500">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/licenses" className="hover:text-blue-500">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MoverMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}