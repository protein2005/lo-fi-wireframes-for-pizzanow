import { Link } from 'react-router';
import { ArrowLeft, Home, Menu, ShoppingCart, Heart, User, Plus, Minus } from 'lucide-react';

export default function CartScreen() {
  const cartItems = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col" style={{ width: '390px', height: '844px', margin: '0 auto' }}>
      {/* Header */}
      <div className="bg-white border-b border-neutral-300 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-800" />
          </Link>
          <div className="w-24 h-6 bg-neutral-800 rounded"></div>
          <div className="w-10 h-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-24">
        {/* Cart Items */}
        <div className="mb-6 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4">
              <div className="flex gap-4 mb-3">
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-neutral-300 rounded flex-shrink-0"></div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Pizza Name */}
                    <div className="w-full h-3 bg-neutral-800 rounded mb-2"></div>
                    {/* Description */}
                    <div className="w-3/4 h-2 bg-neutral-400 rounded"></div>
                  </div>
                  
                  {/* Price */}
                  <div className="w-16 h-3 bg-neutral-800 rounded"></div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center">
                    <Minus className="w-4 h-4 text-neutral-600" />
                  </button>
                  <div className="w-6 h-3 bg-neutral-800 rounded"></div>
                  <button className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="w-16 h-3 bg-neutral-800 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Block */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="w-32 h-4 bg-neutral-800 rounded mb-4"></div>
          
          <div className="space-y-3 mb-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-2 bg-neutral-400 rounded"></div>
              <div className="w-16 h-2 bg-neutral-400 rounded"></div>
            </div>
            
            {/* Delivery */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-2 bg-neutral-400 rounded"></div>
              <div className="w-16 h-2 bg-neutral-400 rounded"></div>
            </div>
            
            {/* Tax */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-2 bg-neutral-400 rounded"></div>
              <div className="w-16 h-2 bg-neutral-400 rounded"></div>
            </div>
          </div>

          {/* Total */}
          <div className="pt-3 border-t border-neutral-300 flex items-center justify-between">
            <div className="w-20 h-4 bg-neutral-800 rounded"></div>
            <div className="w-20 h-4 bg-neutral-800 rounded"></div>
          </div>
        </div>

        {/* Proceed to Payment Button */}
        <button className="w-full bg-neutral-800 rounded-lg py-4 flex items-center justify-center">
          <div className="w-48 h-4 bg-white rounded"></div>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 bg-white border-t border-neutral-300 px-6 py-3 flex items-center justify-between" style={{ width: '390px' }}>
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </Link>
        <Link to="/menu" className="flex flex-col items-center gap-1">
          <Menu className="w-6 h-6 text-neutral-400" />
          <div className="w-8 h-1 bg-neutral-400 rounded"></div>
        </Link>
        <Link to="/cart" className="flex flex-col items-center gap-1">
          <ShoppingCart className="w-6 h-6 text-neutral-800" />
          <div className="w-8 h-1 bg-neutral-800 rounded"></div>
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
