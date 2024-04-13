import { defineStore } from 'pinia';
import axios from 'axios';
import { Product } from '@/model';

export const useMagaz = defineStore('magaz', {
 state: () => {
  return {
   products: [] as Array<Product>,
   cart: [] as Array<Product>,
  };
 },
 getters: {
  async loadProducts(state) {
   try {
    let data = await axios
     .get('https://fakestoreapi.com/products')
     .then((response) => response.data);
    state.products = data;
   } catch (error) {
    console.error(error);
   }
  },
 },
 actions: {
  addToCart(product) {
   if (this.cart.includes(product)) {
    return (this.cart = this.cart.filter((item) => item !== product));
   }
   if (!this.cart.includes(product)) this.cart.unshift(product);
  },
 },
});
