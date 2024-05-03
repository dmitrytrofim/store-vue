import { defineStore } from 'pinia';
import axios from 'axios';
import { Product } from '@/model';

export const useStore = defineStore('magaz', {
 state: () => {
  return {
   products: [] as Array<Product>,
   data: [] as Array<Product>,
   rangeCost: {
    min: 0,
    max: 0,
   },
   sliderCost: [],
   cart: {
    show: false,
    products: [] as Array<Product>,
   },
   moreModal: {
    show: false,
    data: {} as Product,
   },
   pages: {
    length: 0,
    limit: 6,
    current: 1,
   },
   search: false,
   orderModal: false,
  };
 },
 getters: {
  getPage(state) {
   return state.pages.current * state.pages.limit - state.pages.limit;
  },
  getPageProducts(state): number {
   return this.getPage + state.pages.limit;
  },
  getPagesProducts(state) {
   return Math.ceil(state.products.length / state.pages.limit);
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
  async loadProducts() {
   try {
    let data = await axios
     .get('https://fakestoreapi.com/products')
     .then((response) => response.data);
    this.data = data;
    this.products = data;
    this.setRangeCost();
   } catch (error) {
    console.error(error);
   }
  },

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
  minusProduct(product) {
   if (this.cart.products[this.getIdProductCart(product)].buy! > 1) {
    this.cart.products[this.getIdProductCart(product)].buy!--;
   } else {
    this.cart.products[this.getIdProductCart(product)].buy! = 1;
   }
  },
  removeProduct(product) {
   this.cart.products.splice(this.getIdProductCart(product), 1);
  },
  removeAll() {
   if (window.confirm('Are you sure?')) this.cart.products = [];
  },
  sortCost(choice) {
   if (choice === 'up') this.products.sort((a, b) => b.price - a.price);
   if (choice === 'down') this.products.sort((a, b) => a.price - b.price);
   this.pages.current = 1;
  },
  sortRating(choice) {
   if (choice === 'up')
    this.products.sort((a, b) => b.rating.rate - a.rating.rate);
   if (choice === 'down')
    this.products.sort((a, b) => a.rating.rate - b.rating.rate);
   this.pages.current = 1;
  },
  filterProductsCost(range) {
   this.products = this.data.filter((prod) => {
    return prod.price > range[0] && prod.price < range[1];
   });
   this.pages.current = 1;
  },
  setRangeCost() {
   const arrayCost = this.data.map((prod) => prod.price);
   const min = Math.floor(Math.min(...arrayCost));
   const max = Math.ceil(Math.max(...arrayCost));
   this.rangeCost.min = min;
   this.rangeCost.max = max;
  },
  resetProducts() {
   this.products = [...this.data];
  },
  getIdProductCart(product) {
   return this.cart.products.findIndex((item) => item.id === product.id);
  },
  setCurrentPage(page) {
   this.pages.current = page;
  },
  searchProducts(text) {
   this.products = this.data.filter((prod) => {
    return prod.title
     .toLocaleLowerCase()
     .includes(text.toLocaleLowerCase().trim());
   });
  },
  setSliderCost(slider) {
   this.sliderCost = slider;
  },
  setSearch(set) {
   this.search = set;
  },
  showOrderModal() {
   this.orderModal = true;
   document.body.classList.add('j-lock');
   this.cart.show = false;
  },
  closeOrderModal() {
   this.orderModal = false;
   document.body.classList.remove('j-lock');
  },
 },
});
