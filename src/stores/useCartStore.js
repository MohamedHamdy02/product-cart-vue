import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addToCart = (item) => {
    const existingItem = cart.value.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ ...item, quantity: 1 });
    }
  };

  const increment = (itemName) => {
    const item = cart.value.find((cartItem) => cartItem.name === itemName);
    if (item) {
      item.quantity++;
    }
  };

  const decrement = (itemName) => {
    const item = cart.value.find((cartItem) => cartItem.name === itemName);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      cart.value = cart.value.filter((cartItem) => cartItem.name !== itemName);
    }
  };

  const calculateTotal = () => {
    return cart.value.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const clearCart = () => {
    cart.value = [];
  };

  return { cart, addToCart, increment, decrement, calculateTotal, clearCart };
});
