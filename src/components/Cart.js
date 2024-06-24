import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <div>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
