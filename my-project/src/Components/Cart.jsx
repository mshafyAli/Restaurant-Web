import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (dish) => {
    dispatch(removeFromCart(dish));
  };

  const total = cart.reduce((sum, item) => {
    if (!item || !item.dish || typeof item.dish.price !== 'number') {
      return sum;
    }
    return sum + item.dish.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h2 className='text-center pb-4 text-2xl font-bold'>Cart</h2>
      {cart.map((item, index) => {
        if (!item || !item.dish) {
          return null;
        }
        return (
          <div key={index} className="cart-item">
            <span>{item.dish.name} x {item.quantity}</span>
            <span>${(item.dish.price * item.quantity).toFixed(2)}</span>
            <button className='hover:bg-red-500 hover:text-white p-2' onClick={() => handleRemove(item.dish)}>Remove</button>
          </div>
        );
      })}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
