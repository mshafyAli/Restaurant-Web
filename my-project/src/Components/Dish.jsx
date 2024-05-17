import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart(dish, quantity));
    }
  };

  return (
    <div className="dish">
      <h3>{dish.name}</h3>
      <p>${dish.price.toFixed(2)}</p>
      <input
        type="number"
        value={quantity}
        min="1" 
        className=''
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button className='text-[18px] hover:bg-blue-600  hover:text-white p-2' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Dish;
