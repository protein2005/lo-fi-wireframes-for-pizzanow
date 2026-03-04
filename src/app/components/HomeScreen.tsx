import { Link } from 'react-router';
import { Home, Menu, ShoppingCart, Heart, User } from 'lucide-react';

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col" style={{ width: '390px', height: '844px', margin: '0 auto' }}>
      {/* Header */}
      <div className="bg-white border-b border-neutral-300 px-6 py-4 flex items-center justify-between">
        <div className="w-24 h-8 bg-neutral-400"></div>
        <div className="w-10 h-10 rounded-full bg-neutral-300"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-24">
        {/* Repeat Last Order Block */}
        <div className="bg-neutral-800 rounded-lg p-6 mb-8 h-32 flex flex-col justify-between">
          <div className="w-48 h-3 bg-neutral-600 rounded"></div>
          <div className="w-32 h-3 bg-neutral-600 rounded"></div>
        </div>

        {/* Popular Pizzas Section */}
        <div className="mb-8">
          <div className="w-32 h-4 bg-neutral-800 rounded mb-4"></div>
          <div className="flex gap-4 overflow-x-auto -mx-6 px-6 pb-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 flex-shrink-0" style={{ width: '160px' }}>
                <div className="w-full h-24 bg-neutral-300 rounded mb-3"></div>
                <div className="w-full h-3 bg-neutral-800 rounded mb-2"></div>
                <div className="w-20 h-2 bg-neutral-400 rounded mb-3"></div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-3 bg-neutral-800 rounded"></div>
                  <div className="w-8 h-8 bg-neutral-800 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mb-8">
          <div className="w-32 h-4 bg-neutral-800 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4 flex gap-4">
                <div className="w-20 h-20 bg-neutral-300 rounded flex-shrink-0"></div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-full h-3 bg-neutral-800 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-neutral-400 rounded mb-1"></div>
                    <div className="w-2/3 h-2 bg-neutral-400 rounded"></div>
                  </div>
                  <div className="w-16 h-3 bg-neutral-800 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 bg-white border-t border-neutral-300 px-6 py-3 flex items-center justify-between" style={{ width: '390px' }}>
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-neutral-800" />
          <div className="w-8 h-1 bg-neutral-800 rounded"></div>
        </Link>
        <Link to="/menu" className="flex flex-col items-center gap-1">
          <Menu className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </Link>
        <Link to="/cart" className="flex flex-col items-center gap-1">
          <ShoppingCart className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </div>
      </div>
    </div>
  );
}
