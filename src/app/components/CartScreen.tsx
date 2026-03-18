import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Home, Menu, ShoppingCart, Heart, User, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cartItems = [
  {
    id: 1,
    name: 'Пепероні Раш',
    note: '30 см, тонке тісто',
    price: 249,
    quantity: 1,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 2,
    name: 'Сирний Вулкан',
    note: '32 см, сирний бортик',
    price: 289,
    quantity: 1,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 3,
    name: 'Кола 0.5',
    note: 'Охолоджений напій',
    price: 49,
    quantity: 2,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];
const delivery = 39;
const tax = 28;

export default function CartScreen() {
  const [items, setItems] = useState(cartItems);
  const [isProceeding, setIsProceeding] = useState(false);

  const changeQuantity = (itemId: number, delta: number) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== itemId) {
          return item;
        }

        return {
          ...item,
          quantity: Math.max(1, item.quantity + delta),
        };
      }),
    );
  };

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const total = subtotal + delivery + tax;

  const handleProceed = () => {
    setIsProceeding(true);
    window.setTimeout(() => {
      setIsProceeding(false);
    }, 900);
  };

  return (
    <div className="mobile-shell">
      <header className="top-bar">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5 text-[var(--foreground)]" />
          </Link>
          <h1 className="text-[var(--text-h2-size)]">Кошик</h1>
          <div className="h-10 w-10" aria-hidden="true" />
        </div>
      </header>

      <main className="screen-content">
        <section className="screen-section">
          <h2 className="section-title">Ваше замовлення</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <article key={item.id} className="surface-card p-3">
                <div className="flex gap-3 mb-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover border border-[#ffe0b2] flex-shrink-0"
                    loading="lazy"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold leading-tight text-[var(--foreground)] mb-1">{item.name}</h3>
                    <p className="text-[13px] text-[var(--muted-foreground)] mb-2">{item.note}</p>
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.price} грн</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, -1)}
                      className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--background)] flex items-center justify-center pressable"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4 text-[var(--muted-foreground)]" />
                    </button>
                    <span className="text-sm font-semibold text-[var(--foreground)] min-w-6 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, 1)}
                      className="h-9 w-9 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center pressable"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <span className="text-sm font-semibold text-[var(--foreground)]">{item.price * item.quantity} грн</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="screen-section">
          <div className="surface-card p-4">
            <h2 className="section-title !mb-3">Підсумок замовлення</h2>

            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-[13px] text-[var(--muted-foreground)]">
                <span>Сума</span>
                <span>{subtotal} грн</span>
              </div>
              <div className="flex items-center justify-between text-[13px] text-[var(--muted-foreground)]">
                <span>Доставка</span>
                <span>{delivery} грн</span>
              </div>
              <div className="flex items-center justify-between text-[13px] text-[var(--muted-foreground)]">
                <span>Податок</span>
                <span>{tax} грн</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-sm font-semibold text-[var(--foreground)]">Разом</span>
              <span className="text-[16px] font-semibold text-[var(--foreground)]">{total} грн</span>
            </div>
          </div>
        </section>

        <button
          type="button"
          className="cta-primary w-full pressable"
          aria-label="Перейти до оплати"
          onClick={handleProceed}
        >
          {isProceeding ? 'Переходимо...' : 'Перейти до оплати'}
        </button>
      </main>

      <nav className="bottom-nav" aria-label="Bottom navigation">
        <Link to="/" className="nav-item">
          <Home className="h-5 w-5" />
          <span className="text-[11px] font-medium">Головна</span>
          <span className="nav-indicator" />
        </Link>
        <Link to="/menu" className="nav-item">
          <Menu className="h-5 w-5" />
          <span className="text-[11px] font-medium">Меню</span>
          <span className="nav-indicator" />
        </Link>
        <Link to="/cart" className="nav-item nav-item-active" aria-current="page">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-[11px] font-medium">Кошик</span>
          <span className="nav-indicator" />
        </Link>
        <div className="nav-item" aria-hidden="true">
          <Heart className="h-5 w-5" />
          <span className="text-[11px] font-medium">Збережене</span>
          <span className="nav-indicator" />
        </div>
        <div className="nav-item" aria-hidden="true">
          <User className="h-5 w-5" />
          <span className="text-[11px] font-medium">Профіль</span>
          <span className="nav-indicator" />
        </div>
      </nav>
    </div>
  );
}
