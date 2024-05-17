import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersCount, setSplitMethod, setCustomSplit } from '../redux/actions';

const MultiUser = () => {
  const usersCount = useSelector((state) => state.usersCount);
  const splitMethod = useSelector((state) => state.splitMethod);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => {
    if (!item || !item.dish || typeof item.dish.price !== 'number') {
      return sum;
    }
    return sum + item.dish.price * item.quantity;
  }, 0).toFixed(2);

  const [customSplits, setSplits] = useState(Array(usersCount).fill(0));

  useEffect(() => {
    setSplits(Array(usersCount).fill(0));
  }, [usersCount]);

  const handleUserCountChange = (e) => {
    dispatch(setUsersCount(parseInt(e.target.value, 10)));
  };

  const handleSplitChange = (index, value) => {
    const newSplits = [...customSplits];
    newSplits[index] = parseFloat(value) || 0;
    setSplits(newSplits);
    dispatch(setCustomSplit(newSplits));
  };

  const isCustomSplitValid = customSplits.reduce((sum, value) => sum + value, 0).toFixed(2) === total;

  const equalSplit = (total / usersCount).toFixed(2);

  return (
    <div className="multi-user">
      <h2>Multi-User Options</h2>
      <label>
        Number of Users:
        <input type="number" value={usersCount} min="1" onChange={handleUserCountChange} />
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="split-method"
            checked={splitMethod === 'equal'}
            onChange={() => dispatch(setSplitMethod('equal'))}
          />
          Divide Equally
        </label>
        <label>
          <input
            type="radio"
            name="split-method"
            checked={splitMethod === 'custom'}
            onChange={() => dispatch(setSplitMethod('custom'))}
          />
          Custom Split
        </label>
      </div>
      {splitMethod === 'equal' && (
        <div>
          {Array.from({ length: usersCount }).map((_, index) => (
            <div key={index}>
              User {index + 1}: {equalSplit}
            </div>
          ))}
          <div>
            Total: {total}, Each User Pays: {equalSplit}
          </div>
        </div>
      )}
      {splitMethod === 'custom' && (
        <div>
          {customSplits.map((split, index) => (
            <div key={index}>
              <label>
                User {index + 1}:
                <input
                  type="number"
                  value={split}
                  min="0"
                  onChange={(e) => handleSplitChange(index, e.target.value)}
                />
              </label>
            </div>
          ))}
          <div>
            Total: {total}, Custom Splits Total: {customSplits.reduce((sum, value) => sum + value, 0).toFixed(2)}
          </div>
          {!isCustomSplitValid && (
            <div className="error">The custom split amounts must add up to the total bill.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiUser;
