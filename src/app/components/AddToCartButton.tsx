import { Check, Plus } from 'lucide-react';

type AddToCartButtonProps = {
  isAdded: boolean;
  itemName: string;
  onClick: () => void;
};

export default function AddToCartButton({
  isAdded,
  itemName,
  onClick,
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={'add-btn pressable' + (isAdded ? ' added' : '')}
      aria-label={`${isAdded ? 'Додано' : 'Додати до кошика'}: ${itemName}`}
      aria-pressed={isAdded}
    >
      <span className="add-btn__icon" aria-hidden="true">
        {isAdded ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      </span>
      <span>{isAdded ? 'Додано' : 'Додати до кошика'}</span>
    </button>
  );
}
