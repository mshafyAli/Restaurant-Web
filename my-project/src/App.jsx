import Navbar from "./Components/navbar";
import Home from "./Pages/Home";
import { useDispatch, useSelector } from 'react-redux';
import { setSingleUser, setMultiUser } from './redux/actions';
import { dishes } from './data';
import Dish from './Components/Dish';
import Cart from './Components/Cart';
import MultiUser from './Components/MultiUser';
import './App.css';

function App() {
  const isMultiUser = useSelector((state) => state.isMultiUser);
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>
      <Home />

      <div className="app">
      <h1 className="text-4xl font-bold pb-8">Food Ordering App</h1>
      <p className="text-lg pb-4">
        This app allows you to order food.
      </p>
      <div>
        <label className="tex-2xl font-semibold">
          <input
            type="checkbox"
            checked={isMultiUser}
            className="mr-2 w-10 h-4"
            onChange={() => {
              if (isMultiUser) {
                dispatch(setSingleUser());
              } else {
                dispatch(setMultiUser());
              }
            }}
          />
          Multi-User Order
        </label>
      </div>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <Dish key={index} dish={dish} />
        ))}
      </div>
      <Cart />
      {isMultiUser && <MultiUser />}
    </div>

    </>
  );
}

export default App;
