<script setup>
import { useCartStore } from "../stores/useCartStore";
import { useToast } from "vue-toastification";

const cartStore = useCartStore();

const toast = useToast();
</script>

<template>
  <div class="col-span-1 border shadow-md p-4 h-fit max-lg:mt-8">
    <h3 class="text-2xl font-bold mb-4">
      Your Cart ({{ cartStore.cart.length }})
    </h3>
    <div
      v-for="item in cartStore.cart"
      :key="item.name"
      class="flex justify-between items-center mb-2"
    >
      <span>{{ item.quantity }}x {{ item.name }}</span>
      <span>${{ (item.quantity * item.price).toFixed(2) }}</span>
    </div>
    <p class="text-lg font-semibold mt-4">
      Order Total: ${{ cartStore.calculateTotal().toFixed(2) }}
    </p>
    <button
      @click="
        cartStore.clearCart();
        toast.success('Order confirmed!');
      "
      class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 mt-4 rounded"
    >
      Confirm Order
    </button>
    <p class="mt-2 text-gray-500 text-sm">This is a carbon-neutral delivery</p>
  </div>
</template>
