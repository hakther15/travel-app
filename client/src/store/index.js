import { createStore as _createStore } from 'vuex';
import axios from 'axios';

export function createStore(currentToken, currentUser) {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},
      cart: savedCart,
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        state.token = '';
        state.user = {};
        state.cart = [];
        axios.defaults.headers.common = {};
      },
      SAVE_CART(state, product) {
        const existingProduct = state.cart.find(item => item.productId === product.productId);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.cart.push({...product, quantity: 1});
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      REMOVE_ONE_FROM_CART(state, productId) {
        const product = state.cart.find(item => item.productId === productId);
        if(product) {
          if(product.quantity > 1) {
            product.quantity -= 1;
          } else {
            state.cart = state.cart.filter(item => item.productId !== productId);
          }
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    }
  });

  
  return store;
}