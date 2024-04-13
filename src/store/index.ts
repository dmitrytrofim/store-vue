import { defineStore } from 'pinia';
import axios from 'axios';
import { Product } from '@/model';

export const useStore = defineStore('magaz', {
 state: () => {
  return {
   products: [] as Array<Product>,
   cart: {
    modal: false,
    products: [] as Array<Product>,
   },
   moreModal: {
    show: false,
    data: {} as Product,
   },
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
   if (!this.cart.products.includes(product)) {
    product.buy = 1;
    this.cart.products.unshift(product);
   } else {
    this.cart.products = this.cart.products.filter((item) => item !== product);
   }
  },
  showModal(data) {
   this.moreModal.show = true;
   this.moreModal.data = data;
   document.body.classList.add('j-lock');
  },
  closeModal() {
   this.moreModal.show = false;
   document.body.classList.remove('j-lock');
  },
 },
});
