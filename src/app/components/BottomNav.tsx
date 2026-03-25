import { Heart, Home, Menu, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

type BottomNavProps = {
  active: 'home' | 'menu' | 'cart';
};

export default function BottomNav({ active }: BottomNavProps) {
  const { totalItems } = useCart();

  return (
    <nav className="bottom-nav" aria-label="Нижня навігація">
      <Link to="/" className={'nav-item' + (active === 'home' ? ' nav-item-active' : '')} aria-current={active === 'home' ? 'page' : undefined}>
        <span className="nav-icon-wrap">
          <Home className="h-5 w-5" />
        </span>
        <span className="nav-label">Головна</span>
        <span className="nav-indicator" />
      </Link>

      <Link to="/menu" className={'nav-item' + (active === 'menu' ? ' nav-item-active' : '')} aria-current={active === 'menu' ? 'page' : undefined}>
        <span className="nav-icon-wrap">
          <Menu className="h-5 w-5" />
        </span>
        <span className="nav-label">Меню</span>
        <span className="nav-indicator" />
      </Link>

      <Link to="/cart" className={'nav-item' + (active === 'cart' ? ' nav-item-active' : '')} aria-current={active === 'cart' ? 'page' : undefined}>
        <span className="nav-icon-wrap">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 ? (
            <span className="cart-badge" aria-label={`У кошику ${totalItems} товарів`}>
              {totalItems}
            </span>
          ) : null}
        </span>
        <span className="nav-label">Кошик</span>
        <span className="nav-indicator" />
      </Link>

      <div className="nav-item nav-item-disabled" aria-hidden="true">
        <span className="nav-icon-wrap">
          <Heart className="h-5 w-5" />
        </span>
        <span className="nav-label">Збережене</span>
        <span className="nav-indicator" />
      </div>

      <div className="nav-item nav-item-disabled" aria-hidden="true">
        <span className="nav-icon-wrap">
          <User className="h-5 w-5" />
        </span>
        <span className="nav-label">Профіль</span>
        <span className="nav-indicator" />
      </div>
    </nav>
  );
}
