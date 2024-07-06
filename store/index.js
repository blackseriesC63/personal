import { defineStore } from "pinia";

export const usePiniaStore = defineStore("pinia", {
  state: () => ({
    likedProducts: [],
    basket: [],
  }),
  actions: {
    addProductToLiked(product) {
      const index = this.likedProducts.findIndex((p) => p.id === product.id);
      if (index === -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
    },
    addProductToBasket(product) {
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index === -1) {
        product.quantity = 1;
        this.basket.push(product);
      } else {
        this.basket[index].quantity += 1;
      }
    },
    removeProductFromLiked(product) {
      const index = this.likedProducts.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.likedProducts.splice(index, 1);
      }
    },
    removeProductFromBasket(product) {
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.basket.splice(index, 1);
      }
    },
    incrementQuantity(product) {
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.basket[index].quantity += 1;
      }
    },
    decrementQuantity(product) {
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index !== -1 && this.basket[index].quantity > 1) {
        this.basket[index].quantity -= 1;
      }
    },
  },
  persist: true,
});
