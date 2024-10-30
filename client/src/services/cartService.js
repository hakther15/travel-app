import axios from 'axios';


export default {


  clear() {
    return axios.delete(`/cart/clear`);
  },
  
  get(stateCode) {
    return axios.get(`/cart/total?stateCode=${stateCode}`);
  },

  post(cartItem) {
    return axios.post(`/cart/add`, cartItem);
  },

  add(cartItem) {
    return axios.post(`/cart/add`, cartItem);
  },

  updateQuantity(productId, quantity) {
    return axios.put(`/cart/update`, {productId, quantity});
  },

  delete(productId) {
        return axios.delete(`/cart/delete/${productId}`);
  }
}

