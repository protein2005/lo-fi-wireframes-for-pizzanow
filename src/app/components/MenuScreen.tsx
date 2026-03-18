import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft,
  Home,
  Menu,
  ShoppingCart,
  Heart,
  User,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

export default function MenuScreen() {
  const pizzaItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const toggleCartState = (itemId: number) => {
    setAddedItems((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId],
    );
  };

  return (
    <div
      className="min-h-screen bg-neutral-100 flex flex-col relative"
      style={{ width: '390px', height: '844px', margin: '0 auto' }}
    >
      <div className="bg-white border-b border-neutral-300 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/"
            className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-800" />
          </Link>
          <div className="w-20 h-3 bg-neutral-800 rounded"></div>
          <div className="w-10 h-10"></div>
        </div>
        <div className="flex items-center gap-3 mb-0">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 bg-neutral-200 rounded-lg px-4 py-3 flex items-center gap-3 text-left"
            aria-label="Open search"
          >
            <Search className="w-5 h-5 text-neutral-500" />
            <div className="w-32 h-2 bg-neutral-400 rounded"></div>
          </button>
          <button className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-24">
        <div className="space-y-4">
          {pizzaItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex gap-4">
              {/* Image Placeholder */}
              <div className="w-24 h-24 bg-neutral-300 rounded flex-shrink-0"></div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Pizza Name (Bold Line) */}
                  <div className="w-full h-4 bg-neutral-800 rounded mb-2"></div>
                  {/* Description Lines */}
                  <div className="w-full h-2 bg-neutral-400 rounded mb-1"></div>
                  <div className="w-4/5 h-2 bg-neutral-400 rounded"></div>
                </div>
                
                {/* Price and Add Button */}
                <div className="flex items-center justify-between mt-2">
                  <div className="w-16 h-3 bg-neutral-800 rounded"></div>
                  <button
                    type="button"
                    onClick={() => toggleCartState(item.id)}
                    className={`min-w-20 h-8 rounded flex items-center justify-center px-3 ${
                      addedItems.includes(item.id)
                        ? 'bg-neutral-300 border border-neutral-500'
                        : 'bg-neutral-800'
                    }`}
                    aria-pressed={addedItems.includes(item.id)}
                  >
                    <span
                      className={`text-xs font-medium ${
                        addedItems.includes(item.id) ? 'text-neutral-800' : 'text-white'
                      }`}
                    >
                      {addedItems.includes(item.id) ? 'Added' : 'Add to cart'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 bg-white border-t border-neutral-300 px-6 py-3 flex items-center justify-between" style={{ width: '390px' }}>
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </Link>
        <Link to="/menu" className="flex flex-col items-center gap-1">
          <Menu className="w-6 h-6 text-neutral-800" />
          <div className="w-8 h-1 bg-neutral-800 rounded"></div>
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

      {isSearchOpen && (
        <div className="absolute inset-0 z-20 bg-black/45 flex items-start justify-center px-6 pt-28">
          <div className="w-full bg-white rounded-2xl border border-neutral-300 p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-28 h-3 bg-neutral-800 rounded"></div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center"
                aria-label="Close search"
              >
                <X className="w-4 h-4 text-neutral-700" />
              </button>
            </div>
            <div className="rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-3 flex items-center gap-3 mb-4">
              <Search className="w-5 h-5 text-neutral-500" />
              <div className="w-40 h-2 bg-neutral-400 rounded"></div>
            </div>
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="w-full h-11 rounded-xl bg-neutral-800 text-sm font-medium text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
