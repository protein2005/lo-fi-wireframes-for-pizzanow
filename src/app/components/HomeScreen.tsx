import { useState } from 'react';
import { Link } from 'react-router';
import { Home, Menu, ShoppingCart, Heart, User, Flame, Clock3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const popularPizzas = [
  {
    id: 1,
    name: 'Пепероні Раш',
    size: '30 см',
    price: '249 грн',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 2,
    name: 'Сирний Вулкан',
    size: '32 см',
    price: '269 грн',
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 3,
    name: 'BBQ Блейз',
    size: '30 см',
    price: '279 грн',
    image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

const offers = [
  {
    id: 1,
    title: '2 піци за 399 грн',
    subtitle: 'Щодня з 12:00 до 16:00. Швидка доставка.',
    tag: 'Гаряча ціна',
  },
  {
    id: 2,
    title: 'Безкоштовний напій',
    subtitle: 'На замовлення від 500 грн у кошику.',
    tag: 'Бонус',
  },
];

export default function HomeScreen() {
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const toggleAdd = (pizzaId: number) => {
    setAddedItems((current) =>
      current.includes(pizzaId)
        ? current.filter((id) => id !== pizzaId)
        : [...current, pizzaId],
    );
  };

  return (
    <div className="mobile-shell">
      <header className="top-bar">
        <div className="flex items-center justify-between">
          <div>
            <p className="caption-text mb-1">PizzaNow</p>
            <h1>Замовляй за хвилину</h1>
          </div>
          <div className="h-12 w-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center">
            <span className="text-sm font-semibold text-[var(--foreground)]">AK</span>
          </div>
        </div>
      </header>

      <main className="screen-content">
        <section className="screen-section">
          <div className="surface-card p-4 bg-gradient-to-r from-[#e53935] to-[#ff7043] border-transparent text-white">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/80 mb-1">Повторити попереднє</p>
                <h2 className="text-white">Пепероні + Кола</h2>
              </div>
              <Clock3 className="h-5 w-5 text-white/90" />
            </div>
            <p className="text-[13px] leading-[1.4] text-white/90 mb-4">Повторіть минуле замовлення в один тап. Доставка за 25-35 хв.</p>
            <button type="button" className="h-11 px-4 rounded-xl bg-white text-[#b72724] text-sm font-semibold pressable">
              Повторити замовлення - 329 грн
            </button>
          </div>
        </section>

        <section className="screen-section">
          <h2 className="section-title">Популярні піци</h2>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {popularPizzas.map((pizza) => {
              const isAdded = addedItems.includes(pizza.id);
              const addButtonClass = 'add-btn pressable' + (isAdded ? ' added' : '');

              return (
              <article key={pizza.id} className="surface-card p-3 min-w-[188px]">
                <ImageWithFallback
                  src={pizza.image}
                  alt={pizza.name}
                  className="h-24 w-full rounded-xl object-cover mb-3"
                  loading="lazy"
                />
                <p className="text-[15px] font-semibold text-[var(--foreground)] leading-tight mb-1">{pizza.name}</p>
                <p className="caption-text mb-3">{pizza.size}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--foreground)] whitespace-nowrap shrink-0">{pizza.price}</span>
                  <button
                    type="button"
                    className={addButtonClass}
                    aria-label={'Додати ' + pizza.name + ' у кошик'}
                    aria-pressed={isAdded}
                    onClick={() => toggleAdd(pizza.id)}
                  >
                    {isAdded ? 'Додано' : 'У кошик'}
                  </button>
                </div>
              </article>
              );
            })}
          </div>
        </section>

        <section className="screen-section">
          <h2 className="section-title">Спеціальні пропозиції</h2>
          <div className="space-y-3">
            {offers.map((offer) => (
              <article key={offer.id} className="surface-card p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-[16px] font-semibold text-[var(--foreground)] leading-tight">{offer.title}</h3>
                  <span className="h-7 px-3 rounded-full bg-[var(--accent)] text-[var(--foreground)] text-xs font-semibold inline-flex items-center">
                    {offer.tag}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--muted-foreground)] leading-[1.4] mb-3">{offer.subtitle}</p>
                <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#c0392b]">
                  <Flame className="h-4 w-4" />
                  Акція діє сьогодні
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Bottom navigation">
        <Link to="/" className="nav-item nav-item-active" aria-current="page">
          <Home className="h-5 w-5" />
          <span className="text-[11px] font-medium">Головна</span>
          <span className="nav-indicator" />
        </Link>
        <Link to="/menu" className="nav-item">
          <Menu className="h-5 w-5" />
          <span className="text-[11px] font-medium">Меню</span>
          <span className="nav-indicator" />
        </Link>
        <Link to="/cart" className="nav-item">
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
