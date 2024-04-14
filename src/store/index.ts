import { defineStore } from 'pinia';
import axios from 'axios';
import { Product } from '@/model';

export const useStore = defineStore('magaz', {
 state: () => {
  return {
   products: [] as Array<Product>,
   cart: {
    show: false,
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
  calcProductCart(state) {
   const result = state.cart.products.reduce(
    (acc: number, cur: Product): any => {
     return acc + (cur.buy ? cur.buy : 1) * cur.price;
    },
    0
   );
   return +result.toFixed(2);
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
  showCart() {
   document.body.classList.add('j-lock');
   this.cart.show = true;
  },
  closeCart() {
   document.body.classList.remove('j-lock');
   this.cart.show = false;
  },
  addProduct(product) {
   this.cart.products[this.getIdProductCart(product)].buy!++;
  },
  removeProduct(product) {
   if (this.cart.products[this.getIdProductCart(product)].buy! == 1) {
    this.cart.products.splice(this.getIdProductCart(product), 1);
   } else {
    this.cart.products[this.getIdProductCart(product)].buy!--;
   }
  },
  getIdProductCart(product) {
   return this.cart.products.findIndex((item) => item.id === product.id);
  },
 },
});
