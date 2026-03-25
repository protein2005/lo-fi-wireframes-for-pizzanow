import { useState } from 'react';
import { Link } from 'react-router';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AddToCartButton from './AddToCartButton';
import BottomNav from './BottomNav';
import { useCart } from '../context/CartContext';

type PizzaItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  spicy?: boolean;
};

const pizzaItems: PizzaItem[] = [
  {
    id: 1,
    name: 'Пепероні Раш',
    description: 'Пепероні, моцарела, томатний соус',
    price: 249,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=700',
    spicy: true,
  },
  {
    id: 2,
    name: 'Маргарита Про',
    description: 'Подвійна моцарела, базилік, соус Napoli',
    price: 219,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 3,
    name: 'BBQ Блейз',
    description: 'Курка BBQ, цибуля, фірмовий соус',
    price: 279,
    image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 4,
    name: 'Сирний Вулкан',
    description: '4 сири, сирний бортик, чедер',
    price: 289,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 5,
    name: 'Веджі Фреш',
    description: 'Оливки, печериці, перець, рукола',
    price: 229,
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 6,
    name: 'Міт Супрім',
    description: 'Бекон, шинка, пепероні, яловичина',
    price: 309,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function MenuScreen() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isInCart, toggleItem } = useCart();

  return (
    <div className="mobile-shell">
      <header className="top-bar">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/"
            className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center pressable"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5 text-[var(--foreground)]" />
          </Link>
          <h1 className="text-[var(--text-h2-size)]">Меню</h1>
          <div className="h-10 w-10" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 h-12 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 flex items-center gap-2 text-left pressable"
            aria-label="Відкрити пошук"
          >
            <Search className="h-5 w-5 text-[var(--muted-foreground)]" />
            <span className="text-[13px] text-[var(--muted-foreground)]">Пошук піци або інгредієнтів</span>
          </button>
          <button
            type="button"
            className="h-12 w-12 rounded-xl bg-[var(--accent)] text-[var(--foreground)] flex items-center justify-center pressable"
            aria-label="Відкрити фільтри"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="screen-content">
        <section className="screen-section">
          <h2 className="section-title">Популярні піци</h2>
          <div className="space-y-3">
            {pizzaItems.map((item) => {
              const isAdded = isInCart(item.id);

              return (
                <article key={item.id} className="surface-card p-3">
                  <div className="flex gap-3">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover border border-[#ffe0b2] flex-shrink-0"
                      loading="lazy"
                    />

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-[15px] font-semibold leading-tight text-[var(--foreground)]">{item.name}</h3>
                          {item.spicy ? (
                            <span className="status-chip status-chip-danger">
                              ! Гостра
                            </span>
                          ) : null}
                        </div>
                        <p className="text-[13px] leading-[1.5] text-[var(--muted-foreground)] text-measure">{item.description}</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[var(--foreground)] whitespace-nowrap shrink-0">{item.price} грн</span>
                        <AddToCartButton
                          isAdded={isAdded}
                          itemName={item.name}
                          onClick={() =>
                            toggleItem({
                              id: item.id,
                              name: item.name,
                              note: `${item.spicy ? 'Гостра, ' : ''}30 см`,
                              price: item.price,
                              image: item.image,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <BottomNav active="menu" />

      {isSearchOpen ? (
        <div className="absolute inset-0 z-40 bg-black/40 px-4 pt-24">
          <div className="surface-card p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[var(--text-h2-size)]">Пошук</h2>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="h-9 w-9 rounded-full border border-[var(--border)] flex items-center justify-center pressable"
                aria-label="Закрити пошук"
              >
                <X className="h-4 w-4 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <div className="h-12 rounded-xl border border-[var(--border)] px-3 flex items-center gap-2 bg-[var(--background)] mb-3">
              <Search className="h-5 w-5 text-[var(--muted-foreground)]" />
              <span className="text-[13px] text-[var(--muted-foreground)]">Введіть назву піци...</span>
            </div>
            <button type="button" onClick={() => setIsSearchOpen(false)} className="cta-primary w-full pressable">
              Закрити
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
