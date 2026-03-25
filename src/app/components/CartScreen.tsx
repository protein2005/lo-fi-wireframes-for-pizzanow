import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Minus, Plus, ReceiptText, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { useCart } from '../context/CartContext';

const delivery = 39;
const tax = 28;

export default function CartScreen() {
  const { items, totalItems, updateQuantity } = useCart();
  const [isProceeding, setIsProceeding] = useState(false);

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
          <div className="cart-overview-card">
            <div className="flex items-center gap-3">
              <div className="summary-icon-wrap">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <h2 className="section-title !mb-1">Ваше замовлення</h2>
                <p className="caption-text">{totalItems} позицій у кошику</p>
              </div>
            </div>
          </div>
        </section>

        <section className="screen-section">
          {items.length > 0 ? (
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
                      <p className="text-[13px] leading-[1.5] text-[var(--muted-foreground)] text-measure mb-2">{item.note}</p>
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.price} грн</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="counter-btn counter-btn-muted pressable"
                        aria-label={`Зменшити кількість ${item.name}`}
                        disabled={item.quantity === 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="quantity-badge" aria-label={`Кількість ${item.quantity}`}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="counter-btn counter-btn-primary pressable"
                        aria-label={`Збільшити кількість ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-[var(--foreground)]">{item.price * item.quantity} грн</p>
                      <span className="caption-text">Разом за позицію</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="surface-card p-5 text-center">
              <div className="summary-icon-wrap mx-auto mb-3">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <h2 className="section-title !mb-2">Кошик порожній</h2>
              <p className="supporting-text text-measure mx-auto">
                Додайте позиції з меню, щоб перейти до оформлення.
              </p>
            </div>
          )}
        </section>

        <section className="screen-section">
          <div className="surface-card cart-summary-card p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="summary-icon-wrap">
                <ReceiptText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="section-title !mb-1">Підсумок замовлення</h2>
                <p className="caption-text">До оплати {total} грн</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
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
              <span className="text-[18px] font-semibold text-[var(--foreground)]">{total} грн</span>
            </div>

            <button
              type="button"
              className="cta-primary cart-cta w-full pressable mt-4"
              aria-label="Перейти до оплати"
              onClick={handleProceed}
              disabled={items.length === 0}
            >
              {isProceeding ? 'Переходимо до оплати...' : 'Перейти до оплати'}
            </button>
          </div>
        </section>
      </main>

      <BottomNav active="cart" />
    </div>
  );
}
