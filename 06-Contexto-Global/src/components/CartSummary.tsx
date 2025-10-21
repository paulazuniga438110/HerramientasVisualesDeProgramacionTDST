import React from 'react';
import { useCartContext } from '../contexts/CartContext';

const CartSummary = () => {
  const { cart, removeItem, clearCart } = useCartContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
