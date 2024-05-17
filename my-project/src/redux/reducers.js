import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_SINGLE_USER,
    SET_MULTI_USER,
    SET_USERS_COUNT,
    SET_SPLIT_METHOD,
    SET_CUSTOM_SPLIT,
  } from './actions';
  
  const initialState = {
    cart: [],
    isMultiUser: false,
    usersCount: 1,
    splitMethod: 'equal',
    customSplits: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.dish && item.dish.name !== action.payload.name),
        };
      case 'SET_SINGLE_USER':
        return {
          ...state,
          isMultiUser: false,
        };
      case 'SET_MULTI_USER':
        return {
          ...state,
          isMultiUser: true,
        };
      case 'SET_USERS_COUNT':
        return {
          ...state,
          usersCount: action.payload,
        };
      case 'SET_SPLIT_METHOD':
        return {
          ...state,
          splitMethod: action.payload,
        };
      case 'SET_CUSTOM_SPLIT':
        return {
          ...state,
          customSplits: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;