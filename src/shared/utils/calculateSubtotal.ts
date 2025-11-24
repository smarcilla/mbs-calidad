export interface CartItem {
  price: number;
  quantity: number;
}

/**
 * Calcula el subtotal de un carrito sumando price * quantity para cada item.
 * Implementado con Array.prototype.reduce para cumplir la especificación.
 */
export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
