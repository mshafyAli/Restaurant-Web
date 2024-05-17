export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_SINGLE_USER = 'SET_SINGLE_USER';
export const SET_MULTI_USER = 'SET_MULTI_USER';
export const SET_USERS_COUNT = 'SET_USERS_COUNT';
export const SET_SPLIT_METHOD = 'SET_SPLIT_METHOD';
export const SET_CUSTOM_SPLIT = 'SET_CUSTOM_SPLIT';

export const addToCart = (dish, quantity) => ({
  type: 'ADD_TO_CART',
  payload: { dish, quantity },
});

export const removeFromCart = (dish) => ({
  type: 'REMOVE_FROM_CART',
  payload: dish,
});

export const setSingleUser = () => ({
  type: 'SET_SINGLE_USER',
});

export const setMultiUser = () => ({
  type: 'SET_MULTI_USER',
});

export const setUsersCount = (count) => ({
  type: 'SET_USERS_COUNT',
  payload: count,
});

export const setSplitMethod = (method) => ({
  type: 'SET_SPLIT_METHOD',
  payload: method,
});

export const setCustomSplit = (splits) => ({
  type: 'SET_CUSTOM_SPLIT',
  payload: splits,
});

