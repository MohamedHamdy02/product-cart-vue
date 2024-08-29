<script setup>
import { useCartStore } from "@/stores/useCartStore";

const cartStore = useCartStore();

defineProps({
  item: Object,
});
</script>

<template>
  <div class="absolute -bottom-6 w-1/2 left-1/2 -translate-x-1/2">
    <button
      v-if="!cartStore.cart.find((cartItem) => cartItem.name === item.name)"
      @click="cartStore.addToCart(item)"
      type="button"
      class="w-full border border-orange-700 hover:border-orange-500 bg-white font-semibold py-3 rounded-full"
    >
      Add to Cart
    </button>

    <div
      v-else
      class="flex justify-between items-center bg-white border border-orange-700 rounded-full p-3"
    >
      <button
        type="button"
        @click="cartStore.decrement(item.name)"
        class="text-orange-500 font-bold"
      >
        -
      </button>
      <span>{{
        cartStore.cart.find((cartItem) => cartItem.name === item.name)?.quantity
      }}</span>
      <button
        type="button"
        @click="cartStore.increment(item.name)"
        class="text-orange-500 font-bold"
      >
        +
      </button>
    </div>
  </div>
</template>
