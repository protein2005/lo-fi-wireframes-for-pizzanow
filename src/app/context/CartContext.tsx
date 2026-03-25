import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type CartItem = {
  id: number;
  name: string;
  note: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartProduct = Omit<CartItem, 'quantity'>;

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  isInCart: (itemId: number) => boolean;
  toggleItem: (product: CartProduct) => void;
  updateQuantity: (itemId: number, delta: number) => void;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: 'Пепероні Раш',
    note: '30 см, тонке тісто',
    price: 249,
    quantity: 1,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 4,
    name: 'Сирний Вулкан',
    note: '32 см, сирний бортик',
    price: 289,
    quantity: 1,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 101,
    name: 'Кола 0.5',
    note: 'Охолоджений напій',
    price: 49,
    quantity: 2,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const toggleItem = (product: CartProduct) => {
    setItems((current) => {
      const existingItem = current.find((item) => item.id === product.id);

      if (existingItem) {
        return current.filter((item) => item.id !== product.id);
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: number, delta: number) => {
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

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      isInCart: (itemId: number) => items.some((item) => item.id === itemId),
      toggleItem,
      updateQuantity,
    }),
    [items, totalItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
